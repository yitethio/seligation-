import { type InsertContactMessage, type ContactMessage } from "@shared/schema";
import { Resend } from "resend";

export interface IStorage {
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
}

export class MailStorage implements IStorage {
  private resend: Resend | null = null;

  constructor() {
    if (process.env.RESEND_API_KEY) {
      this.resend = new Resend(process.env.RESEND_API_KEY);
    }
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = Math.floor(Math.random() * 10000); // Simple ID generation
    const createdAt = new Date();
    const message: ContactMessage = { ...insertMessage, id, createdAt };

    if (!this.resend) {
      console.log("No RESEND_API_KEY provided. Logging message to console:");
      console.log(JSON.stringify(message, null, 2));
      return message;
    }

    try {
      await this.resend.emails.send({
        from: "onboarding@resend.dev",
        to: "seligation@gmail.com",
        replyTo: insertMessage.email,
        subject: `New Contact Request: ${insertMessage.name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
            <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">New Message from seligation</h2>
            <p style="font-size: 16px; color: #555;">You have received a new inquiry from your website contact form.</p>
            
            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-top: 20px;">
              <p><strong>Name:</strong> ${insertMessage.name}</p>
              <p><strong>Email:</strong> <a href="mailto:${insertMessage.email}">${insertMessage.email}</a></p>
              <p><strong>Service:</strong> ${insertMessage.service || "General Inquiry"}</p>
            </div>
            
            <div style="margin-top: 25px;">
              <h3 style="color: #333; font-size: 18px;">Message Content:</h3>
              <p style="background-color: #ffffff; padding: 15px; border: 1px solid #ddd; border-left: 4px solid #007bff; font-style: italic; white-space: pre-wrap;">${insertMessage.message}</p>
            </div>
            
            <p style="margin-top: 30px; font-size: 12px; color: #888; text-align: center;">
              This email was sent automatically from your website.
            </p>
          </div>
        `,
      });
      console.log("Contact email sent successfully via Resend.");
    } catch (error) {
      console.error("Failed to send contact email via Resend:", error);
    }

    return message;
  }
}

export const storage = new MailStorage();

import { type InsertContactMessage, type ContactMessage } from "@shared/schema";
import nodemailer from "nodemailer";

export interface IStorage {
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
}

export class MailStorage implements IStorage {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = Math.floor(Math.random() * 10000); // Simple ID generation
    const createdAt = new Date();
    const message: ContactMessage = { ...insertMessage, id, createdAt };

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      subject: `New Contact Request: ${insertMessage.name}`,
      text: `
You have received a new message from your website contact form.

Name: ${insertMessage.name}
Email: ${insertMessage.email}
Service: ${insertMessage.service || "General Inquiry"}

Message:
${insertMessage.message}
      `,
    };

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.log("No email credentials provided. Logging message to console:");
      console.log(JSON.stringify(message, null, 2));
      return message;
    }

    try {
      await this.transporter.sendMail(mailOptions);
      console.log("Contact email sent successfully.");
    } catch (error) {
      console.error("Failed to send contact email:", error);
      // We don't throw here so the user still gets a success response from the form
    }

    return message;
  }
}

export const storage = new MailStorage();

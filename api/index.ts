import express from "express";
import { Resend } from "resend";
import { z } from "zod";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// --- Schema (from shared/schema.ts) ---
const insertContactMessageSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    message: z.string().min(1, "Message is required"),
    service: z.string().optional(),
});

// --- Contact submission route ---
app.post("/api/contact", async (req, res) => {
    try {
        const input = insertContactMessageSchema.parse(req.body);

        const id = Math.floor(Math.random() * 10000);
        const createdAt = new Date();
        const message = { ...input, id, createdAt };

        const apiKey = process.env.RESEND_API_KEY;
        if (apiKey) {
            const resend = new Resend(apiKey);
            try {
                await resend.emails.send({
                    from: "onboarding@resend.dev",
                    to: "seligation@gmail.com",
                    replyTo: input.email,
                    subject: `New Contact Request: ${input.name}`,
                    html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
              <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">New Message from seligation</h2>
              <p style="font-size: 16px; color: #555;">You have received a new inquiry from your website contact form.</p>
              <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-top: 20px;">
                <p><strong>Name:</strong> ${input.name}</p>
                <p><strong>Email:</strong> <a href="mailto:${input.email}">${input.email}</a></p>
                <p><strong>Service:</strong> ${input.service || "General Inquiry"}</p>
              </div>
              <div style="margin-top: 25px;">
                <h3 style="color: #333; font-size: 18px;">Message Content:</h3>
                <p style="background-color: #ffffff; padding: 15px; border: 1px solid #ddd; border-left: 4px solid #007bff; font-style: italic; white-space: pre-wrap;">${input.message}</p>
              </div>
              <p style="margin-top: 30px; font-size: 12px; color: #888; text-align: center;">
                This email was sent automatically from your website.
              </p>
            </div>
          `,
                });
                console.log("Contact email sent successfully via Resend.");
            } catch (emailErr) {
                console.error("Failed to send contact email via Resend:", emailErr);
            }
        } else {
            console.log("No RESEND_API_KEY. Message logged:", JSON.stringify(message, null, 2));
        }

        res.status(201).json(message);
    } catch (err) {
        if (err instanceof z.ZodError) {
            return res.status(400).json({
                message: err.errors[0].message,
                field: err.errors[0].path.join("."),
            });
        }
        console.error("Unexpected error:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// Error handler
app.use((err: any, _req: any, res: any, _next: any) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
});

// Vercel serverless function handler
export default app;

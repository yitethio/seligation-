import { setupApp, app } from "../server/app.js";

// Vercel serverless function handler
export default async function handler(req: any, res: any) {
    await setupApp();
    app(req, res);
}

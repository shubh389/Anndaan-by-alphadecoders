import { createServer } from "../server";
import { VercelRequest, VercelResponse } from "@vercel/node";

const app = createServer();

export default function handler(req: VercelRequest, res: VercelResponse) {
  return app(req, res);
}

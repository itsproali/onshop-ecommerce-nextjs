// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { connectDB, disconnectDB } from "@/utils/db";

export default function handler(req, res) {
  connectDB();
  // disconnectDB();
  res.status(200).json({ name: "John Doe" });
}

// app/api/ping/route.ts
import { NextResponse } from "next/server";
import { connectMongo } from "@/querys/mongoose";

export async function GET() {
  const db = (await connectMongo()).connection.db!;
  await db.command({ ping: 1 });
  return NextResponse.json({ ok: true, message: "MongoDB conectado" });
}

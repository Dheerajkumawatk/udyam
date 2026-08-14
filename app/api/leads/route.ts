import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import os from "os";
import path from "path";

// DEMO ONLY: writes submissions to a JSON file in the OS temp directory so
// this works both locally and on serverless platforms like Vercel (whose
// project directory is read-only at runtime — only /tmp is writable, and
// it's wiped between deployments/cold starts). This is fine for demoing
// the flow, not for production — replace with a real database (Postgres +
// Prisma is a natural fit) before launch.
const DATA_FILE = path.join(os.tmpdir(), "udyam-bazaar-leads.json");

async function readLeads() {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  const required = ["businessName", "sector", "location", "email", "listingType"];
  for (const field of required) {
    if (!body[field]) {
      return NextResponse.json(
        { error: `Missing required field: ${field}` },
        { status: 400 }
      );
    }
  }

  const leads = await readLeads();
  const lead = {
    id: `lead_${Date.now()}`,
    createdAt: new Date().toISOString(),
    ...body,
  };
  leads.push(lead);

  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(leads, null, 2));

  return NextResponse.json({ ok: true, id: lead.id }, { status: 201 });
}

export async function GET() {
  const leads = await readLeads();
  return NextResponse.json({ leads });
}

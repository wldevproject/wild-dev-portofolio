import { NextResponse } from "next/server";
import { decodeResumeAuthPayload } from "@/app/lib/resume-auth-payload";

// Hardcoded references (server-side only)
const VALID_EMAIL = "joefachrizal@gmail.com";
const VALID_PASSWORD = "CVBismillah@Sukses";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { payload } = body;

    if (!payload) {
      return NextResponse.json(
        { error: "Payload missing." },
        { status: 400 }
      );
    }

    const { email, password } = decodeResumeAuthPayload(payload);

    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      return NextResponse.json({ authorized: true });
    }

    return NextResponse.json(
      { error: "ACCESS DENIED — invalid credentials." },
      { status: 401 }
    );
  } catch {
    return NextResponse.json(
      { error: "Invalid request payload." },
      { status: 400 }
    );
  }
}

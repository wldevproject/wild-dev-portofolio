import { encodeResumeAuthPayload } from "@/app/lib/resume-auth-payload";

export async function requestResumeAccess(email: string, password: string) {
  const payload = encodeResumeAuthPayload(email, password);

  const response = await fetch("/api/resume", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ payload }),
  });

  if (!response.ok) {
    const data = (await response.json()) as { error?: string };
    throw new Error(data.error || "Access Denied.");
  }

  return response.json() as Promise<{ authorized: boolean }>;
}

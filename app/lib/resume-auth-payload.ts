export function encodeResumeAuthPayload(email: string, password: string) {
  const combined = `${email}|||${password}`;
  const reversed = combined.split("").reverse().join("");

  return btoa(reversed);
}

export function decodeResumeAuthPayload(payload: string) {
  const decodedStr = Buffer.from(payload, "base64").toString("utf-8");
  const reversedStr = decodedStr.split("").reverse().join("");
  const [email = "", password = ""] = reversedStr.split("|||");

  return { email, password };
}

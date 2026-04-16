"use client";

import { useState, type FormEvent } from "react";
import { downloadResumePdf } from "@/app/lib/generate-pdf";
import { requestResumeAccess } from "@/app/lib/request-resume-access";

interface UseCvModalFormOptions {
  onClose: () => void;
}

export function useCvModalForm({ onClose }: UseCvModalFormOptions) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handlePublicDownload = async () => {
    await downloadResumePdf(false);
    onClose();
  };

  const handleAuthDownload = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await requestResumeAccess(email, password);

      if (response.authorized) {
        await downloadResumePdf(true);
        onClose();
        setEmail("");
        setPassword("");
      }
    } catch (nextError) {
      setError(nextError instanceof Error ? nextError.message : "System malfunction. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return {
    email,
    error,
    loading,
    password,
    handleAuthDownload,
    handleEmailChange: (value: string) => setEmail(value),
    handlePasswordChange: (value: string) => setPassword(value),
    handlePublicDownload,
  };
}

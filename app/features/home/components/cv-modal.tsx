"use client";

import { CvModalView } from "@/app/features/home/components/cv-modal-view";
import { useSiteLanguage } from "@/app/features/home/context/site-language-context";
import { useCvModalForm } from "@/app/features/home/hooks/use-cv-modal-form";

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CvModal({ isOpen, onClose }: CvModalProps) {
  const { copy } = useSiteLanguage();
  const {
    email,
    error,
    loading,
    password,
    handleAuthDownload,
    handleEmailChange,
    handlePasswordChange,
    handlePublicDownload,
  } = useCvModalForm({ onClose, fallbackError: copy.cvModal.fallbackError });

  return (
    <CvModalView
      copy={copy.cvModal}
      email={email}
      error={error}
      isOpen={isOpen}
      loading={loading}
      password={password}
      onClose={onClose}
      onEmailChange={handleEmailChange}
      onPasswordChange={handlePasswordChange}
      onPublicDownload={handlePublicDownload}
      onSubmit={handleAuthDownload}
    />
  );
}

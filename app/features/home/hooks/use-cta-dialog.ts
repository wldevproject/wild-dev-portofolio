"use client";

import { useCallback, useEffect, useState } from "react";

export function useCtaDialog(enabled: boolean) {
  const [dialogOpen, setDialogOpen] = useState(false);

  const closeDialog = useCallback(() => setDialogOpen(false), []);

  useEffect(() => {
    if (!dialogOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeDialog();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [closeDialog, dialogOpen]);

  return {
    closeDialog,
    dialogOpen,
    openDialog: () => {
      if (enabled) {
        setDialogOpen(true);
      }
    },
  };
}

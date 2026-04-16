"use client";

import { type HTMLAttributes } from "react";
import { CTAPanelView, type LinkOption } from "@/app/features/home/components/cta-panel-view";
import { useCtaDialog } from "@/app/features/home/hooks/use-cta-dialog";

export interface CTAPanelProps extends HTMLAttributes<HTMLDivElement> {
  description: string;
  label: string;
  primaryHref?: string;
  primaryText: string;
  secondaryLinks?: readonly LinkOption[];
  secondaryText: string;
  title: string;
}

export function CTAPanel({
  description,
  label,
  primaryHref,
  primaryText,
  secondaryLinks = [],
  secondaryText,
  title,
  ...props
}: CTAPanelProps) {
  const { closeDialog, dialogOpen, openDialog } = useCtaDialog(secondaryLinks.length > 0);

  return (
    <CTAPanelView
      description={description}
      dialogOpen={dialogOpen}
      label={label}
      primaryHref={primaryHref}
      primaryText={primaryText}
      secondaryLinks={secondaryLinks}
      secondaryText={secondaryText}
      title={title}
      onCloseDialog={closeDialog}
      onOpenDialog={openDialog}
      {...props}
    />
  );
}

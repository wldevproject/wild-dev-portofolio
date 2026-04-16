// ─── ATS-Friendly PDF Generator ────────────────────────────────
// Uses jsPDF to generate a clean, ATS-parseable CV document.
// Client-side generation — loaded on demand to keep initial JS lighter.

import type { jsPDF as JsPdfInstance } from "jspdf";
import {
  personalInfo,
  experienceList,
  educationList,
  skillCategories,
  projectList,
} from "@/app/data/resume-data";

// ─── Layout Constants ──────────────────────────────────────────

const PAGE_WIDTH = 210; // A4 mm
const MARGIN_LEFT = 18;
const MARGIN_RIGHT = 18;
const MARGIN_TOP = 18;
const MARGIN_BOTTOM = 18;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN_LEFT - MARGIN_RIGHT;

// ─── Colors ────────────────────────────────────────────────────

const COLOR_BLACK = "#111111";
const COLOR_DARK = "#333333";
const COLOR_GRAY = "#555555";
const COLOR_LIGHT_GRAY = "#999999";
const COLOR_DIVIDER = "#cccccc";

type JsPdfConstructor = typeof import("jspdf").jsPDF;

// ─── Helper ────────────────────────────────────────────────────

class PdfBuilder {
  private doc: JsPdfInstance;
  private y: number;

  constructor(JsPdf: JsPdfConstructor) {
    this.doc = new JsPdf({ unit: "mm", format: "a4" });
    this.y = MARGIN_TOP;
  }

  private checkPageBreak(requiredHeight: number) {
    if (this.y + requiredHeight > 297 - MARGIN_BOTTOM) {
      this.doc.addPage();
      this.y = MARGIN_TOP;
    }
  }

  private setFont(
    style: "normal" | "bold" | "italic" = "normal",
    size: number = 9,
    color: string = COLOR_DARK
  ) {
    this.doc.setFontSize(size);
    this.doc.setTextColor(color);
    this.doc.setFont("helvetica", style);
  }

  // ─── Sections ──────────────────────────────────────────────

  drawHeader(includePhone: boolean) {
    // Name
    this.setFont("bold", 22, COLOR_BLACK);
    this.doc.text(personalInfo.name.toUpperCase(), PAGE_WIDTH / 2, this.y, {
      align: "center",
    });
    this.y += 7;

    // Title
    this.setFont("normal", 11, COLOR_GRAY);
    this.doc.text(personalInfo.title, PAGE_WIDTH / 2, this.y, {
      align: "center",
    });
    this.y += 5.5;

    // Contact line 1: email | phone (optional) | location
    this.setFont("normal", 8.5, COLOR_GRAY);
    const contactParts = [personalInfo.email];
    if (includePhone) contactParts.push(personalInfo.phone);
    contactParts.push(personalInfo.location);
    this.doc.text(contactParts.join("  |  "), PAGE_WIDTH / 2, this.y, {
      align: "center",
    });
    this.y += 4;

    // Contact line 2: github | linkedin
    this.setFont("normal", 8.5, COLOR_LIGHT_GRAY);
    this.doc.text(
      `github.com/${personalInfo.githubUsername}  |  linkedin.com/${personalInfo.linkedinPath}`,
      PAGE_WIDTH / 2,
      this.y,
      { align: "center" }
    );
    this.y += 7;
  }

  drawDivider() {
    this.doc.setDrawColor(COLOR_DIVIDER);
    this.doc.setLineWidth(0.3);
    this.doc.line(MARGIN_LEFT, this.y, PAGE_WIDTH - MARGIN_RIGHT, this.y);
    this.y += 4;
  }

  drawSectionTitle(title: string) {
    this.checkPageBreak(12);
    this.setFont("bold", 10.5, COLOR_BLACK);
    this.doc.text(title.toUpperCase(), MARGIN_LEFT, this.y);
    this.y += 1.5;
    this.drawDivider();
  }

  drawSummary() {
    this.drawSectionTitle("Professional Summary");
    this.setFont("normal", 8.5, COLOR_DARK);
    const lines = this.doc.splitTextToSize(
      personalInfo.summary,
      CONTENT_WIDTH
    );
    this.doc.text(lines, MARGIN_LEFT, this.y);
    this.y += lines.length * 3.8 + 4;
  }

  drawExperience() {
    this.drawSectionTitle("Work Experience");

    for (const exp of experienceList) {
      for (const role of exp.roles) {
        this.checkPageBreak(22);

        // Role title + period on same line
        this.setFont("bold", 9.5, COLOR_BLACK);
        this.doc.text(role.role.toUpperCase(), MARGIN_LEFT, this.y);
        this.setFont("normal", 8.5, COLOR_GRAY);
        this.doc.text(role.period, PAGE_WIDTH - MARGIN_RIGHT, this.y, {
          align: "right",
        });
        this.y += 4;

        // Company
        this.setFont("italic", 8.5, COLOR_GRAY);
        this.doc.text(exp.company, MARGIN_LEFT, this.y);
        this.y += 4;

        // Bullet points
        const bullets = role.description
          .split("\n")
          .map((l) => l.replace(/^-\s*/, "").trim())
          .filter(Boolean);

        this.setFont("normal", 8.5, COLOR_DARK);
        for (const bullet of bullets) {
          this.checkPageBreak(6);
          const bulletLines = this.doc.splitTextToSize(
            bullet,
            CONTENT_WIDTH - 8
          );
          this.doc.text("•", MARGIN_LEFT + 2, this.y);
          this.doc.text(bulletLines, MARGIN_LEFT + 6, this.y);
          this.y += bulletLines.length * 3.5 + 1.2;
        }

        // Skills tags
        if (role.skills.length > 0) {
          this.setFont("italic", 7.5, COLOR_LIGHT_GRAY);
          this.doc.text(
            `Skills: ${role.skills.join(", ")}`,
            MARGIN_LEFT + 6,
            this.y
          );
          this.y += 4;
        }

        this.y += 2;
      }
    }
  }

  drawEducation() {
    this.drawSectionTitle("Education");

    for (const edu of educationList) {
      for (const role of edu.roles) {
        this.checkPageBreak(16);

        this.setFont("bold", 9.5, COLOR_BLACK);
        this.doc.text(role.role.toUpperCase(), MARGIN_LEFT, this.y);
        this.setFont("normal", 8.5, COLOR_GRAY);
        this.doc.text(`Class of ${role.period}`, PAGE_WIDTH - MARGIN_RIGHT, this.y, {
          align: "right",
        });
        this.y += 4;

        this.setFont("italic", 8.5, COLOR_GRAY);
        this.doc.text(edu.company, MARGIN_LEFT, this.y);
        this.y += 4;

        const descLines = role.description
          .split("\n")
          .filter(Boolean);

        this.setFont("normal", 8.5, COLOR_DARK);
        for (const line of descLines) {
          this.checkPageBreak(5);
          const wrapped = this.doc.splitTextToSize(line, CONTENT_WIDTH);
          this.doc.text(wrapped, MARGIN_LEFT, this.y);
          this.y += wrapped.length * 3.5 + 1;
        }

        this.y += 3;
      }
    }
  }

  drawSkills() {
    this.drawSectionTitle("Technical Skills");

    for (const cat of skillCategories) {
      this.checkPageBreak(7);
      this.setFont("bold", 8.5, COLOR_BLACK);
      const label = `${cat.title}: `;
      const labelWidth = this.doc.getTextWidth(label);

      this.doc.text(label, MARGIN_LEFT, this.y);

      this.setFont("normal", 8.5, COLOR_DARK);
      const skillText = cat.skills.join(", ");
      const skillLines = this.doc.splitTextToSize(
        skillText,
        CONTENT_WIDTH - labelWidth
      );
      this.doc.text(skillLines, MARGIN_LEFT + labelWidth, this.y);
      this.y += skillLines.length * 3.5 + 2.5;
    }

    this.y += 1;
  }

  drawProjects() {
    this.drawSectionTitle("Key Projects");

    for (const project of projectList) {
      this.checkPageBreak(14);

      this.setFont("bold", 9, COLOR_BLACK);
      this.doc.text(project.title, MARGIN_LEFT, this.y);
      this.y += 3.8;

      this.setFont("normal", 8.5, COLOR_DARK);
      const descLines = this.doc.splitTextToSize(
        project.description,
        CONTENT_WIDTH - 4
      );
      this.doc.text(descLines, MARGIN_LEFT + 2, this.y);
      this.y += descLines.length * 3.5 + 1;

      this.setFont("italic", 7.5, COLOR_LIGHT_GRAY);
      this.doc.text(
        `Tech: ${project.tags.join(", ")}`,
        MARGIN_LEFT + 2,
        this.y
      );
      this.y += 5;
    }
  }

  // ─── Build ─────────────────────────────────────────────────

  build(includePhone: boolean): JsPdfInstance {
    this.drawHeader(includePhone);
    this.drawSummary();
    this.drawExperience();
    this.drawEducation();
    this.drawSkills();
    this.drawProjects();
    return this.doc;
  }
}

// ─── Public API ────────────────────────────────────────────────

export async function generateResumePdf(includePhone: boolean) {
  const { jsPDF } = await import("jspdf");
  const builder = new PdfBuilder(jsPDF);
  return builder.build(includePhone);
}

export async function downloadResumePdf(includePhone: boolean) {
  const doc = await generateResumePdf(includePhone);
  const filename = includePhone
    ? "Muhammad_Fachrizal_CV_Full.pdf"
    : "Muhammad_Fachrizal_CV.pdf";
  doc.save(filename);
}

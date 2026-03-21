/**
 * Google Drive automation for ACE client onboarding.
 * Creates folder structure and manages client files via Google Workspace MCP.
 *
 * Folder structure created:
 *   ACE / [Client Name] /
 *     ├── Blueprint Docs/
 *     ├── Brand Assets/
 *     ├── Business Plans/
 *     └── Other/
 */

const GOOGLE_EMAIL = "nikhil@asraya.io";

interface DriveFolder {
  folderId: string;
  folderUrl: string;
  subfolders: Record<string, string>;
}

/**
 * Create the full client folder structure in Google Drive.
 * Called on first login after payment is verified.
 */
export async function createClientDriveFolder(
  clientName: string
): Promise<DriveFolder> {
  // Step 1: Find or create the top-level ACE folder
  const aceRootId = await findOrCreateFolder("ACE Clients");

  // Step 2: Create the client folder
  const clientFolderId = await createFolder(clientName, aceRootId);

  // Step 3: Create subfolders
  const subfolderNames = [
    "Blueprint Docs",
    "Brand Assets",
    "Business Plans",
    "Other",
  ];

  const subfolders: Record<string, string> = {};
  for (const name of subfolderNames) {
    subfolders[name] = await createFolder(name, clientFolderId);
  }

  // Step 4: Set permissions — client gets editor access
  // (permissions are set per-client when we know their email)

  const folderUrl = `https://drive.google.com/drive/folders/${clientFolderId}`;

  return {
    folderId: clientFolderId,
    folderUrl,
    subfolders,
  };
}

/**
 * Create a Google Doc with the formatted Blueprint in the client's folder.
 * Structured in the 11 sections that /build-vault expects.
 */
export async function createBlueprintDoc(
  clientName: string,
  folderId: string,
  data: Record<string, string>
): Promise<string> {
  const content = formatBlueprintAsDoc(clientName, data);

  // This would call the Google Workspace MCP to create the doc
  // For now, return the formatted content that will be used
  console.log("[Drive] Blueprint doc created for:", clientName);
  console.log("[Drive] Target folder:", folderId);

  return content;
}

/**
 * Format Blueprint form data into the document structure
 * that /build-vault expects (11 sections).
 */
function formatBlueprintAsDoc(
  clientName: string,
  data: Record<string, string>
): string {
  return `# ACE Blueprint — ${clientName}

## S1: Basic Information
- **Name:** ${data.fullName || ""}
- **Email:** ${data.email || ""}
- **Timezone:** ${data.timezone || ""}

## S2: Current Projects & Ventures
${data.projects || "Not provided"}

## S3: Daily Rhythm & Decision Style
${data.rhythm || ""}

**Regulation toolkit:**
${data.regulation || "Not provided"}

**Burnout signals:**
${data.burnout || "Not provided"}

## S4: Key People & Relationships
${data.people || "Not provided"}

## S5: Tools & Systems
${data.tools || "Not provided"}

## S6: What's Broken
${data.painPoints || "Not provided"}

## S7: Goals & Desired Outcomes
${data.goals || ""}

**Top 3 priorities (next 90 days):**
${data.priorities || "Not provided"}

## S8: AI Experience
${data.aiExperience || "Not provided"}

## S9: Identity & Values
**Throughline / deepest creative ambition:**
${data.throughline || "Not provided"}

**Core values and non-negotiables:**
${data.values || "Not provided"}

**Edges and fears:**
${data.edges || "Not provided"}

**Joy and aliveness:**
${data.joy || "Not provided"}

## S10: Current Season
${data.season || "Not provided"}

## S11: Supporting Materials
**Google Drive folder:** ${data.driveLink || "Not shared yet"}

---
*Submitted via ACE website on ${new Date().toISOString().split("T")[0]}*
`;
}

/**
 * Share a folder with a specific email address.
 */
export async function shareFolderWithClient(
  folderId: string,
  clientEmail: string
): Promise<void> {
  // This would call Google Workspace MCP: set_drive_file_permissions
  console.log("[Drive] Sharing folder", folderId, "with", clientEmail);
}

// ── Internal helpers ──

async function findOrCreateFolder(name: string, parentId?: string): Promise<string> {
  // This would call Google Workspace MCP:
  // 1. search_drive_files for existing folder
  // 2. If not found, create_drive_folder
  console.log("[Drive] Find or create folder:", name);
  return `mock-folder-id-${name.toLowerCase().replace(/\s/g, "-")}`;
}

async function createFolder(name: string, parentId: string): Promise<string> {
  // This would call Google Workspace MCP: create_drive_folder
  console.log("[Drive] Creating folder:", name, "in", parentId);
  return `mock-folder-id-${name.toLowerCase().replace(/\s/g, "-")}`;
}

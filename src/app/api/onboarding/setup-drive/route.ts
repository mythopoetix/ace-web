import { NextRequest, NextResponse } from "next/server";
import { createClientDriveFolder, shareFolderWithClient } from "@/lib/drive";

export async function POST(request: NextRequest) {
  try {
    const { clientName, clientEmail } = await request.json();

    if (!clientName || !clientEmail) {
      return NextResponse.json(
        { error: "clientName and clientEmail required" },
        { status: 400 }
      );
    }

    // 1. Create folder structure in Google Drive
    const driveFolder = await createClientDriveFolder(clientName);

    // 2. Share with the client
    await shareFolderWithClient(driveFolder.folderId, clientEmail);

    // 3. Save folder ID and URL to user record
    // TODO: Update User.driveFolderId and User.driveFolderUrl in DB

    console.log("[Drive Setup] Folder created for:", clientName, driveFolder.folderUrl);

    return NextResponse.json({
      success: true,
      folderId: driveFolder.folderId,
      folderUrl: driveFolder.folderUrl,
      subfolders: driveFolder.subfolders,
    });
  } catch (error) {
    console.error("[Drive Setup Error]", error);
    return NextResponse.json({ error: "Failed to create Drive folder" }, { status: 500 });
  }
}

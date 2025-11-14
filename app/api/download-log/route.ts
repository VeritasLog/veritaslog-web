import { NextResponse } from "next/server";

import { walrusClient } from "@/lib/walrus";

export const runtime = "nodejs";
export const maxDuration = 60;

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const blobId = searchParams.get("blobId");

    if (!blobId) {
      return NextResponse.json(
        { error: "MISSING_BLOB_ID", message: "blobId parameter is required" },
        { status: 400 }
      );
    }

    console.log("[walrus/download] Downloading blob:", blobId);

    // Download blob from Walrus using SDK
    const blobData = await walrusClient.readBlob({ blobId });

    // Convert to Uint8Array if needed
    const uint8Array = new Uint8Array(blobData);

    console.log(
      "[walrus/download] Successfully downloaded, size:",
      uint8Array.length
    );

    // Return as binary response
    return new NextResponse(uint8Array, {
      status: 200,
      headers: {
        "Content-Type": "application/octet-stream",
        "Content-Length": uint8Array.length.toString(),
      },
    });
  } catch (e: unknown) {
    console.error("[walrus/download] error", e);

    return NextResponse.json(
      {
        error: "DOWNLOAD_FAILED",
        message: e instanceof Error ? e.message : "Unknown error occurred",
      },
      { status: 500 }
    );
  }
}

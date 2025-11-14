import { SealClient } from "@mysten/seal";
import { suiClient } from "./sui";

export const SEAL_SERVER_IDS =
  (process.env.SEAL_SERVER_IDS || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean) || "";
export const SEAL_API_KEY_NAME = process.env.SEAL_API_KEY_NAME || "";
export const SEAL_API_KEY = process.env.SEAL_API_KEY || "";

function getServerConfigs() {
  return SEAL_SERVER_IDS.map((id) => ({
    objectId: id, // on-chain KeyServer object id
    weight: 1,
    ...(SEAL_API_KEY_NAME && SEAL_API_KEY
      ? {
          apiKeyName: SEAL_API_KEY_NAME,
          apiKey: SEAL_API_KEY,
        }
      : {}),
  }));
}

export const sealClient = new SealClient({
  suiClient,
  serverConfigs: getServerConfigs(),
  verifyKeyServers: true,
});

export async function deriveSealIdentityBytes(
  bytes: Uint8Array
): Promise<Uint8Array> {
  const crypto = await import("crypto");
  const id = crypto.createHash("sha256").update(bytes).digest(); // 32 bytes
  return new Uint8Array(id);
}

export function threshold() {
  const t = Number(process.env.SEAL_THRESHOLD || "2");
  return t < 1 ? 1 : t;
}

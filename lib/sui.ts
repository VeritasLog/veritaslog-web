import { getFullnodeUrl, SuiClient } from "@mysten/sui/client";

export const RPC =
  process.env.NEXT_PUBLIC_SUI_RPC_URL || getFullnodeUrl("testnet");
export const PACKAGE_ID = process.env.NEXT_PUBLIC_SUI_PACKAGE_ID!;
export const REGISTRY_ID = process.env.NEXT_PUBLIC_SUI_REGISTRY_ID!;
export const MODULE = "registry";

export const suiClient = new SuiClient({ url: RPC });

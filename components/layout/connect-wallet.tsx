"use client";

import {
  ConnectButton,
  useCurrentAccount,
  useSuiClient,
} from "@mysten/dapp-kit";
import { useEffect } from "react";
import { useUserStore } from "@/stores/use-user";
import { REGISTRY_ID } from "@/lib/sui";

export default function ConnectWalletButton() {
  const account = useCurrentAccount();
  const client = useSuiClient();
  const { setAddress, setRole } = useUserStore();

  useEffect(() => {
    const addr = account?.address ?? null;
    setAddress(addr);

    if (!addr) {
      setRole(null);
      return;
    }

    const resolveRole = async () => {
      try {
        const { data } = await client.getObject({
          id: REGISTRY_ID,
          options: { showContent: true },
        });

        const content = data?.content as Record<string, unknown>;
        if (content?.dataType !== "moveObject") {
          setRole("AUDITOR");
          return;
        }

        const fields = content.fields as Record<string, unknown>;
        const superAdmin: string = fields.super_admin as string;
        const admins: string[] = fields.admins as string[];

        if (addr === superAdmin) {
          setRole("SUPER_ADMIN");
        } else if (Array.isArray(admins) && admins.includes(addr)) {
          setRole("ADMIN");
        } else {
          setRole("AUDITOR");
        }
      } catch (error) {
        console.error("[Veritas] Failed to resolve role:", error);
        setRole("AUDITOR");
      }
    };

    resolveRole();
  }, [account, client, setAddress, setRole]);

  return <ConnectButton />;
}

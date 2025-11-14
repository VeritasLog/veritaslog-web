"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useUserStore } from "@/stores/use-user";

export default function Page() {
  const { role, address } = useUserStore();

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-lg border bg-card">
          <h2 className="font-semibold mb-1">Connected wallet</h2>
          <p className="text-sm break-all">{address ?? "Not connected"}</p>
          <p className="text-xs text-muted-foreground mt-2">
            Role: {role ?? "unknown"}
          </p>
        </div>
        <div className="p-4 rounded-lg border bg-card">
          <h2 className="font-semibold mb-1">Upload compliance log</h2>
          <p className="text-sm text-muted-foreground mb-3">
            Store encrypted log to Walrus & register on-chain
          </p>
          <Button asChild disabled={role === "AUDITOR" || !address}>
            <Link href="/upload">Go to upload</Link>
          </Button>
        </div>
        <div className="p-4 rounded-lg border bg-card">
          <h2 className="font-semibold mb-1">Pending access requests</h2>
          <p className="text-sm text-muted-foreground mb-3">
            Approve auditor requests
          </p>
          <Button asChild disabled={role === "AUDITOR" || !address}>
            <Link href="/requests">Review requests</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

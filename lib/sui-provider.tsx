"use client";

import {
  createNetworkConfig,
  SuiClientProvider,
  WalletProvider,
} from "@mysten/dapp-kit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

const { networkConfig } = createNetworkConfig({
  testnet: {
    url:
      process.env.NEXT_PUBLIC_SUI_RPC_URL || "https://fullnode.testnet.sui.io",
  },
});

const queryClient = new QueryClient();

export function SuiProviders({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <QueryClientProvider client={queryClient}>
      <SuiClientProvider networks={networkConfig} defaultNetwork="testnet">
        <WalletProvider autoConnect>{children}</WalletProvider>
      </SuiClientProvider>
    </QueryClientProvider>
  );
}

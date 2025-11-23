import type { Metadata } from "next";
import "./globals.css";
import "@mysten/dapp-kit/dist/index.css";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "VeritasLog",
  description: "Truth. Verified. Transparent.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground">
        <Toaster richColors position="top-center" />
        {children}
      </body>
    </html>
  );
}

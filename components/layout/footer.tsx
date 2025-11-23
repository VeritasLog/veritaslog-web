import React from "react";
import Image from "next/image";

import Logo from "@/public/images/logo.png";

export default function Footer() {
  return (
    <footer className="px-4 sm:px-6 lg:px-8 py-10 border-t border-border/60">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 grid gap-6 md:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Image
                src={Logo}
                alt="VeritasLog Logo"
                className="h-10 w-10 rounded-xl"
              />
              <span className="font-semibold">VeritasLog</span>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Compliance logs with selective disclosure: encrypted, on-chain,
              and verifiable by design.
            </p>
          </div>

          {[
            {
              title: "Product",
              links: ["Overview", "Features", "How it works"],
            },
            {
              title: "Resources",
              links: ["Documentation", "GitHub", "Security & Compliance"],
            },
            { title: "Connect", links: ["X (Twitter)", "Discord", "Email"] },
          ].map((col, i) => (
            <div key={i} className="space-y-3">
              <h4 className="font-semibold">{col.title}</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="hover:text-foreground transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 text-xs sm:text-sm md:flex-row">
          <p className="text-muted-foreground">
            © 2025 VeritasLog. Built for{" "}
            <a
              href="https://www.walrus.xyz/haulout"
              target="_blank"
              className="underline hover:text-foreground"
            >
              Haulout Hackathon
            </a>
          </p>
          <div className="flex gap-5 text-muted-foreground">
            <a href="#" className="hover:text-foreground">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground">
              Terms of Service
            </a>
            <a href="#" className="hover:text-foreground">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

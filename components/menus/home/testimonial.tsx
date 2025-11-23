import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

import { AuroraText } from "@/components/ui/aurora-text";
import { Marquee } from "@/components/ui/marquee";

import { cn } from "@/lib/utils";

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const TESTIMONIALS = [
  {
    name: "Raka Pradipta",
    username: "@raka.trips",
    body: "Finally, an audit log where we can prove nothing was changed after the incident was recorded.",
    img: "https://avatar.vercel.sh/raka",
  },
  {
    name: "Aulia Putri",
    username: "@auliarmdnii",
    body: "Walrus + Sui integration gives us verifiable storage without exposing sensitive payloads.",
    img: "https://avatar.vercel.sh/aulia",
  },
  {
    name: "Kevin Lim",
    username: "@kevinlim",
    body: "Auditors search by severity and date via Nautilus while the encrypted content stays private.",
    img: "https://avatar.vercel.sh/kevin",
  },
  {
    name: "Dewi Kartika",
    username: "@dewik",
    body: "Selective disclosure means only approved wallets can decrypt, everyone else sees metadata only.",
    img: "https://avatar.vercel.sh/dewi",
  },
  {
    name: "Arif Nugroho",
    username: "@arif.ng",
    body: "Role promotion from Auditor to Admin happens fully on-chain, so access changes are always traceable.",
    img: "https://avatar.vercel.sh/arif",
  },
  {
    name: "Sinta Wardana",
    username: "@sintawr",
    body: "Seal verification reassures regulators that the log we open today is the same one first committed.",
    img: "https://avatar.vercel.sh/sinta",
  },
  {
    name: "Bagus Mahendra",
    username: "@bagus.m",
    body: "Wallet native roles removed our need for yet another off-chain auth system for compliance tools.",
    img: "https://avatar.vercel.sh/bagus",
  },
  {
    name: "Yuki Tan",
    username: "@yukitan",
    body: "Granting temporary access to a single log for an external auditor is straightforward and transparent.",
    img: "https://avatar.vercel.sh/yuki",
  },
  {
    name: "Nadia Putri",
    username: "@nadia.putri",
    body: "During audits we can show all HIGH severity logs for a period without leaking underlying incidents.",
    img: "https://avatar.vercel.sh/nadia",
  },
];

export default function Testimonial() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-8 text-center"
          variants={headerVariants}
          initial="hidden"
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold">
            What teams <AuroraText>say</AuroraText>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground">
            Real feedback from teams using VeritasLog to keep sensitive logs
            encrypted, verifiable, and audit-ready.
          </p>
        </motion.div>
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:25s]">
            {TESTIMONIALS.map((t, i) => (
              <figure
                key={i}
                className={cn(
                  "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                  // light styles
                  "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                  // dark styles
                  "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
                )}
              >
                <div className="flex flex-row items-center gap-2">
                  <Image
                    className="rounded-full"
                    width="32"
                    height="32"
                    alt=""
                    src={t.img}
                  />
                  <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                      {t.name}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">
                      {t.username}
                    </p>
                  </div>
                </div>
                <blockquote className="mt-2 text-sm">{t.body}</blockquote>
              </figure>
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:23s]">
            {TESTIMONIALS.map((t, i) => (
              <figure
                key={i}
                className={cn(
                  "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                  // light styles
                  "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                  // dark styles
                  "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
                )}
              >
                <div className="flex flex-row items-center gap-2">
                  <Image
                    className="rounded-full"
                    width="32"
                    height="32"
                    alt=""
                    src={t.img}
                  />
                  <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                      {t.name}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">
                      {t.username}
                    </p>
                  </div>
                </div>
                <blockquote className="mt-2 text-sm">{t.body}</blockquote>
              </figure>
            ))}
          </Marquee>
          <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
          <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
        </div>
      </div>
    </section>
  );
}

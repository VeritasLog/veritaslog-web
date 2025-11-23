import React from "react";
import { BarChart3, Globe, Lock, Shield, Sparkles, Zap } from "lucide-react";
import { motion, Variants } from "framer-motion";

import { AuroraText } from "@/components/ui/aurora-text";
import { MagicCard } from "@/components/ui/magic-card";
import { Pointer } from "@/components/ui/pointer";

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const gridVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const iconVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
};

// ...imports tetap

export default function Features() {
  return (
    <section id="features" className="px-4 sm:px-6 lg:px-8 py-16">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-10 text-center"
          variants={headerVariants}
          initial="hidden"
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold">
            Why <AuroraText>VeritasLog</AuroraText>?
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-balance text-sm sm:text-base lg:text-lg text-muted-foreground">
            Protocol native privacy, verifiability, and compliance for sensitive
            logs. Encrypt incidents on Walrus, gate access on Sui, verify
            integrity with Seal, and search metadata via Nautilus.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {[
            {
              icon: <Sparkles className="h-6 w-6" />,
              title: "Selective Disclosure",
              description:
                "Keep incident logs fully encrypted on Walrus and reveal content only to approved wallets while everyone else sees metadata.",
              color: "from-blue-500 to-cyan-500",
              emoji: "🤖",
            },
            {
              icon: <Shield className="h-6 w-6" />,
              title: "Onchain Access Control",
              description:
                "Store log pointers and access lists on Sui so role changes and grants are transparent, tamper evident, and auditable on-chain.",
              color: "from-purple-500 to-pink-500",
              emoji: "🔗",
            },
            {
              icon: <Globe className="h-6 w-6" />,
              title: "Wallet Native Roles",
              description:
                "Super Admin, Admin, and Auditor roles are tied directly to Sui wallet addresses no extra login system, everything driven by transactions.",
              color: "from-green-500 to-emerald-500",
              emoji: "🌍",
            },
            {
              icon: <Zap className="h-6 w-6" />,
              title: "Verifiable Storage with Seal",
              description:
                "Every log commit is bound to a Seal compatible hash so auditors can re-check integrity whenever a log is opened.",
              color: "from-yellow-500 to-orange-500",
              emoji: "⚡",
            },
            {
              icon: <Lock className="h-6 w-6" />,
              title: "Privacy Preserving Search",
              description:
                "Indexes only metadata, enabling queries like “HIGH severity this week” without exposing encrypted payloads.",
              color: "from-red-500 to-pink-500",
              emoji: "🔒",
            },
            {
              icon: <BarChart3 className="h-6 w-6" />,
              title: "Compliance Ready Audit Trail",
              description:
                "Show regulators which logs existed, who had access, and when they were opened without leaking sensitive details.",
              color: "from-indigo-500 to-blue-500",
              emoji: "📊",
            },
          ].map((feature, idx) => (
            <MagicCard
              key={idx}
              className="group rounded-2xl border-[var(--tk-card)] p-6 transition-all hover:shadow-lg custom-cursor"
              data-animate
            >
              <motion.div
                variants={iconVariants}
                className={`mb-3 inline-flex rounded-xl bg-gradient-to-r ${feature.color} p-3 text-white`}
              >
                {feature.icon}
              </motion.div>

              <motion.h3
                className="text-lg sm:text-xl font-semibold"
                variants={iconVariants}
              >
                {feature.title}
              </motion.h3>

              <motion.p
                className="mt-1 text-sm text-muted-foreground"
                variants={iconVariants}
              >
                {feature.description}
              </motion.p>

              <Pointer>
                <div className="text-2xl">{feature.emoji}</div>
              </Pointer>
            </MagicCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";
import Link from "next/link";
import { ArrowRight, Play, Shield, CheckCircle } from "lucide-react";
import { motion, type Variants } from "framer-motion";

import { AuroraText } from "@/components/ui/aurora-text";
import { MagicCard } from "@/components/ui/magic-card";
import { SpinningText } from "@/components/ui/spinning-text";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import FloatingElement from "./floating-element";

const container: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.22, 1, 0.36, 1],
      duration: 0.5,
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

const pill: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section
      className="px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-16 min-h-screen flex flex-col justify-center"
      aria-label="Compliance Log Hero"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
        {/* COPY */}
        <motion.div
          className="space-y-6 animate-slide-up"
          data-animate
          id="hero-copy"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/5 px-3 py-1 text-xs"
          >
            <Shield className="h-4 w-4 text-emerald-400" />
            <AnimatedShinyText>
              Built on Walrus • Sui • Web3 Native
            </AnimatedShinyText>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-bold leading-tight text-4xl sm:text-5xl lg:text-6xl"
          >
            Compliance Logs <AuroraText>Verifiable</AuroraText>, Encrypted &
            On-Chain
          </motion.h1>

          <motion.p
            variants={item}
            className="max-w-2xl text-balance text-base sm:text-lg lg:text-xl text-muted-foreground"
          >
            Encrypt sensitive incident logs, store them securely on Walrus,
            control access on Sui, and let auditors verify integrity via Seal
            without exposing your entire archive.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Link href="/logs">
              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 px-6 py-3 text-sm sm:text-base font-semibold text-white transition-transform hover:scale-105 pointer-cursor">
                <span>Launch App</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </Link>
            <Link href="/#demo">
              <button className="inline-flex items-center justify-center gap-2 rounded-full border border-border/60 bg-background/50 px-6 py-3 text-sm sm:text-base font-semibold hover:bg-muted/60 pointer-cursor">
                <Play className="h-5 w-5" />
                <span>Watch Demo</span>
              </button>
            </Link>
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap gap-2">
            {[
              "Walrus",
              "Sui",
              "Seal",
              "Nautilus",
              "Selective Disclosure",
              "Web3 Native",
            ].map((tech, i) => (
              <motion.span
                key={tech}
                custom={i}
                variants={pill}
                className="rounded-full border border-emerald-500/30 bg-emerald-500/5 px-3 py-1 text-xs text-emerald-300"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 28, filter: "blur(4px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <FloatingElement>
            <MagicCard className="rounded-2xl border-emerald-500/20 p-4">
              <div className="rounded-xl bg-background/70 p-6 space-y-4">
                {/* Log Header */}
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-white">
                        Q4 Security Incident Report
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        Module: Security • Oct 15, 2024
                      </p>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-red-500/20 px-2 py-1 text-xs font-medium text-red-300">
                      HIGH
                    </span>
                  </div>
                </div>

                {/* Verification Status */}
                <motion.div
                  className="flex items-center gap-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 p-3"
                  initial={{ opacity: 0, y: 16, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <CheckCircle className="h-4 w-4 text-emerald-400" />
                  <span className="text-sm font-medium text-emerald-300">
                    Verified via Seal
                  </span>
                </motion.div>

                {/* Protocol Badges */}
                <div className="space-y-2 border-t border-border/40 pt-3">
                  <div className="grid grid-cols-1 gap-2">
                    {[
                      { label: "Stored on Walrus", icon: "🔒" },
                      { label: "On-chain on Sui", icon: "⛓️" },
                      { label: "Indexed by Nautilus", icon: "🔍" },
                    ].map((item, i) => (
                      <motion.div
                        key={item.label}
                        className="flex items-center gap-2 text-xs text-muted-foreground"
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.35,
                          delay: 0.25 + i * 0.05,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        <span>{item.icon}</span>
                        {item.label}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Role & Access Info */}
                <motion.div
                  className="border-t border-border/40 pt-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <p className="text-xs text-muted-foreground">
                    <span className="text-blue-300 font-medium">
                      Role: Auditor
                    </span>{" "}
                    • <span className="text-emerald-300">Metadata only</span>
                  </p>
                  <button className="mt-2 w-full rounded-lg bg-blue-500/20 border border-blue-500/30 px-3 py-2 text-xs font-medium text-blue-300 hover:bg-blue-500/30 transition-colors">
                    Request Access
                  </button>
                </motion.div>
              </div>
            </MagicCard>
          </FloatingElement>

          <div className="pointer-events-none absolute -top-6 -right-6 h-24 w-24 rounded-full bg-emerald-500/20 blur-2xl" />
          <SpinningText className="absolute bottom-0 left-0">
            5 Logs Committed • 3 Auditors
          </SpinningText>
        </motion.div>
      </div>
    </section>
  );
}

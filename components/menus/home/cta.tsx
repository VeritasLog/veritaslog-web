import React from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Github } from "lucide-react";
import { motion, Variants } from "framer-motion";

import { AuroraText } from "@/components/ui/aurora-text";

const header: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const group: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Cta() {
  // variables
  const router = useRouter();

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16">
      <div className="mx-auto max-w-4xl text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold"
          variants={header}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
        >
          Ready to Make Your <AuroraText>Compliance Logs Verifiable</AuroraText>
          ?
        </motion.h2>

        <motion.p
          className="mx-auto mt-3 max-w-2xl text-balance text-sm sm:text-base lg:text-lg text-muted-foreground"
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          Join teams using VeritasLog to keep sensitive incident logs encrypted,
          selectively disclosed, and backed by on-chain proofs for auditors and
          regulators.
        </motion.p>

        <motion.div
          className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row"
          variants={group}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.button
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 px-6 py-3 text-sm font-semibold text-white pointer-cursor"
            variants={item}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => router.push("/logs")}
          >
            <span>Open VeritasLog</span>
            <ArrowRight className="h-5 w-5" />
          </motion.button>

          <motion.a
            href="https://github.com/VeritasLog"
            target="_blank"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border/60 bg-background/50 px-6 py-3 text-sm font-semibold hover:bg-muted/60 pointer-cursor"
            variants={item}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Github className="h-5 w-5" />
            <span>View code on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

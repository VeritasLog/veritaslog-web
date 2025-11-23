import React from "react";
import { motion, Variants } from "framer-motion";

import { AuroraText } from "@/components/ui/aurora-text";

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const listVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

export default function Faq() {
  return (
    <section id="faq" className="px-4 sm:px-6 lg:px-8 py-16">
      <div className="mx-auto max-w-4xl">
        <motion.div
          className="mb-10 text-center"
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold">
            Frequently Asked <AuroraText>Questions</AuroraText>
          </h2>
        </motion.div>

        <motion.div
          className="space-y-3"
          variants={listVariants}
          initial="hidden"
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true, amount: 0.25 }}
        >
          {[
            {
              q: "Do I need cryptocurrency to use VeritasLog?",
              a: "For the demo you connect a Sui wallet to a test network. You’ll need a small amount of test SUI for gas, but no real funds are required.",
            },
            {
              q: "Where is my log data actually stored?",
              a: "The encrypted payload is stored on Walrus. Sui smart contracts store the Walrus CID, integrity hash, metadata (title, severity, module, timestamps), and access lists. No plaintext log content is written on-chain.",
            },
            {
              q: "Who can see the contents of a log?",
              a: "By default only addresses explicitly granted access by an Admin or Super Admin can decrypt and read the payload. Everyone else, including other auditors, can only see metadata such as severity, date, and module.",
            },
            {
              q: "What do the roles Auditor, Admin, and Super Admin mean?",
              a: "Roles are fully wallet native. New connected wallets start as Auditors: they can browse metadata and request access or role upgrades. Admins can register logs and approve access. The Super Admin (set at deploy) can manage Admins and oversee role changes on-chain.",
            },
            {
              q: "How does selective disclosure work in practice?",
              a: "When a log is created, the app encrypts the payload client-side, stores it on Walrus, and records a CID plus access rules on Sui. When an approved wallet opens the log, VeritasLog verifies integrity via Seal, then decrypts the payload locally only for that wallet.",
            },
            {
              q: "How is integrity verified with Seal?",
              a: "At commit time, VeritasLog derives a hash that is compatible with Seal and stores that commitment on-chain alongside the CID. When a log is opened later, the app recomputes the hash and checks it against the on-chain value to prove the payload has not been modified.",
            },
            {
              q: "Can auditors search logs without exposing sensitive content?",
              a: "Yes. Only metadata is indexed via Nautilus. Auditors can run queries like “HIGH severity logs this week” or filter by module and time range, while the underlying encrypted payloads remain hidden until access is granted.",
            },
            {
              q: "Is VeritasLog suitable for real compliance and regulatory audits?",
              a: "That’s the goal. Organizations can prove which logs existed, when they were committed, and who had access, while still keeping sensitive incident details encrypted. During an audit, you can disclose only the specific logs and fields required to satisfy the regulator.",
            },
          ].map((faq, idx) => (
            <motion.details
              key={idx}
              className="group rounded-xl border border-border/60 p-5 pointer-cursor"
            >
              <summary className="list-none text-base font-medium">
                <span className="mr-2 inline-block rounded-md bg-muted px-2 py-1 text-xs">
                  Q{idx + 1}
                </span>{" "}
                {faq.q}
              </summary>
              <p className="mt-2 text-sm text-muted-foreground">{faq.a}</p>
            </motion.details>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

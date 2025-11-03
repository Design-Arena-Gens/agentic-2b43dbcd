"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  Infinity,
  LucideIcon,
  Network,
  Shield,
  Sparkles,
  Route,
  Zap,
} from "lucide-react";

const EthExperience = dynamic(
  () => import("@/components/scene/EthExperience"),
  {
    ssr: false,
    loading: () => (
      <div className="flex aspect-[4/3] w-full items-center justify-center rounded-[32px] border border-slate-800/60 bg-slate-950/80">
        <p className="text-sm text-slate-400">Loading Ethereum mainframe…</p>
      </div>
    ),
  },
);

type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
  highlights: string[];
};

const heroStats = [
  { label: "Value Secured", value: "$350B", detail: "Across DeFi, NFTs & infra" },
  { label: "Daily Transactions", value: "1.4M", detail: "Scaling via rollups & L2s" },
  { label: "Staked ETH", value: "33M", detail: "Economic security compounding" },
];

const features: Feature[] = [
  {
    title: "Programmable Trust Layer",
    description:
      "Ethereum anchors the most battle-tested smart contract engine, enabling programmable value to move with unstoppable guarantees.",
    icon: Shield,
    highlights: [
      "Holistic security from thousands of distributed validators",
      "Audited smart contract standards powering global finance",
      "Protocol-level resilience with rapid client diversity",
    ],
  },
  {
    title: "Modular Scaling Flywheel",
    description:
      "Rollups, proto-danksharding, and zk proofs fuse into an endlessly extensible throughput fabric without sacrificing decentralization.",
    icon: Infinity,
    highlights: [
      "Danksharding roadmap unleashes 10,000+ TPS capacity",
      "Rollup-centric design keeps layer 1 lean and credibly neutral",
      "Interoperable L2 ecosystem composes into mega applications",
    ],
  },
  {
    title: "Economic Gravity Well",
    description:
      "ETH is ultrasound collateral, a native internet bond with deflationary supply mechanics that reward long-term believers.",
    icon: Zap,
    highlights: [
      "Base issuance countered by fee burns & staking dynamics",
      "ETH staked as productive yield-bearing collateral",
      "Sustainable incentives align builders, validators, and users",
    ],
  },
];

const roadmap = [
  {
    phase: "Now",
    title: "Restaking Renaissance",
    description:
      "Shared security markets unlock new coordination games while maintaining Ethereum's neutrality.",
    milestones: [
      "EigenLayer restaked security supports new services",
      "L2s inherit settlement trust from Ethereum mainnet",
      "MEV smoothing tech keeps rewards fair & robust",
    ],
  },
  {
    phase: "Soon",
    title: "Blobs & Beyond",
    description:
      "EIP-4844 catalyzes data availability, slashing fees across rollups and igniting the next wave of web3 apps.",
    milestones: [
      "Danksharding roadmap shipping in layered milestones",
      "L2 fees sub-dollar while inheriting L1 finality",
      "DeFi & Gaming UX hits mainstream-ready thresholds",
    ],
  },
  {
    phase: "Next",
    title: "Infinite Composability",
    description:
      "Account abstraction, zkEVM maturation, and autonomous agents deliver a user-first decentralized internet.",
    milestones: [
      "Smart wallets abstract keys & signatures",
      "ZK verifiability across supply chain and AI data",
      "Onchain organizations operate at internet scale",
    ],
  },
];

const ethos = [
  {
    title: "Credible Neutrality",
    detail:
      "Ethereum's governance is protocol-first and community-led, preventing capture while relentlessly shipping upgrades.",
  },
  {
    title: "Sustainable Innovation",
    detail:
      "Proof-of-stake slashed energy usage by 99.95%, inviting climate-positive adoption and institutional participation.",
  },
  {
    title: "Interoperable Ecosystem",
    detail:
      "Over 90% of web3 value settles on Ethereum, making it the gravitational center for developers, DAOs, and creators.",
  },
];

const testimonials = [
  {
    quote:
      "Ethereum remains the canonical settlement layer. Every major innovation — DeFi, NFTs, onchain identity — launched here first.",
    name: "Linda Xie",
    role: "Co-founder, Scalar Capital",
  },
  {
    quote:
      "If you want unstoppable applications, you build where resilience, capital, and community intersect. That's Ethereum.",
    name: "Vitalik Buterin",
    role: "Ethereum Co-founder",
  },
];

const ecosystemLogos = [
  "Arbitrum",
  "Optimism",
  "Base",
  "Polygon",
  "EigenLayer",
  "Uniswap",
  "Lido",
  "zkSync",
];

export default function Home() {
  return (
    <main className="relative">
      <div className="noise-overlay" aria-hidden />
      <div className="absolute inset-x-0 top-0 -z-10 h-[45rem] bg-gradient-to-b from-cyan-500/20 via-transparent to-transparent blur-3xl" />

      <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-32 px-6 pb-32 pt-16 sm:px-10 lg:px-12">
        <nav className="sticky top-4 z-20 flex items-center justify-between rounded-full border border-slate-800/60 bg-slate-900/60 px-6 py-3 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-cyan-400 via-sky-500 to-violet-500 shadow-lg">
              <Sparkles className="h-5 w-5 text-slate-950" />
            </span>
            <div>
              <p className="font-display text-lg font-semibold uppercase tracking-[0.3em] text-cyan-200">
                Ether Ascendant
              </p>
              <p className="text-xs text-slate-400">
                Ethereum Thesis 2025
              </p>
            </div>
          </div>
          <div className="hidden items-center gap-5 text-sm text-slate-300 md:flex">
            <a className="transition hover:text-cyan-200" href="#vision">
              Vision
            </a>
            <a className="transition hover:text-cyan-200" href="#mechanics">
              Mechanics
            </a>
            <a className="transition hover:text-cyan-200" href="#roadmap">
              Roadmap
            </a>
            <a className="transition hover:text-cyan-200" href="#build">
              Build
            </a>
          </div>
          <a
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 via-cyan-400 to-violet-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/30 transition hover:shadow-xl hover:shadow-cyan-400/40"
            href="https://ethereum.org/en/"
            target="_blank"
            rel="noreferrer"
          >
            Enter Ethereum
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </nav>

        <section
          id="vision"
          className="relative grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:items-center"
        >
          <div className="absolute -left-32 top-20 hidden h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl lg:block" />
          <div className="relative z-10 flex flex-col gap-10">
            <motion.span
              className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/60 px-4 py-1 text-sm uppercase tracking-[0.4em] text-slate-300"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <BadgeCheck className="h-4 w-4 text-cyan-300" />
              Proof of Future
            </motion.span>
            <motion.h1
              className="font-display text-4xl leading-tight text-slate-100 sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
            >
              Ethereum is the operating system for trust, value, and the next
              generation of the internet.
            </motion.h1>
            <motion.p
              className="max-w-xl text-lg leading-relaxed text-slate-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
            >
              Built on relentless research, unstoppable architecture, and the
              most vibrant builder community in crypto, ETH merges programmable
              money with culture, identity, and coordination. This is where the
              decentralized future crystallizes.
            </motion.p>
            <div className="grid gap-4 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <motion.div
                  key={stat.label}
                  className="glass relative overflow-hidden rounded-2xl p-5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="absolute -bottom-20 -right-10 h-32 w-32 rounded-full bg-gradient-to-br from-sky-500/30 to-violet-500/20 blur-2xl" />
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    {stat.label}
                  </p>
                  <p className="mt-3 font-display text-2xl text-slate-100">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-slate-400">{stat.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.8, ease: "easeOut" }}
          >
            <EthExperience />
          </motion.div>
        </section>

        <section
          id="mechanics"
          className="relative grid gap-12 rounded-[40px] border border-slate-800/60 bg-slate-900/50 px-8 py-16 shadow-[0_40px_120px_-60px_rgba(56,189,248,0.6)] lg:px-12"
        >
          <div className="absolute inset-0 overflow-hidden rounded-[40px]">
            <div className="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
          </div>
          <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-3xl text-slate-100 sm:text-4xl">
                Why ETH Wins the Long Game
              </h2>
              <p className="mt-3 max-w-xl text-slate-300">
                A three-pronged supercycle: Ethereum secures digital value,
                scales through modular architectures, and magnetizes capital
                through reflexive network effects.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 px-4 py-2 text-xs uppercase tracking-[0.4em] text-cyan-200">
              <Network className="h-4 w-4" />
              Layer Zero Narrative
            </div>
          </div>
          <div className="relative z-10 grid gap-6 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="glass group flex flex-col gap-5 rounded-3xl border border-slate-700/60 p-7 transition hover:border-cyan-400/60 hover:shadow-[0_30px_80px_-40px_rgba(45,212,191,0.85)]"
              >
                <div className="flex items-center gap-3 text-cyan-300">
                  <feature.icon className="h-6 w-6" />
                  <p className="text-sm uppercase tracking-[0.3em]">
                    {feature.title}
                  </p>
                </div>
                <p className="text-base leading-relaxed text-slate-300">
                  {feature.description}
                </p>
                <div className="mt-2 flex flex-col gap-3">
                  {feature.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-start gap-3 text-sm text-slate-300"
                    >
                      <div className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 shadow-[0_0_16px_rgba(56,189,248,0.9)]" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-end">
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-violet-400/40 px-4 py-2 text-xs uppercase tracking-[0.4em] text-violet-200">
              <Sparkles className="h-4 w-4" />
              Ethos
            </div>
            <h2 className="font-display text-3xl text-slate-100 sm:text-4xl">
              Neutral settlement, regenerative economics, unstoppable culture.
            </h2>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
              Ethereum&apos;s community is coordinating the largest open-source
              experiment in human history. Proof-of-stake unlocked efficient
              sustainability while the culture pushes the boundaries of what
              digital public goods can be.
            </p>
          </div>
          <div className="glass grid gap-5 rounded-3xl border border-slate-700/60 p-8">
            {ethos.map((item) => (
              <div key={item.title} className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-12 rounded-full bg-gradient-to-r from-sky-400 to-violet-500" />
                  <h3 className="font-display text-lg text-slate-100">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-300">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="roadmap"
          className="relative overflow-hidden rounded-[40px] border border-slate-800/60 bg-slate-950/60 px-8 pb-16 pt-14 shadow-[0_40px_120px_-80px_rgba(129,140,248,0.8)] lg:px-12"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.3),transparent_55%)]" />
          <div className="relative z-10 flex flex-col gap-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="font-display text-3xl text-slate-100 sm:text-4xl">
                  Roadmap to the Infinite Garden
                </h2>
                <p className="mt-2 max-w-3xl text-slate-300">
                  Research-grade upgrades ship continuously while preserving
                  decentralization. Ethereum&apos;s pragmatic roadmap compounds
                  security, scalability, and user experience.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/50 px-4 py-2 text-xs uppercase tracking-[0.4em] text-fuchsia-200">
                <Route className="h-4 w-4" />
                Moon Math Ready
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {roadmap.map((stage, idx) => (
                <div
                  key={stage.title}
                  className="glass relative flex flex-col gap-4 rounded-3xl border border-slate-700/60 p-7"
                >
                  <div className="absolute inset-0 rounded-3xl border border-transparent transition group-hover:border-cyan-300/60" />
                  <div className="flex items-center justify-between text-sm uppercase tracking-[0.3em] text-slate-400">
                    <span>{stage.phase}</span>
                    <span className="font-display text-xs text-cyan-300">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-display text-xl text-slate-100">
                    {stage.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-300">
                    {stage.description}
                  </p>
                  <div className="mt-2 flex flex-col gap-3">
                    {stage.milestones.map((milestone) => (
                      <div
                        key={milestone}
                        className="flex items-start gap-3 text-sm text-slate-300"
                      >
                        <div className="mt-1 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_16px_rgba(45,212,191,0.9)]" />
                        <span>{milestone}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="build"
          className="rounded-[40px] border border-slate-800/60 bg-slate-900/50 px-8 py-16 lg:px-12"
        >
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="font-display text-3xl text-slate-100 sm:text-4xl">
                  Builders are shipping on Ethereum every day.
                </h2>
                <p className="mt-3 max-w-2xl text-slate-300">
                  From hyper-financial primitives to regenerative public goods,
                  ETH is where ideas gain network effects. The ecosystem is
                  composable by default — the world&apos;s largest onchain
                  playground.
                </p>
              </div>
              <div className="glass flex w-full max-w-sm flex-col gap-3 rounded-2xl border border-slate-700/60 p-6">
                <div className="flex items-center gap-3 text-cyan-300">
                  <Shield className="h-6 w-6" />
                  <p className="text-xs uppercase tracking-[0.3em]">
                    Shared Security
                  </p>
                </div>
                <p className="text-sm text-slate-300">
                  1,000+ teams rely on Ethereum finality for their mission
                  critical transactions daily. L2 innovation compounds on top of
                  battle-tested settlement.
                </p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {ecosystemLogos.map((logo) => (
                <div
                  key={logo}
                  className="glass flex items-center justify-center rounded-2xl border border-slate-700/60 px-4 py-6 text-sm font-semibold tracking-[0.2em] text-slate-200"
                >
                  {logo}
                </div>
              ))}
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="glass flex flex-col gap-4 rounded-3xl border border-slate-700/60 p-8"
                >
                  <p className="text-lg leading-relaxed text-slate-200">
                    “{testimonial.quote}”
                  </p>
                  <div>
                    <p className="font-display text-base text-cyan-200">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-slate-400">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden rounded-[40px] border border-slate-800/60 bg-gradient-to-br from-slate-900/80 via-slate-900/40 to-slate-900/70 px-8 py-16 shadow-[0_40px_120px_-80px_rgba(56,189,248,0.7)] lg:px-12">
          <div className="absolute inset-0 bg-[conic-gradient(from_120deg_at_50%_50%,rgba(14,165,233,0.2),rgba(168,85,247,0.2),rgba(14,165,233,0.2))] opacity-70 blur-3xl" />
          <div className="relative z-10 grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div className="flex flex-col gap-6">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/40 px-4 py-2 text-xs uppercase tracking-[0.4em] text-cyan-200">
                <Sparkles className="h-4 w-4" />
                Call to Build
              </span>
              <h2 className="font-display text-4xl leading-tight text-white">
                ETH is not a bet — it&apos;s the protocol where the future is
                being deployed.
              </h2>
              <p className="max-w-2xl text-lg leading-relaxed text-slate-200">
                Launch public goods. Architect DeFi. Ship zk powered consumer
                apps. The infrastructure, liquidity, and community are all
                aligned to help you deploy faster with trustless guarantees.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://ethglobal.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 via-cyan-400 to-violet-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/40 transition hover:shadow-xl hover:shadow-cyan-400/50"
                >
                  Hack with the community
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a
                  href="https://ethereum.org/en/developers/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 px-6 py-3 text-sm font-semibold text-cyan-200 transition hover:border-cyan-200 hover:text-white"
                >
                  Developer portal
                </a>
              </div>
            </div>
            <div className="glass relative flex flex-col gap-5 rounded-3xl border border-slate-700/60 p-8">
              <div className="absolute -top-32 right-10 h-52 w-52 rounded-full bg-cyan-500/30 blur-3xl" />
              <div className="flex items-center gap-3 text-cyan-200">
                <Sparkles className="h-5 w-5" />
                <p className="text-xs uppercase tracking-[0.3em]">
                  Signals from the chain
                </p>
              </div>
              <div className="grid gap-4 text-sm text-slate-200">
                <div>
                  <p className="font-display text-lg text-white">
                    $15.6B
                  </p>
                  <p className="text-slate-400">
                    Annualized staking rewards distributed globally
                  </p>
                </div>
                <div>
                  <p className="font-display text-lg text-white">
                    63%
                  </p>
                  <p className="text-slate-400">
                    Of DeFi TVL anchored to Ethereum-based protocols
                  </p>
                </div>
                <div>
                  <p className="font-display text-lg text-white">
                    485k+
                  </p>
                  <p className="text-slate-400">
                    Monthly active ETH developers pushing open-source upgrades
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="flex flex-col items-center gap-3 pb-6 text-center text-sm text-slate-500">
          <p>
            Crafted for the decentralized future. Ethereum is how the next
            billion coordinate.
          </p>
          <p>© {new Date().getFullYear()} Ether Ascendant — Infinite Garden.</p>
        </footer>
      </div>
    </main>
  );
}

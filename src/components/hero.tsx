'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/button';
import { siteConfig } from '@/config/site';

function DumbbellIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 44"
      aria-hidden="true"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="8" y="10" width="10" height="24" rx="2" fill="currentColor" />
      <rect x="20" y="7" width="10" height="30" rx="2" fill="currentColor" />
      <rect x="90" y="10" width="10" height="24" rx="2" fill="currentColor" />
      <rect x="102" y="7" width="10" height="30" rx="2" fill="currentColor" />
      <rect x="30" y="18" width="60" height="8" rx="4" fill="currentColor" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,215,130,0.12),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(255,215,130,0.08),transparent_45%)]" />
        <div className="absolute inset-x-0 bottom-24 h-px bg-gradient-to-r from-transparent via-accent/35 to-transparent" />
      </div>

      <div className="pointer-events-none absolute -left-14 top-44 hidden h-40 w-40 rounded-full border border-white/10 bg-white/[0.02] md:block" />
      <div className="pointer-events-none absolute -left-8 top-52 hidden h-28 w-28 rounded-full border border-accent/40 md:block" />
      <div className="pointer-events-none absolute right-8 top-40 hidden items-center gap-2 rounded-full border border-accent/40 bg-black/25 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-accent lg:flex">
        <DumbbellIcon className="h-3 w-10" />
        Heavy Lift Zone
      </div>

      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 pb-20 pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">
            Luxury gym & performance club
          </p>
          <h1 className="text-4xl font-semibold uppercase leading-tight md:text-6xl">
            <span className="gradient-text">Train</span> in a gym built for results.
          </h1>

          <p className="text-base text-white/70 md:text-lg">
            {siteConfig.description} Lift on premium strength machines, push intensity in our
            conditioning zone, and recover with expert-led therapy rituals.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button href="/memberships">Explore memberships</Button>
            <Button href="/contact" variant="ghost">
              Book a gym tour
            </Button>
          </div>
          <div className="grid gap-4 pt-6 text-xs uppercase tracking-[0.3em] text-white/60 md:grid-cols-3">
            <div className="glass-panel rounded-2xl p-4">Strength floor</div>
            <div className="glass-panel rounded-2xl p-4">Cardio arena</div>
            <div className="glass-panel rounded-2xl p-4">Recovery suites</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-8 rounded-[48px] border border-accent/30 bg-[radial-gradient(circle,_rgba(255,215,130,0.15),transparent_70%)] blur-3xl" />
          <div className="glass-panel relative overflow-hidden rounded-[40px] p-6">
            <div className="absolute right-5 top-5 rounded-full border border-white/15 bg-black/30 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-white/70">
              Gym Floor A
            </div>
            <Image
              src="/images/hero-silhouette.svg"
              alt="Athlete training with weights in a premium gym"
              width={560}
              height={720}
              className="h-auto w-full"
              priority
            />

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-accent">Open 24/7</p>
                <p className="text-sm text-white/70">Train anytime with premium equipment access.</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-accent">10+ training zones</p>
                <p className="text-sm text-white/70">Free weights, machines, turf, and HIIT studios.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none pb-8">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="mx-auto flex w-fit items-center gap-3 rounded-full border border-white/10 bg-black/30 px-5 py-3 text-[10px] uppercase tracking-[0.3em] text-white/60"
        >
          <DumbbellIcon className="h-3 w-10 text-accent" />
          Scroll for gym zones
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/button';
import { siteConfig } from '@/config/site';

function BarbellIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 44" aria-hidden="true" className={className} fill="none">
      <rect x="8" y="10" width="10" height="24" rx="2" fill="currentColor" />
      <rect x="20" y="7" width="10" height="30" rx="2" fill="currentColor" />
      <rect x="90" y="10" width="10" height="24" rx="2" fill="currentColor" />
      <rect x="102" y="7" width="10" height="30" rx="2" fill="currentColor" />
      <rect x="30" y="18" width="60" height="8" rx="4" fill="currentColor" />
    </svg>
  );
}

const equipment = ['Dumbbells', 'Barbells', 'Squat Racks', 'Treadmills', 'HIIT Turf'];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,215,130,0.12),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(255,215,130,0.08),transparent_45%)]" />
        <div className="absolute inset-x-0 bottom-24 h-px bg-gradient-to-r from-transparent via-accent/35 to-transparent" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 pb-16 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="flex w-fit items-center gap-3 rounded-full border border-accent/45 bg-accent/10 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-accent">
            <BarbellIcon className="h-3 w-9" />
            Premium Gym Facility
          </div>

          <h1 className="text-4xl font-semibold uppercase leading-tight md:text-6xl">
            <span className="gradient-text">Gym</span> training that looks and feels elite.
          </h1>

          <p className="text-base text-white/70 md:text-lg">
            {siteConfig.description} Built around heavy lifting, conditioning circuits, and full-body
            recovery — all inside one premium training space.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button href="/memberships">Explore memberships</Button>
            <Button href="/contact" variant="ghost">
              Book a gym tour
            </Button>
          </div>

          <div className="grid gap-4 pt-2 text-xs uppercase tracking-[0.3em] text-white/70 sm:grid-cols-3">
            <div className="glass-panel rounded-2xl p-4">
              <p className="text-accent">Strength Hall</p>
              <p className="mt-2 text-[10px] text-white/50">Racks, barbells, benches</p>
            </div>
            <div className="glass-panel rounded-2xl p-4">
              <p className="text-accent">Cardio Deck</p>
              <p className="mt-2 text-[10px] text-white/50">Treadmills, bikes, rowers</p>
            </div>
            <div className="glass-panel rounded-2xl p-4">
              <p className="text-accent">Recovery Lab</p>
              <p className="mt-2 text-[10px] text-white/50">Sauna, cryo, mobility</p>
            </div>
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
            <div className="absolute left-5 top-5 rounded-full border border-accent/50 bg-black/35 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-accent">
              Live on gym floor
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
              <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-accent">Members training now</p>
                <p className="mt-2 text-3xl font-semibold">142</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-accent">Classes this week</p>
                <p className="mt-2 text-3xl font-semibold">37</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="mb-4 flex w-fit items-center gap-3 rounded-full border border-white/10 bg-black/30 px-5 py-3 text-[10px] uppercase tracking-[0.3em] text-white/60"
        >
          <BarbellIcon className="h-3 w-10 text-accent" />
          Scroll for workout zones
        </motion.div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {equipment.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-center text-[11px] uppercase tracking-[0.22em] text-white/65"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

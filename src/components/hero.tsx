'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/button';
import { siteConfig } from '@/config/site';

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,215,130,0.12),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(255,215,130,0.08),transparent_45%)]" />
      </div>
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 pb-20 pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">Elite training club</p>
          <h1 className="text-4xl font-semibold uppercase leading-tight md:text-6xl">
            <span className="gradient-text">Forge</span> your most powerful self.
          </h1>
          <p className="text-base text-white/70 md:text-lg">
            {siteConfig.description} Experience cinematic training spaces, precision coaching, and
            recovery rituals curated for high performers.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/memberships">Explore memberships</Button>
            <Button href="/contact" variant="ghost">
              Book a private tour
            </Button>
          </div>
          <div className="grid gap-4 pt-6 text-xs uppercase tracking-[0.3em] text-white/60 md:grid-cols-3">
            <div className="glass-panel rounded-2xl p-4">Private coaching</div>
            <div className="glass-panel rounded-2xl p-4">Recovery suites</div>
            <div className="glass-panel rounded-2xl p-4">Performance labs</div>
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
            <Image
              src="/images/hero-silhouette.svg"
              alt="Athlete silhouette"
              width={560}
              height={720}
              className="h-auto w-full"
              priority
            />
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-accent">Open 24/7</p>
                <p className="text-sm text-white/70">Private access suites & curated playlists.</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-accent">Downtown skyline</p>
                <p className="text-sm text-white/70">Rooftop recovery lounge and steam ritual.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site';

export function TrainerGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {siteConfig.trainers.map((trainer, index) => (
        <motion.div
          key={trainer.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="glass-panel rounded-3xl p-6"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-accent/40 bg-black/40 text-lg font-semibold text-accent">
            {trainer.name
              .split(' ')
              .map((part) => part[0])
              .join('')}
          </div>
          <h3 className="mt-6 text-xl font-semibold uppercase tracking-tight">
            {trainer.name}
          </h3>
          <p className="text-xs uppercase tracking-[0.3em] text-accent">{trainer.specialty}</p>
          <p className="mt-4 text-sm text-white/70">{trainer.bio}</p>
        </motion.div>
      ))}
    </div>
  );
}

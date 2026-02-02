'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site';

export function Highlights() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {siteConfig.highlights.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="glass-panel rounded-3xl p-6"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-accent">{item.title}</p>
          <p className="mt-4 text-sm text-white/70">{item.description}</p>
        </motion.div>
      ))}
    </div>
  );
}

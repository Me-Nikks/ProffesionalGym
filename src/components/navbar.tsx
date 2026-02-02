'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-background/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-lg uppercase tracking-[0.3em]">
          {siteConfig.name}
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'text-xs uppercase tracking-[0.3em] text-white/70 transition hover:text-accent',
                pathname === item.href && 'text-accent',
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="rounded-full border border-accent/40 px-4 py-2 text-xs uppercase tracking-[0.3em] text-accent transition hover:border-accent hover:text-accent-soft"
        >
          Reserve
        </Link>
      </div>
    </header>
  );
}

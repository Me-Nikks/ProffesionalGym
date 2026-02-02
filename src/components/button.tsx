import Link from 'next/link';
import { cn } from '@/lib/utils';

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'ghost';
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const baseStyles =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background';

const variants = {
  primary:
    'bg-accent text-black shadow-glow hover:translate-y-[-2px] hover:bg-accent-soft',
  ghost:
    'border border-white/20 text-foreground hover:border-accent/60 hover:text-accent',
};

export function Button({
  href,
  children,
  variant = 'primary',
  className,
  ...props
}: ButtonProps) {
  if (href) {
    return (
      <Link className={cn(baseStyles, variants[variant], className)} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}

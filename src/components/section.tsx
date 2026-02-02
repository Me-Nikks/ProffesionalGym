import { cn } from '@/lib/utils';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn('py-20 md:py-28', className)}>
      {children}
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}) {
  return (
    <div className={cn('max-w-3xl space-y-4', align === 'center' && 'mx-auto text-center')}>
      <p className="text-xs uppercase tracking-[0.4em] text-accent">{eyebrow}</p>
      <h2 className="text-3xl font-semibold uppercase tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
      {description ? <p className="text-base text-white/70">{description}</p> : null}
    </div>
  );
}

import { Button } from '@/components/button';
import { siteConfig } from '@/config/site';

export function CTA() {
  return (
    <div className="relative overflow-hidden rounded-[40px] bg-[radial-gradient(circle_at_top,_rgba(255,215,130,0.18),transparent_60%)] p-[1px]">
      <div className="glass-panel flex flex-col gap-8 rounded-[40px] p-10 md:flex-row md:items-center md:justify-between">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">Limited membership</p>
          <h3 className="text-2xl font-semibold uppercase tracking-tight md:text-3xl">
            {siteConfig.cta.title}
          </h3>
          <p className="text-sm text-white/70">{siteConfig.cta.description}</p>
        </div>
        <Button href="/contact">Request your invitation</Button>
      </div>
    </div>
  );
}

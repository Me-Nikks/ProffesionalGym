import type { Metadata } from 'next';
import { CTA } from '@/components/cta';
import { Section, SectionHeading } from '@/components/section';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Programs',
};

export default function ProgramsPage() {
  return (
    <div>
      <Section>
        <div className="mx-auto w-full max-w-6xl px-6">
          <SectionHeading
            eyebrow="Training plans"
            title="Programs engineered for elite performance"
            description="Each plan is customized, tracked, and refined by our performance lab."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {siteConfig.programs.map((program) => (
              <div key={program.title} className="glass-panel rounded-3xl p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-accent">{program.focus}</p>
                <h3 className="mt-4 text-xl font-semibold uppercase tracking-tight">
                  {program.title}
                </h3>
                <p className="mt-4 text-sm text-white/70">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-surface">
        <div className="mx-auto w-full max-w-6xl px-6">
          <SectionHeading
            eyebrow="Performance tracking"
            title="Data-backed progression"
            description="We align your training block with diagnostic check-ins to ensure results are
            measurable and sustainable."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              'Weekly strength profiling with velocity tracking.',
              'Metabolic conditioning benchmarks and VO2 insights.',
              'Recovery readiness scores with HRV data.',
              'Monthly performance concierge consultations.',
            ].map((item) => (
              <div key={item} className="glass-panel rounded-3xl p-6">
                <p className="text-sm text-white/70">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto w-full max-w-6xl px-6">
          <CTA />
        </div>
      </Section>
    </div>
  );
}

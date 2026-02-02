import type { Metadata } from 'next';
import { Section, SectionHeading } from '@/components/section';
import { TrainerGrid } from '@/components/trainer-grid';
import { CTA } from '@/components/cta';

export const metadata: Metadata = {
  title: 'Trainers',
};

export default function TrainersPage() {
  return (
    <div>
      <Section>
        <div className="mx-auto w-full max-w-6xl px-6">
          <SectionHeading
            eyebrow="The team"
            title="Performance specialists with concierge care"
            description="Our coaches deliver highly personalized sessions to shape strength, stamina, and
            longevity."
          />
          <div className="mt-12">
            <TrainerGrid />
          </div>
        </div>
      </Section>

      <Section className="bg-surface">
        <div className="mx-auto w-full max-w-6xl px-6">
          <SectionHeading
            eyebrow="Private coaching"
            title="Every session is choreographed"
            description="Expect hands-on refinement, cueing, and precision adjustments."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              'One-on-one strength, conditioning, and recovery programming.',
              'Daily readiness check-ins with your performance concierge.',
              'Lifestyle integration for travel, stress, and recovery planning.',
              'Access to specialty clinicians and mobility therapists.',
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

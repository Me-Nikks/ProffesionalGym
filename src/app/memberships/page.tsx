import type { Metadata } from 'next';
import { Section, SectionHeading } from '@/components/section';
import { siteConfig } from '@/config/site';
import { CTA } from '@/components/cta';

export const metadata: Metadata = {
  title: 'Membership',
};

export default function MembershipPage() {
  return (
    <div>
      <Section>
        <div className="mx-auto w-full max-w-6xl px-6">
          <SectionHeading
            eyebrow="Membership"
            title="A curated experience for every ambition"
            description="Choose the access level that matches your lifestyle and performance goals."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {siteConfig.memberships.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-3xl border p-6 ${
                  plan.featured
                    ? 'border-accent bg-[radial-gradient(circle_at_top,_rgba(255,215,130,0.18),transparent_60%)]'
                    : 'border-white/10 bg-surface'
                }`}
              >
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">{plan.name}</p>
                <h3 className="mt-4 text-2xl font-semibold uppercase tracking-tight text-accent">
                  {plan.price}
                </h3>
                <ul className="mt-6 space-y-3 text-sm text-white/70">
                  {plan.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-surface">
        <div className="mx-auto w-full max-w-6xl px-6">
          <SectionHeading
            eyebrow="Concierge"
            title="Memberships include white-glove coordination"
            description="Your concierge manages scheduling, recovery rituals, and travel programming."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              'Private access to our rooftop recovery lounge.',
              'Priority scheduling across all training zones.',
              'On-demand nutrition strategy updates.',
              'Exclusive founder-only events and workshops.',
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

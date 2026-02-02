import type { Metadata } from 'next';
import Image from 'next/image';
import { CTA } from '@/components/cta';
import { Section, SectionHeading } from '@/components/section';

export const metadata: Metadata = {
  title: 'About',
};

export default function AboutPage() {
  return (
    <div>
      <Section>
        <div className="mx-auto w-full max-w-6xl px-6">
          <SectionHeading
            eyebrow="Our story"
            title="A sanctuary for ambitious, urban athletes"
            description="Aurora Forge was born from a desire to merge luxury hospitality with high-level
            performance science."
          />
          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div className="space-y-6 text-sm text-white/70">
              <p>
                Designed by award-winning architects, our club blends matte black textures, brass
                accents, and immersive lighting to create a cinematic training experience.
              </p>
              <p>
                Our leadership team includes former Olympic coaches, recovery scientists, and
                hospitality strategists who believe training should be inspiring, not intimidating.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="glass-panel rounded-2xl p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-accent">Since 2014</p>
                  <p className="text-sm">Boutique performance collective.</p>
                </div>
                <div className="glass-panel rounded-2xl p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-accent">12,000 sq ft</p>
                  <p className="text-sm">Multi-level training space.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 rounded-[32px] border border-accent/30 bg-[radial-gradient(circle,_rgba(255,215,130,0.18),transparent_70%)] blur-2xl" />
              <Image
                src="/images/about-lounge.svg"
                alt="Luxury lounge"
                width={520}
                height={520}
                className="relative rounded-[32px] border border-white/10"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-surface">
        <div className="mx-auto w-full max-w-6xl px-6">
          <SectionHeading
            eyebrow="Values"
            title="Luxury meets intention"
            description="We orchestrate every detail to support a mindful, high-performing lifestyle."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Precision',
                desc: 'Every plan is calibrated and adjusted with data-informed care.',
              },
              {
                title: 'Presence',
                desc: 'Training is immersive, personal, and crafted to inspire focus.',
              },
              {
                title: 'Progression',
                desc: 'We track small gains to build exceptional long-term results.',
              },
            ].map((value) => (
              <div key={value.title} className="glass-panel rounded-3xl p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-accent">{value.title}</p>
                <p className="mt-4 text-sm text-white/70">{value.desc}</p>
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

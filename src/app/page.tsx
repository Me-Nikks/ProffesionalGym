import Image from 'next/image';
import { CTA } from '@/components/cta';
import { Hero } from '@/components/hero';
import { Highlights } from '@/components/highlights';
import { Section, SectionHeading } from '@/components/section';

export default function HomePage() {
  return (
    <div>
      <Hero />

      <Section className="bg-surface">
        <div className="mx-auto w-full max-w-6xl px-6">
          <SectionHeading
            eyebrow="Philosophy"
            title="Training designed with precision and artistry"
            description="Aurora Forge merges elite coaching, biofeedback insights, and immersive design to
            elevate every session."
          />
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6 text-sm text-white/70">
              <p>
                Every program begins with a bespoke assessment. We study your movement patterns,
                recovery readiness, and lifestyle rhythms to craft a personal performance plan.
              </p>
              <p>
                Expect concierge-level attention: personalized playlists, recovery rituals, and
                nutrition timing designed by our in-house performance lab.
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="glass-panel rounded-2xl p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-accent">120+</p>
                  <p className="text-sm">Private clients</p>
                </div>
                <div className="glass-panel rounded-2xl p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-accent">8 min</p>
                  <p className="text-sm">Wellness response time</p>
                </div>
                <div className="glass-panel rounded-2xl p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-accent">98%</p>
                  <p className="text-sm">Goal completion rate</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 rounded-[32px] border border-accent/30 bg-[radial-gradient(circle,_rgba(255,215,130,0.18),transparent_70%)] blur-2xl" />
              <Image
                src="/images/philosophy-studio.svg"
                alt="Training studio"
                width={520}
                height={520}
                className="relative rounded-[32px] border border-white/10"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto w-full max-w-6xl px-6">
          <SectionHeading
            eyebrow="Highlights"
            title="Luxury spaces built for high-performance"
            description="Every floor is choreographed with light, sound, and advanced equipment."
          />
          <div className="mt-12">
            <Highlights />
          </div>
        </div>
      </Section>

      <Section className="bg-surface">
        <div className="mx-auto w-full max-w-6xl px-6">
          <SectionHeading
            eyebrow="Recovery rituals"
            title="Restore with precision and calm"
            description="Our recovery wing is an immersive lounge with infrared, cryotherapy, and guided
            breathwork."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {['Infrared therapy', 'Cryo immersion', 'Neural breathwork'].map((item) => (
              <div key={item} className="glass-panel rounded-3xl p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-accent">{item}</p>
                <p className="mt-4 text-sm text-white/70">
                  Personalized recovery sessions guided by our on-site performance therapists.
                </p>
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

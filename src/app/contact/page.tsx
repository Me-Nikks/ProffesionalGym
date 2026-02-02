import type { Metadata } from 'next';
import { ContactForm } from '@/components/contact-form';
import { Section, SectionHeading } from '@/components/section';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Contact',
};

export default function ContactPage() {
  return (
    <div>
      <Section>
        <div className="mx-auto w-full max-w-6xl px-6">
          <SectionHeading
            eyebrow="Concierge"
            title="Reserve your private tour"
            description="Tell us about your goals and preferred time. Our concierge team will respond within
            24 hours."
          />
          <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="glass-panel rounded-3xl p-6">
              <ContactForm />
            </div>
            <div className="space-y-6 text-sm text-white/70">
              <div className="glass-panel rounded-3xl p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-accent">Studio Hours</p>
                <p className="mt-3">24/7 member access · Concierge 6am-10pm daily</p>
              </div>
              <div className="glass-panel rounded-3xl p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-accent">Location</p>
                <p className="mt-3">312 Aurora Avenue, Penthouse Level, NYC</p>
              </div>
              <div className="glass-panel rounded-3xl p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-accent">Email</p>
                <p className="mt-3">{siteConfig.contactEmail}</p>
              </div>
              <div className="glass-panel rounded-3xl p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-accent">Phone</p>
                <p className="mt-3">+1 (212) 555-0198</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

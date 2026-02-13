export const siteConfig = {
  name: 'Aurora Forge Athletics',
  description:
    'A luxury gym focused on strength training, athletic conditioning, and recovery science.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  ogImage: '/images/og-aurora.svg',
  contactEmail: process.env.CONTACT_RECEIVER_EMAIL || 'concierge@auroraforgegym.com',
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Programs', href: '/programs' },
    { label: 'Trainers', href: '/trainers' },
    { label: 'Membership', href: '/memberships' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  highlights: [
    {
      title: 'Cinematic training floors',
      description:
        'A curated gym environment with premium machines, free weights, and soundscapes tuned for focus.',
    },
    {
      title: 'Precision performance labs',
      description:
        'Motion capture, metabolic diagnostics, and recovery suites engineered to optimize every session.',
    },
    {
      title: 'Concierge-level service',
      description:
        'White-glove planning for your training, nutrition, and lifestyle rituals.',
    },
  ],
  programs: [
    {
      title: 'Architect Strength',
      focus: 'Power & hypertrophy',
      description:
        'Progressive overload cycles engineered for elite strength, with recovery metrics tracked weekly.',
    },
    {
      title: 'Velocity Conditioning',
      focus: 'Athletic performance',
      description:
        'Explosive conditioning blocks and sport-specific agility using light-reactive stations.',
    },
    {
      title: 'Luminous Recovery',
      focus: 'Mobility & restoration',
      description:
        'Infrared, cryotherapy, and mobility flows guided by certified performance therapists.',
    },
  ],
  trainers: [
    {
      name: 'Kiera Voss',
      specialty: 'Strength Architect',
      bio: 'Former Olympic performance coach blending biomechanics with elite-level programming.',
    },
    {
      name: 'Rafael Dune',
      specialty: 'Performance Engineer',
      bio: 'Specialist in speed, agility, and reactive training with a data-first methodology.',
    },
    {
      name: 'Naomi Faye',
      specialty: 'Recovery Curator',
      bio: 'Leads recovery rituals, mobility therapy, and breathwork experiences.',
    },
  ],
  memberships: [
    {
      name: 'Obsidian',
      price: '$320/mo',
      perks: [
        'Unlimited training floor access',
        'Recovery suite rituals (4/mo)',
        'Priority booking',
      ],
    },
    {
      name: 'Auric Elite',
      price: '$520/mo',
      perks: [
        'Private coaching (4/mo)',
        'Unlimited recovery suite',
        'Performance diagnostics',
      ],
      featured: true,
    },
    {
      name: 'Signature Founders',
      price: '$980/mo',
      perks: [
        'Weekly concierge sessions',
        'Nutrition + recovery blueprint',
        'VIP lounge + guest passes',
      ],
    },
  ],
  cta: {
    title: 'Elevate your personal performance',
    description:
      'Memberships are intentionally limited. Reserve your tour and receive a bespoke performance brief.',
  },
};

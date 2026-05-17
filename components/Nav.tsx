import { AnimatedWordmark } from './AnimatedWordmark';

export function Nav() {
  const links = [
    { href: '/#how-it-works', label: 'Process' },
    { href: '/#work', label: 'Work' },
    { href: '/#pricing', label: 'Pricing' },
    { href: '/#faq', label: 'FAQ' },
    { href: '/#contact', label: 'Contact' }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-paper/90 backdrop-blur-sm border-b border-border-faint">
      <div className="mx-auto max-w-6xl px-space-4 py-space-3 flex items-center justify-between">
        <a
          href="/"
          className="text-h3 text-ink no-underline hover:text-ink"
          aria-label="Mira home"
        >
          <AnimatedWordmark />
        </a>
        <div className="hidden sm:flex gap-space-5 text-body font-medium">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-ink no-underline hover:text-bottle">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

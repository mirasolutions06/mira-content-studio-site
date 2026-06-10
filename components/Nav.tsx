'use client';

import { useEffect, useState } from 'react';
import { AnimatedWordmark } from './AnimatedWordmark';

export function Nav() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '/#how-it-works', label: 'Process' },
    { href: '/#work', label: 'Work' },
    { href: '/#pricing', label: 'Pricing' },
    { href: '/#faq', label: 'FAQ' },
    { href: '/#contact', label: 'Contact' }
  ];

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  // Close on Escape, and close if the viewport grows past the sm breakpoint
  // (so the dropdown can never be left "open" behind the desktop nav).
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const mq = window.matchMedia('(min-width: 640px)');
    const onChange = () => {
      if (mq.matches) setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    mq.addEventListener('change', onChange);
    return () => {
      window.removeEventListener('keydown', onKey);
      mq.removeEventListener('change', onChange);
    };
  }, []);

  const close = () => setOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-paper/90 backdrop-blur-sm border-b border-border-faint">
      <div className="mx-auto max-w-6xl px-space-4 py-space-3 flex items-center justify-between">
        <a
          href="/"
          className="text-h3 text-ink no-underline hover:text-ink"
          aria-label="Mira home"
          onClick={close}
        >
          <AnimatedWordmark />
        </a>

        {/* Desktop links */}
        <div className="hidden sm:flex gap-space-5 text-body font-medium">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-ink no-underline hover:text-bottle">
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="sm:hidden relative inline-flex flex-col justify-center items-center w-10 h-10 -mr-1"
        >
          <span
            aria-hidden="true"
            className={`absolute block h-[2px] w-6 bg-ink transition-transform duration-200 ease-out ${
              open ? 'rotate-45' : '-translate-y-[7px]'
            }`}
          />
          <span
            aria-hidden="true"
            className={`absolute block h-[2px] w-6 bg-ink transition-opacity duration-150 ease-out ${
              open ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            aria-hidden="true"
            className={`absolute block h-[2px] w-6 bg-ink transition-transform duration-200 ease-out ${
              open ? '-rotate-45' : 'translate-y-[7px]'
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown panel */}
      <div
        id="mobile-menu"
        inert={!open}
        className={`sm:hidden overflow-hidden border-t border-border-faint transition-[max-height] duration-300 ease-out ${
          open ? 'max-h-[80vh]' : 'max-h-0'
        }`}
      >
        <div className="px-space-4 py-space-2 flex flex-col">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={close}
              className="text-ink no-underline hover:text-bottle py-space-3 text-h3 font-semibold border-b border-border-faint last:border-b-0"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

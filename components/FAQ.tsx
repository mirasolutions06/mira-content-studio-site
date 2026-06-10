interface Item {
  q: string;
  a: string;
}

const faqs: Item[] = [
  {
    q: 'Will it look like my actual product?',
    a: 'Yes — that is the job. Your product shots define the product: the bottle, the label, the proportions in every finished frame are yours. If a frame gets a detail wrong — label type, cap shape, colour — flag it and we re-shoot at our cost. Nothing ships that misrepresents the product.',
  },
  {
    q: 'What do I actually receive?',
    a: 'Web-ready stills as PNG and JPG. Social cuts sized for every channel: 1:1 for Instagram grid, 4:5 for feed, 9:16 for Reels and TikTok. Short MP4 loops if your tier includes video. Everything arrives in one Dropbox folder, named and tagged, ready to drop straight into Shopify, Klaviyo, or wherever you publish from.',
  },
  {
    q: 'How long does it take?',
    a: 'Two working days for Try it, four for a Brand Shoot. The window starts the next working day after we receive your brief — a short form you fill in right after checkout, about ten minutes. Studio work is delivered through the month on a priority queue. Nothing is shot until the brief is in.',
  },
  {
    q: 'Can I use this for paid ads?',
    a: 'Yes. Every shoot is licensed for paid social, marketplace listings, your site, and your email. You own the output and can use it on any channel you control. Broadcast, billboards, and print campaigns are case-by-case. Tell us before you book if those are in play and we will price the licence in.',
  },
  {
    q: 'What if I don’t like the result?',
    a: 'Every shoot is reviewed before it ships. If a frame is not working, flag it — wrong angle, off colour, product reading badly — and we re-shoot at our cost. Try it includes two revision rounds. Brand Shoot includes unlimited revisions. Studio covers edits as you go. We do not ship work that does not sit next to the brands you study.',
  },
  {
    q: 'Do you work from my existing photos?',
    a: 'Yes. Product shots define the product — what we shoot is your bottle, your label, your proportions. Mood images and lifestyle references steer everything else: colour, light, composition, tone. If you have brand guidelines or a fonts kit, send those too.',
  },
  {
    q: 'Can I cancel Studio?',
    a: 'Studio runs on a three-month minimum, then month-to-month. After the minimum, cancel any time with one week of notice. We deliver what is already in the queue and stop billing from the next cycle. No exit fees, no clawback. If you pause mid-month, we hold the work and pick up when you are ready.',
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-paper px-space-4 py-space-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-space-6 text-center">
          <div className="text-kicker text-bottle mb-space-2">FAQ</div>
          <h2 className="text-h1 text-ink">
            Common questions<span className="text-bottle">.</span> Plain answers<span className="text-bottle">.</span>
          </h2>
        </div>
        <div className="border-y border-border-faint divide-y divide-border-faint">
          {faqs.map((f) => (
            <details key={f.q} className="group">
              <summary className="flex items-center justify-between gap-space-4 py-space-3 cursor-pointer list-none text-body text-ink">
                <span>{f.q}</span>
                <span
                  aria-hidden="true"
                  className="text-body text-bottle leading-none transition-transform duration-200 ease-out group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="pb-space-4 -mt-space-2 text-body text-ink/70 max-w-prose">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

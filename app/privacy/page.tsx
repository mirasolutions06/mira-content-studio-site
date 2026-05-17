import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Privacy — Mira Content Studio',
  description: 'How Mira Content Studio handles your data.',
};

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main>
        <article className="bg-paper px-space-4 py-space-8">
          <div className="mx-auto max-w-3xl">
            <header className="mb-space-7">
              <div className="text-kicker text-bottle mb-space-2">Privacy</div>
              <h1 className="text-h1 text-ink">
                Privacy notice<span className="text-bottle">.</span>
              </h1>
              <p className="text-body-sm text-stone-500 mt-space-3">
                Last updated 17 May 2026
              </p>
            </header>

            <div className="space-y-space-4 text-body text-ink/80 leading-relaxed">
              <p>
                This Privacy Notice for Mira Content Studio (&ldquo;<strong>we</strong>&rdquo;, &ldquo;<strong>us</strong>&rdquo;, or &ldquo;<strong>our</strong>&rdquo;) describes how and why we might access, collect, store, use, and/or share (&ldquo;<strong>process</strong>&rdquo;) your personal information when you use our services (&ldquo;<strong>Services</strong>&rdquo;), including when you:
              </p>
              <ul className="list-disc list-outside ml-6 space-y-space-2">
                <li>
                  Visit our website at{' '}
                  <a href="https://miracontent.studio" className="text-bottle underline underline-offset-[3px]">
                    https://miracontent.studio
                  </a>
                  {' '}or any website of ours that links to this Privacy Notice
                </li>
                <li>
                  Use our digital creative services. Mira Content Studio is a creative studio producing product photography and short campaign video for direct-to-consumer e-commerce brands. We deliver digital image and video files. Customers pay via Stripe and submit briefs through Tally.
                </li>
                <li>
                  Engage with us in other related ways, including any marketing or events
                </li>
              </ul>
              <p>
                <strong>Questions or concerns?</strong> Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services.
              </p>

              <h2 className="text-h2 text-ink mt-space-7 mb-space-3">Summary of key points</h2>
              <p>
                <em><strong>This summary provides key points from our Privacy Notice. Find more details about any topic in the sections below.</strong></em>
              </p>
              <p>
                <strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use.
              </p>
              <p>
                <strong>Do we process any sensitive personal information?</strong> Some information may be considered &ldquo;special&rdquo; or &ldquo;sensitive&rdquo; in certain jurisdictions, for example racial or ethnic origins, sexual orientation, or religious beliefs. <strong>We do not process sensitive personal information.</strong>
              </p>
              <p>
                <strong>Do we collect any information from third parties?</strong> <strong>We do not collect any information from third parties.</strong>
              </p>
              <p>
                <strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law.
              </p>
              <p>
                <strong>In what situations and with which parties do we share personal information?</strong> We may share information in specific situations with specific third parties &mdash; primarily Stripe (payment processing), Tally (form processing), and Cloudflare (hosting).
              </p>
              <p>
                <strong>How do we keep your information safe?</strong> We have adequate organisational and technical processes and procedures in place to protect your personal information. However, no transmission over the internet or storage technology is 100% secure.
              </p>
              <p>
                <strong>What are your rights?</strong> Depending on where you are located, applicable privacy law may give you certain rights regarding your personal information.
              </p>
              <p>
                <strong>How do you exercise your rights?</strong> The easiest way is by emailing{' '}
                <a href="mailto:hello@miracontent.studio" className="text-bottle underline underline-offset-[3px]">
                  hello@miracontent.studio
                </a>. We will consider and act upon any request in accordance with applicable data protection laws.
              </p>

              <h2 className="text-h2 text-ink mt-space-7 mb-space-3">1. What information do we collect?</h2>
              <h3 className="text-h3 text-ink mt-space-5 mb-space-2">Personal information you disclose to us</h3>
              <p>
                <em><strong>In short:</strong> We collect personal information that you provide to us.</em>
              </p>
              <p>
                We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
              </p>
              <p>
                <strong>Personal Information Provided by You.</strong> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:
              </p>
              <ul className="list-disc list-outside ml-6 space-y-space-1">
                <li>Email addresses</li>
                <li>Brand and project details you provide in our brief form (brand name, what is being shot, references, notes, deadlines)</li>
              </ul>
              <p>
                <strong>Sensitive Information.</strong> We do not process sensitive information.
              </p>
              <p>
                <strong>Payment Data.</strong> We may collect data necessary to process your payment if you choose to make purchases, such as your payment instrument number, and the security code associated with your payment instrument. All payment data is handled and stored by Stripe. You may find their privacy notice here:{' '}
                <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-bottle underline underline-offset-[3px]">
                  stripe.com/privacy
                </a>.
              </p>
              <p>
                All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.
              </p>

              <h2 className="text-h2 text-ink mt-space-7 mb-space-3">2. How do we process your information?</h2>
              <p>
                <em><strong>In short:</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes only with your prior explicit consent.</em>
              </p>
              <p>
                <strong>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</strong>
              </p>
              <ul className="list-disc list-outside ml-6 space-y-space-2">
                <li><strong>To deliver our Services.</strong> Once you commission a shoot, we process your brand brief, references, and email address to produce, deliver, and follow up on your shoot.</li>
                <li><strong>To process payments.</strong> Payment information is processed by Stripe; we receive transaction confirmations and customer email addresses so we can match payments to briefs.</li>
                <li><strong>To respond to user inquiries.</strong> We process your information to respond to inquiries and address any concerns you may have about our Services.</li>
                <li><strong>To save or protect an individual&rsquo;s vital interest.</strong> We may process your information when necessary to save or protect an individual&rsquo;s vital interest, such as to prevent harm.</li>
              </ul>

              <h2 className="text-h2 text-ink mt-space-7 mb-space-3">3. What legal bases do we rely on to process your information?</h2>
              <p>
                <em><strong>In short:</strong> We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfil our contractual obligations, to protect your rights, or to fulfil our legitimate business interests.</em>
              </p>
              <p>
                <strong><u>If you are located in the EU or UK, this section applies to you.</u></strong>
              </p>
              <p>
                The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases:
              </p>
              <ul className="list-disc list-outside ml-6 space-y-space-2">
                <li><strong>Consent.</strong> We may process your information if you have given us permission (i.e., consent) to use your personal information for a specific purpose. You can withdraw your consent at any time.</li>
                <li><strong>Performance of a Contract.</strong> We may process your personal information when we believe it is necessary to fulfil our contractual obligations to you, including providing our Services.</li>
                <li><strong>Legal Obligations.</strong> We may process your information where we believe it is necessary for compliance with our legal obligations.</li>
                <li><strong>Vital Interests.</strong> We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party.</li>
              </ul>

              <h2 className="text-h2 text-ink mt-space-7 mb-space-3">4. When and with whom do we share your personal information?</h2>
              <p>
                <em><strong>In short:</strong> We may share information in specific situations described in this section and/or with the following third parties.</em>
              </p>
              <p>
                We may need to share your personal information in the following situations:
              </p>
              <ul className="list-disc list-outside ml-6 space-y-space-2">
                <li>
                  <strong>Service providers.</strong> We share information with the services that power our business:
                  <ul className="list-disc list-outside ml-6 mt-space-2 space-y-space-1">
                    <li><strong>Stripe</strong> &mdash; payment processing. See{' '}
                      <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-bottle underline underline-offset-[3px]">stripe.com/privacy</a>.</li>
                    <li><strong>Tally</strong> &mdash; brief form processing. See{' '}
                      <a href="https://tally.so/help/gdpr" target="_blank" rel="noopener noreferrer" className="text-bottle underline underline-offset-[3px]">tally.so/help/gdpr</a>.</li>
                    <li><strong>Cloudflare</strong> &mdash; website hosting and domain. See{' '}
                      <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer" className="text-bottle underline underline-offset-[3px]">cloudflare.com/privacypolicy</a>.</li>
                    <li><strong>Google Workspace</strong> &mdash; email delivery. See{' '}
                      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-bottle underline underline-offset-[3px]">policies.google.com/privacy</a>.</li>
                  </ul>
                </li>
                <li><strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
              </ul>

              <h2 className="text-h2 text-ink mt-space-7 mb-space-3">5. Do we offer artificial intelligence-based products?</h2>
              <p>
                <em><strong>In short:</strong> Yes. We use AI image- and video-generation tools to produce the deliverables we send to clients.</em>
              </p>
              <p>
                Our deliverables (product photography and campaign video) are produced using AI image- and video-generation tools (&ldquo;AI Products&rdquo;). The terms in this Privacy Notice govern your use of any AI Products surfaced within our Services.
              </p>
              <p>
                <strong>How we process your data using AI.</strong> All personal information processed using our AI Products is handled in line with this Privacy Notice and our agreements with the underlying providers. We do not train third-party AI systems on your personal information.
              </p>

              <h2 className="text-h2 text-ink mt-space-7 mb-space-3">6. How long do we keep your information?</h2>
              <p>
                <em><strong>In short:</strong> We keep your information for as long as necessary to fulfil the purposes outlined in this Privacy Notice unless otherwise required by law.</em>
              </p>
              <p>
                We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).
              </p>
              <p>
                When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymise such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), we will securely store your personal information and isolate it from any further processing until deletion is possible.
              </p>

              <h2 className="text-h2 text-ink mt-space-7 mb-space-3">7. How do we keep your information safe?</h2>
              <p>
                <em><strong>In short:</strong> We aim to protect your personal information through a system of organisational and technical security measures.</em>
              </p>
              <p>
                We have implemented appropriate and reasonable technical and organisational security measures designed to protect the security of any personal information we process. However, despite our safeguards, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk.
              </p>

              <h2 className="text-h2 text-ink mt-space-7 mb-space-3">8. Do we collect information from minors?</h2>
              <p>
                <em><strong>In short:</strong> We do not knowingly collect data from or market to children under 18 years of age or the equivalent age as specified by law in your jurisdiction.</em>
              </p>
              <p>
                We do not knowingly collect, solicit data from, or market to children under 18 years of age, nor do we knowingly sell such personal information. By using the Services, you represent that you are at least 18 or the equivalent age as specified by law in your jurisdiction. If you become aware of any data we may have collected from children under age 18, please contact us at{' '}
                <a href="mailto:hello@miracontent.studio" className="text-bottle underline underline-offset-[3px]">
                  hello@miracontent.studio
                </a>.
              </p>

              <h2 className="text-h2 text-ink mt-space-7 mb-space-3">9. What are your privacy rights?</h2>
              <p>
                <em><strong>In short:</strong> Depending on where you are located, applicable privacy law may give you certain rights regarding your personal information.</em>
              </p>
              <p>
                In some regions (like the EEA, UK, Switzerland, and Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure, (iii) to restrict the processing of your personal information, (iv) if applicable, to data portability, and (v) not to be subject to automated decision-making. You can make such a request by emailing us at{' '}
                <a href="mailto:hello@miracontent.studio" className="text-bottle underline underline-offset-[3px]">
                  hello@miracontent.studio
                </a>.
              </p>
              <p>
                If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your{' '}
                <a href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm" target="_blank" rel="noopener noreferrer" className="text-bottle underline underline-offset-[3px]">
                  Member State data protection authority
                </a>{' '}or the{' '}
                <a href="https://ico.org.uk/make-a-complaint/data-protection-complaints/data-protection-complaints/" target="_blank" rel="noopener noreferrer" className="text-bottle underline underline-offset-[3px]">
                  UK data protection authority
                </a>.
              </p>
              <p>
                <strong><u>Withdrawing your consent.</u></strong> If we are relying on your consent to process your personal information, you have the right to withdraw your consent at any time by emailing us at{' '}
                <a href="mailto:hello@miracontent.studio" className="text-bottle underline underline-offset-[3px]">
                  hello@miracontent.studio
                </a>.
              </p>

              <h2 className="text-h2 text-ink mt-space-7 mb-space-3">10. Controls for do-not-track features</h2>
              <p>
                Most web browsers include a Do-Not-Track (&ldquo;DNT&rdquo;) feature you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognising and implementing DNT signals has been finalised. As such, we do not currently respond to DNT browser signals. If a standard for online tracking is adopted in the future that we must follow, we will inform you about that practice in a revised version of this Privacy Notice.
              </p>

              <h2 className="text-h2 text-ink mt-space-7 mb-space-3">11. Do US residents have specific privacy rights?</h2>
              <p>
                <em><strong>In short:</strong> If you are a resident of California, Colorado, Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon, Rhode Island, Tennessee, Texas, Utah, or Virginia, you may have the right to request access to your personal information, correct inaccuracies, get a copy of, or delete your personal information.</em>
              </p>
              <p>
                We have not disclosed, sold, or shared any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months, and we will not sell or share personal information in the future.
              </p>
              <h3 className="text-h3 text-ink mt-space-5 mb-space-2">Your rights</h3>
              <ul className="list-disc list-outside ml-6 space-y-space-1">
                <li><strong>Right to know</strong> whether we are processing your personal data</li>
                <li><strong>Right to access</strong> your personal data</li>
                <li><strong>Right to correct</strong> inaccuracies</li>
                <li><strong>Right to request</strong> deletion</li>
                <li><strong>Right to obtain a copy</strong> of the personal data you previously shared with us</li>
                <li><strong>Right to non-discrimination</strong> for exercising your rights</li>
                <li><strong>Right to opt out</strong> of the processing of your personal data for targeted advertising, sale, or profiling</li>
              </ul>
              <h3 className="text-h3 text-ink mt-space-5 mb-space-2">How to exercise your rights</h3>
              <p>
                Email{' '}
                <a href="mailto:hello@miracontent.studio" className="text-bottle underline underline-offset-[3px]">
                  hello@miracontent.studio
                </a>.
              </p>
              <h3 className="text-h3 text-ink mt-space-5 mb-space-2">Appeals</h3>
              <p>
                If we decline to take action regarding your request, you may appeal our decision by emailing us at{' '}
                <a href="mailto:hello@miracontent.studio" className="text-bottle underline underline-offset-[3px]">
                  hello@miracontent.studio
                </a>. We will inform you in writing of any action taken or not taken in response to the appeal.
              </p>

              <h2 className="text-h2 text-ink mt-space-7 mb-space-3">12. Do we make updates to this notice?</h2>
              <p>
                <em><strong>In short:</strong> Yes, we will update this notice as necessary to stay compliant with relevant laws.</em>
              </p>
              <p>
                We may update this Privacy Notice from time to time. The updated version will be indicated by an updated date at the top. If we make material changes, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification.
              </p>

              <h2 className="text-h2 text-ink mt-space-7 mb-space-3">13. How can you contact us about this notice?</h2>
              <p>
                If you have questions or comments about this notice, you may contact us at{' '}
                <a href="mailto:hello@miracontent.studio" className="text-bottle underline underline-offset-[3px]">
                  hello@miracontent.studio
                </a>.
              </p>

              <h2 className="text-h2 text-ink mt-space-7 mb-space-3">14. How can you review, update, or delete your data?</h2>
              <p>
                You have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. To make any of these requests, email{' '}
                <a href="mailto:hello@miracontent.studio" className="text-bottle underline underline-offset-[3px]">
                  hello@miracontent.studio
                </a>.
              </p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

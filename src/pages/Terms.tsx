import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { isPlaceholder, mailtoSupport, siteConfig } from '../config/site'

export function Terms() {
  const supportHref = mailtoSupport()
  const operator = isPlaceholder(siteConfig.company.legalName)
    ? 'the operator of VOLUME'
    : siteConfig.company.legalName

  return (
    <>
      <Seo
        title="Terms of Service"
        description="Terms of Service draft for VOLUME — accounts, subscriptions, acceptable use, and fitness disclaimers."
        path="/terms"
      />

      <section className="page-hero">
        <div className="container">
          <p className="section-kicker">Legal</p>
          <h1>Terms of Service</h1>
          <p>
            UK-oriented draft for review before publication. Confirm company details, governing law,
            subscription wording, and liability limits with qualified counsel.
          </p>
          <p className="confirm-note">
            Needs owner confirmation: legal entity, address, company number, support contact, and
            final liability / consumer-law wording.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container prose">
          <p>
            <strong>Last updated:</strong> 20 November 2026 (draft)
          </p>
          <p>
            These Terms govern your use of the VOLUME application and related websites operated by{' '}
            {operator}. By accessing or using VOLUME, you agree to these Terms.
          </p>
          <p className="confirm-note">
            Legal name: <code>{siteConfig.company.legalName}</code> · Company number:{' '}
            <code>{siteConfig.company.companyNumber}</code> · Address:{' '}
            <code>{siteConfig.company.address}</code>
          </p>

          <h2>1. The service</h2>
          <p>
            VOLUME provides fitness-related tools such as workout tracking, progression context,
            nutrition and bodyweight logging, performance insights, history/analytics, and related
            features. Features may change as the product evolves.
          </p>

          <h2>2. Accounts</h2>
          <ul>
            <li>You must provide accurate account information and keep credentials secure.</li>
            <li>You are responsible for activity under your account.</li>
            <li>Notify us promptly of unauthorised access.</li>
            <li>We may suspend or terminate accounts that violate these Terms.</li>
          </ul>

          <h2>3. Acceptable use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Misuse the service, attempt unauthorised access, or disrupt operations.</li>
            <li>Upload unlawful, harmful, or infringing content.</li>
            <li>Reverse engineer or scrape the service except where permitted by law.</li>
            <li>Use VOLUME to harass others or abuse social features.</li>
          </ul>

          <h2>4. Subscriptions, payments, and cancellation</h2>
          <p>
            Paid features are billed through Apple’s App Store. Pricing, trial periods, and renewal
            terms are shown at purchase. Subscriptions renew automatically unless cancelled in your
            Apple ID subscription settings at least 24 hours before the period ends. Refunds are
            handled under Apple’s applicable policies.
          </p>
          <p className="confirm-note">
            Confirm subscription SKUs, trial lengths, and any non-Apple billing before publish.
          </p>

          <h2>5. Availability</h2>
          <p>
            We aim to keep VOLUME available, but we do not guarantee uninterrupted or error-free
            service. Maintenance, outages, or platform changes (including iOS / App Store changes)
            may affect availability.
          </p>

          <h2>6. Intellectual property</h2>
          <p>
            VOLUME, including software, branding, and content we provide, is owned by us or our
            licensors. You receive a limited, non-exclusive, non-transferable licence to use the app
            for personal, non-commercial purposes in line with these Terms. You retain rights in
            content you submit, and grant us a licence to host and process it to operate the
            service.
          </p>

          <h2>7. Fitness and nutrition disclaimer</h2>
          <p>
            VOLUME provides general fitness and nutrition tracking tools. It is not medical advice,
            diagnosis, or treatment. Always consult a qualified professional before starting or
            changing exercise or diet programmes, especially if you have a medical condition,
            injury, or dietary restriction. You use training and nutrition information at your own
            risk.
          </p>

          <h2>8. Liability</h2>
          <p>
            Nothing in these Terms excludes or limits liability that cannot be excluded under
            applicable UK law, including for death or personal injury caused by negligence, or for
            fraud. Subject to that, to the fullest extent permitted by law:
          </p>
          <ul>
            <li>The service is provided on an “as is” and “as available” basis.</li>
            <li>
              We are not liable for indirect or consequential losses, or for losses arising from
              training or nutrition decisions you make.
            </li>
            <li>
              Our total liability for claims relating to the service is limited to the amounts you
              paid for VOLUME subscriptions in the 12 months before the claim (or another amount
              confirmed by counsel).
            </li>
          </ul>
          <p className="confirm-note">
            Liability caps and consumer-law carve-outs must be reviewed by a solicitor before
            publication.
          </p>

          <h2>9. Privacy</h2>
          <p>
            Personal data is handled as described in our <Link to="/privacy">Privacy Policy</Link>.
          </p>

          <h2>10. Changes</h2>
          <p>
            We may update these Terms from time to time. Continued use after changes take effect
            constitutes acceptance of the updated Terms, except where local law requires otherwise.
          </p>

          <h2>11. Governing law</h2>
          <p>
            These Terms are governed by the laws of {siteConfig.company.jurisdiction}. Courts of{' '}
            {siteConfig.company.jurisdiction} have exclusive jurisdiction, without prejudice to
            mandatory consumer protections that apply where you live.
          </p>
          <p className="confirm-note">Confirm jurisdiction and venue with legal review.</p>

          <h2>12. Contact</h2>
          <p>
            Questions about these Terms:{' '}
            {supportHref ? (
              <a href={supportHref}>{siteConfig.supportEmail}</a>
            ) : (
              <span>
                <code>{siteConfig.supportEmail}</code> (placeholder)
              </span>
            )}
          </p>
        </div>
      </section>
    </>
  )
}

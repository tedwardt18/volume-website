import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { mailtoSupport, siteConfig } from '../config/site'

const faqs = [
  {
    q: 'How do I get started with VOLUME?',
    a: 'Download the iOS app, create your account, and set up your first training preferences. You can log workouts, nutrition, and bodyweight from there.',
  },
  {
    q: 'How do subscriptions and billing work?',
    a: 'Subscriptions and payments are handled through Apple. Manage or cancel renewals in your Apple ID subscriptions settings. VOLUME does not process card details directly.',
  },
  {
    q: 'Can I restore a purchase on a new device?',
    a: 'Yes — use Apple’s restore purchases flow while signed into the same Apple ID that bought the subscription.',
  },
  {
    q: 'How does workout and progression tracking work?',
    a: 'Log sets as you train. VOLUME uses your history to surface progression context and performance insights — including Performance Score where available.',
  },
  {
    q: 'Does VOLUME sync with Apple Health?',
    a: 'If you grant permission in-app, VOLUME may read or write permitted Health data. You can revoke access anytime in iOS Settings → Privacy & Security → Health.',
  },
  {
    q: 'How do I delete my account and data?',
    a: 'Use the in-app account deletion option where available, or email support to request deletion. See the Privacy Policy for retention and rights details.',
  },
] as const

export function Support() {
  const supportHref = mailtoSupport()

  return (
    <>
      <Seo
        title="Support"
        description="Get help with VOLUME: FAQs for accounts, subscriptions, tracking, Apple Health, and account deletion."
        path="/support"
      />

      <section className="page-hero">
        <div className="container">
          <p className="section-kicker">Support</p>
          <h1>We’re here to help</h1>
          <p>
            Welcome to VOLUME support. Browse common questions below, or contact us directly for
            account, subscription, and data requests.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container prose">
          <h2>Contact</h2>
          <div className="support-panel">
            <p>
              Email{' '}
              <a href={supportHref ?? `mailto:${siteConfig.supportEmail}`}>
                {siteConfig.supportEmail}
              </a>
              . We aim to respond as soon as we can.
            </p>
          </div>

          <h2>FAQs</h2>
          <div className="faq-list">
            {faqs.map((item) => (
              <details key={item.q} className="faq-item">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>

          <h2>Guidance</h2>
          <div className="guide-grid">
            <article className="guide-block">
              <h3>Accounts</h3>
              <p>
                Keep your sign-in details secure. If you lose access to your account email, contact
                support with enough detail to verify ownership.
              </p>
            </article>
            <article className="guide-block">
              <h3>Subscriptions</h3>
              <ul>
                <li>Purchase and renew through the App Store.</li>
                <li>Cancel anytime in Apple subscription settings.</li>
                <li>Refunds are handled under Apple’s policies.</li>
              </ul>
            </article>
            <article className="guide-block">
              <h3>Tracking</h3>
              <p>
                If sets, nutrition, or bodyweight entries look wrong, edit or re-log in-app first.
                Persistent sync issues should be reported to support with your device model and iOS
                version.
              </p>
            </article>
            <article className="guide-block">
              <h3>Account deletion</h3>
              <p>
                Request deletion in-app or via email. Related details are in the{' '}
                <Link to="/privacy">Privacy Policy</Link>.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}

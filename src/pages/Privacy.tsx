import { Seo } from '../components/Seo'
import { isPlaceholder, mailtoSupport, siteConfig } from '../config/site'

export function Privacy() {
  const supportHref = mailtoSupport()
  const contactLabel = isPlaceholder(siteConfig.supportEmail)
    ? 'the support email listed in site config once confirmed'
    : siteConfig.supportEmail

  return (
    <>
      <Seo
        title="Privacy Policy"
        description="Privacy Policy draft for VOLUME — how we handle account, workout, nutrition, bodyweight, and related data."
        path="/privacy"
      />

      <section className="page-hero">
        <div className="container">
          <p className="section-kicker">Legal</p>
          <h1>Privacy Policy</h1>
          <p>
            Draft for review. This policy describes how VOLUME may handle personal data in a fitness
            app context. Confirm company details, processors, and retention before publication.
          </p>
          <p className="confirm-note">
            Needs owner confirmation: legal entity name, address, support contact, data processors,
            retention periods, and any Apple Health / analytics specifics.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container prose">
          <p>
            <strong>Last updated:</strong> 20 November 2026 (draft)
          </p>
          <p>
            This Privacy Policy explains how{' '}
            {isPlaceholder(siteConfig.company.legalName)
              ? 'the operator of VOLUME'
              : siteConfig.company.legalName}{' '}
            (“we”, “us”) may collect, use, store, and share information when you use the VOLUME
            mobile application and related websites (including {siteConfig.domain}).
          </p>
          <p className="confirm-note">
            Company legal name currently set to:{' '}
            <code>{siteConfig.company.legalName}</code> — confirm before publish.
          </p>

          <h2>1. Information we may collect</h2>
          <p>Depending on how you use VOLUME, we may process:</p>
          <ul>
            <li>
              <strong>Account data</strong> — such as name/display name, email address, and
              authentication identifiers.
            </li>
            <li>
              <strong>Profile data</strong> — preferences, goals, units, and similar settings you
              provide.
            </li>
            <li>
              <strong>Workout data</strong> — exercises, sets, reps, load, session notes, PRs, and
              related training history.
            </li>
            <li>
              <strong>Nutrition data</strong> — foods, calories, macros, and related logs you enter.
            </li>
            <li>
              <strong>Bodyweight data</strong> — weigh-ins and trends you choose to track.
            </li>
            <li>
              <strong>Social data</strong> — content or activity you choose to share through social
              features, if enabled.
            </li>
            <li>
              <strong>Device and usage data</strong> — app version, device type, diagnostics, and
              approximate usage events needed to operate and improve the service.
            </li>
            <li>
              <strong>Apple Health data</strong> — only if you grant permission in iOS. Categories
              depend on what you allow in Health access prompts.
            </li>
            <li>
              <strong>Subscription data</strong> — purchase status and entitlements via Apple /
              RevenueCat (or equivalent). We do not receive your full payment card details.
            </li>
          </ul>
          <p className="confirm-note">
            Confirm exact HealthKit categories, analytics tools, and crash reporters actually used.
          </p>

          <h2>2. Why we use this information</h2>
          <ul>
            <li>Provide workout tracking, progression guidance, nutrition, and insights features.</li>
            <li>Maintain accounts, sync data, and personalise your experience.</li>
            <li>Process subscriptions and restore purchases.</li>
            <li>Respond to support requests and service notices.</li>
            <li>Improve reliability, security, and product quality.</li>
            <li>Comply with legal obligations where applicable.</li>
          </ul>

          <h2>3. Legal bases (UK GDPR)</h2>
          <p>
            Where UK GDPR applies, we rely on one or more of: performance of a contract, legitimate
            interests (such as securing and improving the service), consent (for example optional
            Health access or marketing if offered), and legal obligation.
          </p>
          <p className="confirm-note">
            Have counsel confirm the legal bases mapped to each processing activity.
          </p>

          <h2>4. How we store and protect data</h2>
          <p>
            We use appropriate technical and organisational measures designed to protect personal
            data against unauthorised access, loss, or alteration. No method of transmission or
            storage is perfectly secure; please use a strong unique password and keep your device
            updated.
          </p>
          <p className="confirm-note">
            Confirm hosting regions, encryption practices, and any SOC/ISO claims — do not publish
            certifications that are not true.
          </p>

          <h2>5. Sharing with third parties</h2>
          <p>We may share data with:</p>
          <ul>
            <li>Service providers who help us host, analyse, or operate the app (under contract).</li>
            <li>Apple for App Store purchases and related platform services.</li>
            <li>RevenueCat (or similar) for subscription entitlement management.</li>
            <li>Authorities when required by law.</li>
          </ul>
          <p>We do not sell your personal data.</p>
          <p className="confirm-note">
            List the real processors (hosting, auth, analytics, RevenueCat, email) before go-live.
          </p>

          <h2>6. International transfers</h2>
          <p>
            If data is processed outside the UK, we take steps intended to ensure appropriate
            safeguards (such as standard contractual clauses) where required.
          </p>
          <p className="confirm-note">Confirm transfer mechanisms with legal review.</p>

          <h2>7. Retention</h2>
          <p>
            We retain personal data only as long as needed for the purposes above, including to
            maintain your account, provide history features, resolve disputes, and meet legal
            requirements. When you delete your account, we delete or anonymise personal data within
            a reasonable period unless law requires longer retention.
          </p>
          <p className="confirm-note">Replace with specific retention periods once confirmed.</p>

          <h2>8. Your rights</h2>
          <p>Subject to UK law, you may have rights to:</p>
          <ul>
            <li>Access, correct, or delete personal data</li>
            <li>Restrict or object to certain processing</li>
            <li>Data portability</li>
            <li>Withdraw consent where processing is consent-based</li>
            <li>Complain to the ICO (ico.org.uk)</li>
          </ul>

          <h2>9. Account and data deletion</h2>
          <p>
            You can request account deletion in-app (where available) or by contacting {contactLabel}
            . Deletion removes or anonymises account-linked personal data subject to legal retention
            needs.
          </p>

          <h2>10. Children</h2>
          <p>
            VOLUME is not directed at children under 16 (or the digital consent age in your
            jurisdiction). We do not knowingly collect their personal data.
          </p>
          <p className="confirm-note">Confirm minimum age and App Store age rating alignment.</p>

          <h2>11. Changes</h2>
          <p>
            We may update this policy from time to time. Material changes will be indicated by
            updating the “Last updated” date and, where appropriate, in-app or email notice.
          </p>

          <h2>12. Contact</h2>
          <p>
            Privacy questions:{' '}
            {supportHref ? (
              <a href={supportHref}>{siteConfig.supportEmail}</a>
            ) : (
              <span>
                <code>{siteConfig.supportEmail}</code> (placeholder)
              </span>
            )}
          </p>
          {!isPlaceholder(siteConfig.company.address) ? (
            <p>Postal: {siteConfig.company.address}</p>
          ) : (
            <p className="confirm-note">
              Postal / registered address placeholder: {siteConfig.company.address}
            </p>
          )}
        </div>
      </section>
    </>
  )
}

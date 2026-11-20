import { Seo } from '../components/Seo'
import { mailtoSupport, siteConfig } from '../config/site'

export function Privacy() {
  const supportHref = mailtoSupport()
  const supportEmail = siteConfig.supportEmail

  return (
    <>
      <Seo
        title="Privacy Policy"
        description="Privacy Policy for Volume — what information the app handles, why, who receives it, and the choices you have."
        path="/privacy"
      />

      <section className="page-hero">
        <div className="container">
          <p className="section-kicker">Legal</p>
          <h1>Privacy Policy</h1>
          <p>
            Volume is a strength-training and nutrition tracker. This policy explains what
            information the app handles, why, who receives it, and the choices you have.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container prose">
          <p>
            <strong>Effective date:</strong> 20 November 2026
          </p>
          <p>
            <strong>Contact:</strong>{' '}
            {supportHref ? (
              <a href={supportHref}>{supportEmail}</a>
            ) : (
              <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
            )}
          </p>
          <p>
            Volume (“the app”, “we”) is a strength-training and nutrition tracker. This policy
            explains what information the app handles, why, who receives it, and the choices you
            have.
          </p>

          <h2>1. Information we collect</h2>
          <p>
            <strong>Account information.</strong> When you create an account we receive your email
            address (or, with Sign in with Apple or Google, the identifier and email that provider
            shares with us) and your chosen username. Passwords are handled by our authentication
            provider and we never see them in readable form.
          </p>
          <p>
            <strong>Profile information.</strong> Name, username, date of birth, sex, height,
            weight, and the calorie and macro targets Volume calculates from them. You enter these
            during onboarding or in your profile.
          </p>
          <p>
            <strong>Training data.</strong> Workouts (exercises, sets, reps, weights, duration,
            volume, effort), saved programs, and personal records.
          </p>
          <p>
            <strong>Nutrition data.</strong> Food diary entries (food name, brand, barcode, meal,
            calories, protein, carbohydrates, fat and other nutrients) and your saved recipes.
          </p>
          <p>
            <strong>Body measurements.</strong> Body-weight logs and the measurements you record.
          </p>
          <p>
            <strong>Community content.</strong> If you share a workout to the community feed, the
            post (workout summary, volume, personal-record flag, and visibility setting of public,
            friends, or private), your profile photo, who you follow, and any reports or blocks you
            create.
          </p>
          <p>
            <strong>Photos.</strong> Your profile photo is uploaded to our storage so other people
            can see it according to your settings. Progress photos are kept on your phone and are
            not uploaded.
          </p>
          <p>
            <strong>Apple Health data.</strong> With your permission, Volume reads your step count
            and sleep from Apple Health. This data is read on your phone and is not uploaded to our
            servers. Volume does not write data to Apple Health.
          </p>
          <p>
            <strong>Camera.</strong> The camera is used to scan food barcodes and, if you choose, to
            take a story or profile photo. Images taken for barcode scanning are processed on your
            phone.
          </p>
          <p>
            <strong>Notifications.</strong> If you allow notifications, we store a push-notification
            token for your device so the app can send you alerts such as rest-timer reminders and
            friends&apos; personal records.
          </p>
          <p>
            <strong>Purchase information.</strong> If you subscribe to Volume Pro, the App Store or
            Google Play processes your payment. We and our purchase provider receive your
            subscription status and an anonymous purchase identifier. We do not receive your payment
            card details.
          </p>
          <p>
            <strong>Device and technical data.</strong> Our service providers may receive technical
            data such as IP address, device type, and operating system version when the app connects
            to their servers.
          </p>
          <p>
            Volume does not use advertising identifiers and does not include third-party advertising
            or analytics tracking.
          </p>

          <h2>2. How we use information</h2>
          <ul>
            <li>
              To provide the app: sign you in, sync your data across your sessions, calculate your
              targets, and show your history.
            </li>
            <li>
              To run the community features you choose to use: posts, following, and notifications.
            </li>
            <li>To process and verify subscriptions and unlock Pro features.</li>
            <li>
              To keep the community safe: review reports, remove content that breaks our rules, and
              act on blocks.
            </li>
            <li>
              To maintain, secure, and improve the app, and to respond to support requests.
            </li>
            <li>To comply with legal obligations.</li>
          </ul>

          <h2>3. Who receives information</h2>
          <p>We share information only with service providers that run the app for us:</p>
          <div className="prose-table-wrap">
            <table className="prose-table">
              <thead>
                <tr>
                  <th scope="col">Provider</th>
                  <th scope="col">Purpose</th>
                  <th scope="col">Data involved</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Supabase</td>
                  <td>Authentication, database, and file storage</td>
                  <td>
                    Account, profile, training, nutrition, body, community, and profile-photo data
                  </td>
                </tr>
                <tr>
                  <td>RevenueCat</td>
                  <td>Subscription management</td>
                  <td>Anonymous purchase identifier and subscription status</td>
                </tr>
                <tr>
                  <td>
                    Apple (App Store, Sign in with Apple) and Google (Google Play, Google sign-in)
                  </td>
                  <td>Payments and sign-in</td>
                  <td>Purchase records and sign-in identity, under their own policies</td>
                </tr>
                <tr>
                  <td>Expo (Expo Push Service and EAS Update)</td>
                  <td>Push notifications and app updates</td>
                  <td>Push token and update requests</td>
                </tr>
                <tr>
                  <td>Open Food Facts</td>
                  <td>Food and barcode lookup</td>
                  <td>The search text or barcode you look up</td>
                </tr>
                <tr>
                  <td>Resend</td>
                  <td>Sending account emails such as verification and password reset</td>
                  <td>Your email address and the email content</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Your profile, community posts, and profile photo are visible to other users according to
            the visibility you choose (public, friends, or private). Anything you set to public can
            be seen by any Volume user.
          </p>
          <p>
            We do not sell your personal information and we do not share it for advertising.
          </p>
          <p>
            We may disclose information if the law requires it or to protect the safety and rights
            of users and the public.
          </p>

          <h2>4. Where data is stored and how long we keep it</h2>
          <p>
            Data is stored with Supabase and is protected by access rules that limit each
            account&apos;s private data to that account. We keep your data while your account is
            active. When you delete your account, we delete your profile, training, nutrition, body,
            community, and photo data and revoke your Sign in with Apple link where one exists.
            Backups and logs held by our providers may persist for a limited period before they are
            overwritten. Reports about content may be retained as needed to enforce our community
            rules and meet legal obligations.
          </p>

          <h2>5. Your choices and rights</h2>
          <ul>
            <li>
              <strong>Access and edit:</strong> you can view and edit your profile and logs in the
              app.
            </li>
            <li>
              <strong>Delete your account:</strong> open Settings and choose Delete account. This
              removes your data as described in section 4.
            </li>
            <li>
              <strong>Control visibility:</strong> set each post to public, friends, or private.
            </li>
            <li>
              <strong>Block and report:</strong> you can block users and report posts or users from
              the post menu.
            </li>
            <li>
              <strong>Permissions:</strong> you can turn off camera, photos, notifications, and
              Apple Health access at any time in your device settings.
            </li>
            <li>
              <strong>Email us:</strong> to ask about your data, request a copy, or request
              deletion, write to{' '}
              {supportHref ? (
                <a href={supportHref}>{supportEmail}</a>
              ) : (
                <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
              )}
              . Depending on where you live (for example the UK, the European Economic Area, or
              California), you may have rights to access, correct, delete, restrict, object to, or
              port your data, and to complain to your data-protection authority. We will respond
              within the time the law requires.
            </li>
          </ul>

          <h2>6. Health and fitness information</h2>
          <p>
            Volume provides training and nutrition tracking for general fitness. It is not a medical
            device and does not give medical advice. Talk to a qualified professional before
            starting a new exercise or nutrition programme. We do not use Apple Health data for
            advertising or share it with third parties.
          </p>

          <h2>7. Children</h2>
          <p>
            Volume is not directed to children under 13 (or the minimum age in your country, if
            higher). We do not knowingly collect data from them. If you believe a child has given us
            information, contact us and we will delete it.
          </p>

          <h2>8. Security</h2>
          <p>
            We use encrypted connections, account-based access rules, and trusted providers to
            protect your data. No system is completely secure, so we cannot guarantee absolute
            security.
          </p>

          <h2>9. International transfers</h2>
          <p>
            Our providers may process data in countries other than your own, including the United
            States. Where required, we rely on appropriate safeguards for those transfers.
          </p>

          <h2>10. Changes to this policy</h2>
          <p>
            We may update this policy. When we make material changes we will update the effective
            date above and, where appropriate, notify you in the app.
          </p>

          <h2>11. Contact</h2>
          <p>
            Questions, requests, or concerns:{' '}
            {supportHref ? (
              <a href={supportHref}>{supportEmail}</a>
            ) : (
              <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
            )}
          </p>
        </div>
      </section>
    </>
  )
}

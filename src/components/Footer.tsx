import { Link } from 'react-router-dom'
import { isPlaceholder, mailtoSupport, siteConfig } from '../config/site'
import { Logo } from './Logo'

const footerLinks = [
  { to: '/features', label: 'Features' },
  { to: '/support', label: 'Support' },
  { to: '/privacy', label: 'Privacy' },
  { to: '/terms', label: 'Terms' },
] as const

export function Footer() {
  const supportHref = mailtoSupport()
  const socialEntries = Object.entries(siteConfig.social).filter(([, url]) => !isPlaceholder(url))

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <Logo />
          <p>{siteConfig.brand.shortDescription}</p>
        </div>

        <nav className="site-footer__nav" aria-label="Footer">
          {footerLinks.map((link) => (
            <Link key={link.to} to={link.to}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="site-footer__meta">
          {supportHref ? (
            <a href={supportHref}>Contact: {siteConfig.supportEmail}</a>
          ) : (
            <p className="confirm-note">
              Support email pending confirmation — contact link will appear here once set in{' '}
              <code>src/config/site.ts</code>.
            </p>
          )}

          {socialEntries.length > 0 ? (
            <ul className="site-footer__social">
              {socialEntries.map(([name, url]) => (
                <li key={name}>
                  <a href={url} rel="noopener noreferrer" target="_blank">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="confirm-note">Social links are placeholders until confirmed.</p>
          )}
        </div>
      </div>

      <div className="container site-footer__bottom">
        <p>
          © {siteConfig.copyrightYear}{' '}
          {isPlaceholder(siteConfig.company.legalName)
            ? siteConfig.brand.name
            : siteConfig.company.legalName}
          . All rights reserved.
        </p>
      </div>
    </footer>
  )
}

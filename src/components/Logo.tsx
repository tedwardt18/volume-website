import { Link } from 'react-router-dom'
import { siteConfig } from '../config/site'

type LogoProps = {
  compact?: boolean
  to?: string
}

export function Logo({ compact = false, to = '/' }: LogoProps) {
  return (
    <Link to={to} className={`brand-logo${compact ? ' brand-logo--compact' : ''}`} aria-label={`${siteConfig.brand.name} home`}>
      <span className="brand-mark" aria-hidden="true">
        <span className="brand-mark__bar" />
        <span className="brand-mark__bar brand-mark__bar--accent" />
        <span className="brand-mark__bar" />
      </span>
      <span className="brand-word">{siteConfig.brand.name}</span>
    </Link>
  )
}

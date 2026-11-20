import { appStoreHref, isPlaceholder, siteConfig } from '../config/site'

type DownloadButtonProps = {
  className?: string
  variant?: 'primary' | 'lime' | 'secondary'
  label?: string
  showNote?: boolean
}

export function DownloadButton({
  className = '',
  variant = 'primary',
  label = 'Download on the App Store',
  showNote = false,
}: DownloadButtonProps) {
  const href = appStoreHref()
  const ready = Boolean(href)
  const variantClass =
    variant === 'lime' ? 'btn-lime' : variant === 'secondary' ? 'btn-secondary' : 'btn-primary'

  return (
    <div className={`download-cta ${className}`.trim()}>
      {ready ? (
        <a className={`btn ${variantClass}`} href={href!} rel="noopener noreferrer" target="_blank">
          {variant === 'primary' ? <span className="btn-dot" aria-hidden="true" /> : null}
          {label}
        </a>
      ) : (
        <span
          className={`btn ${variantClass} is-disabled`}
          aria-disabled="true"
          title="App Store URL pending confirmation"
        >
          {variant === 'primary' ? <span className="btn-dot" aria-hidden="true" /> : null}
          {label}
        </span>
      )}
      {showNote && isPlaceholder(siteConfig.appStoreUrl) ? (
        <p className="confirm-note">
          App Store URL is a placeholder — confirm the live listing before go-live.
        </p>
      ) : null}
    </div>
  )
}

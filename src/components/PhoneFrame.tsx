import type { ReactNode } from 'react'

type PhoneFrameProps = {
  children: ReactNode
  className?: string
  label?: string
  float?: boolean
}

export function PhoneFrame({ children, className = '', label, float = false }: PhoneFrameProps) {
  return (
    <figure className={`phone-frame${float ? ' phone-float' : ''} ${className}`.trim()}>
      <div className="phone-frame__shell" role="img" aria-label={label ?? 'VOLUME app on iPhone'}>
        <div className="phone-frame__notch" aria-hidden="true" />
        <div className="phone-frame__screen">{children}</div>
      </div>
      {label ? <figcaption className="visually-hidden">{label}</figcaption> : null}
    </figure>
  )
}

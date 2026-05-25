import { useState } from 'react'
import { Leaf } from 'lucide-react'

// Renders a remote image; if it fails to load, falls back to a
// premium themed gradient tile so the UI never shows a broken image.
export default function SmartImage({
  src,
  alt,
  caption,
  icon: Icon = Leaf,
  className = '',
  imgClassName = '',
  loading = 'lazy',
}) {
  const [failed, setFailed] = useState(false)

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!failed && (
        <img
          src={src}
          alt={alt}
          loading={loading}
          decoding="async"
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover ${imgClassName}`}
        />
      )}
      {failed && (
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-forest-700 via-leaf-600 to-forest-800 p-6 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
            <Icon className="h-7 w-7 text-gold-400" strokeWidth={1.8} />
          </div>
          {caption && <p className="text-sm font-medium text-white/85">{caption}</p>}
        </div>
      )}
    </div>
  )
}

import { motion } from 'framer-motion'

const VARIANTS = {
  primary:
    'bg-gradient-to-r from-gold-500 to-gold-400 text-forest-900 shadow-soft hover:shadow-card',
  solid:
    'bg-leaf-500 text-white shadow-soft hover:bg-leaf-600',
  dark: 'bg-forest-700 text-white hover:bg-forest-800',
  whatsapp: 'bg-[#25D366] text-white hover:bg-[#1ebe5a] shadow-soft',
  outline:
    'border border-forest-700/25 bg-white/70 text-forest-800 backdrop-blur hover:border-leaf-500 hover:text-leaf-600',
  outlineLight:
    'border border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white/20',
  ghost: 'text-forest-800 hover:bg-forest-700/5',
}

const SIZES = {
  sm: 'px-3.5 py-2 text-[13px]',
  md: 'px-4 py-2 text-[13px] sm:px-5 sm:py-2.5 sm:text-sm',
  lg: 'px-5 py-2.5 text-sm sm:px-7 sm:py-3.5 sm:text-base',
}

export default function Button({
  as = 'button',
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconRight = false,
  className = '',
  children,
  ...props
}) {
  const Comp = motion[as] || motion.button
  return (
    <Comp
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className={`group inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-leaf-500/60 focus-visible:ring-offset-2 ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
      {...props}
    >
      {Icon && !iconRight && <Icon className="h-[1.1em] w-[1.1em]" strokeWidth={2.4} />}
      {children}
      {Icon && iconRight && <Icon className="h-[1.1em] w-[1.1em] transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2.4} />}
    </Comp>
  )
}

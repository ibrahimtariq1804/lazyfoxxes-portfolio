// Button action interface
export interface ButtonAction {
  label: string
  href: string
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
}

// Hero component props
export interface HeroProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  gradient?: boolean
  blur?: boolean
  title?: React.ReactNode
  subtitle?: React.ReactNode
  actions?: ButtonAction[]
  titleClassName?: string
  subtitleClassName?: string
  actionsClassName?: string
}

// Project interface
export interface Project {
  title: string
  image: string
  tags: string[]
  description?: string
}

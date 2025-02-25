import React from 'react'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { cn } from '@/utilities/cn'
import Link from 'next/link'

interface MenuItemProps {
  title: string | null | undefined
  hasMegaMenu: boolean
  isActive: boolean
  onClick: () => void
  isMobile: boolean
  href?: string
  className?: string
}

export const MenuItem = ({
  title,
  hasMegaMenu,
  isActive,
  onClick,
  isMobile,
  href,
  className,
}: MenuItemProps) => {
  if (href && href !== '#') {
    return (
      <div
        onClick={onClick}
        className={cn(
          'hover:text-emerald-600 flex items-center gap-1 transition-colors duration-200',
          isActive && 'text-emerald-600',
          className,
        )}
        style={isMobile ? { marginTop: '2rem' } : {}}
      >
        <Link href={href}>
          {title && <span dangerouslySetInnerHTML={{ __html: title }}></span>}
          {hasMegaMenu && isMobile && (
            <ArrowRight
              className={cn('h-6 w-6 transition-transform duration-200', isActive && 'rotate-180')}
            />
          )}
          {hasMegaMenu && !isMobile && (
            <ChevronDown
              className={cn('h-4 w-4 transition-transform duration-200', isActive && 'rotate-180')}
            />
          )}
        </Link>
      </div>
    )
  } else {
    return (
      <div
        onClick={onClick}
        className={cn(
          'hover:text-emerald-600 flex items-center gap-1 transition-colors duration-200',
          isActive && 'text-emerald-600',
          className,
        )}
      >
        {title && <span dangerouslySetInnerHTML={{ __html: title }}></span>}
        {hasMegaMenu && isMobile && (
          <ArrowRight
            className={cn('h-6 w-6 transition-transform duration-200', isActive && 'rotate-180')}
          />
        )}
        {hasMegaMenu && !isMobile && (
          <ChevronDown
            className={cn('h-4 w-4 transition-transform duration-200', isActive && 'rotate-180')}
          />
        )}
      </div>
    )
  }
}

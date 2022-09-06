import React, { useState } from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

interface NavLink {
  i18nKey: string
  href: string
}

const NavLinks: NavLink[] = [
  {
    i18nKey: 'deposit',
    href: '/deposit'
  },
  {
    i18nKey: 'prizes',
    href: '/prizes'
  },
  {
    i18nKey: 'account',
    href: '/account'
  }
]

export const Navigation: React.FC<{ className?: string }> = (props) => {
  const { className } = props

  const router = useRouter()

  return (
    <div
      className={classNames(
        className,
        'z-3',
        'flex flex-row justify-center',
        'pointer-events-none',
        'transition fixed bottom-0 top-auto xs:bottom-auto xs:top-1 sm:top-2 inset-x-0 xs:left-12 xs:right-auto sm:inset-x-0'
      )}
    >
      <nav
        className={classNames(
          className,
          'flex flex-row justify-center space-x-4 w-full xs:w-auto pointer-events-auto pt-2 pb-8 px-5',
          'dark:bg-actually-black bg-opacity-10 bg-white dark:bg-opacity-10 xs:bg-opacity-0 xs:dark:bg-opacity-0 shadow-lg xs:shadow-none rounded-t-xl p-1 backdrop-filter backdrop-blur-xl xs:backdrop-blur-none'
        )}
      >
        {NavLinks.map((navLink) => (
          <NavTab
            key={navLink.i18nKey}
            isSelected={navLink.href === router.pathname}
            {...navLink}
          />
        ))}
      </nav>
    </div>
  )
}

interface NavTabProps extends NavLink {
  isSelected: boolean
}

const NavTab = (props: NavTabProps) => {
  const { isSelected, i18nKey, href } = props
  const { t } = useTranslation()
  const router = useRouter()

  return (
    <Link
      href={{
        pathname: href,
        query: router.query
      }}
    >
      <a
        className={classNames(
          'group transition mx-1 first:ml-0 last:mr-0 rounded-lg flex flex-col',
          'text-lg xs:text-xs font-bold text-inverse tracking-tight cursor-pointer'
        )}
      >
        <span className={classNames({ 'opacity-80 hover:opacity-100': !isSelected })}>
          {t(i18nKey)}
        </span>
        <div
          className={classNames(
            'h-0.5 rounded-full w-1/3 mx-auto dark:group-hover:bg-white dark:group-hover:bg-opacity-10 group-hover:bg-actually-black group-hover:bg-opacity-10',
            {
              'bg-gradient-magenta': isSelected,
              'bg-transparent': !isSelected
            }
          )}
        />
      </a>
    </Link>
  )
}

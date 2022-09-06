import React from 'react'
import FeatherIcon from 'feather-icons-react'
import { useTranslation } from 'react-i18next'

export function ErrorPage() {
  const { t } = useTranslation()

  return (
    <>
      <div
        className='flex flex-col w-full'
        style={{
          minHeight: '100vh'
        }}
      >
        <div className='content mx-auto px-8'>
          <div className='mb-4 text-inverse pt-32 xs:pt-32 space-y-4'>
            <h1 className=''>👋</h1>
            <h4 className='dark:text-white'>{t('anErrorOccurredAndWeveBeenNotified')}</h4>
            <h6 className='text-accent-1'>{t('pleaseTryAgainSoon')}</h6>
            <ErrorLinks />

            <div>
              {t('stillHavingProblems', 'Still having problems?')}{' '}
              <button
                className='font-semibold text-pt-red-light transition-colors hover:text-pt-red'
                onClick={() => {
                  if (
                    window.confirm(
                      t(
                        'clearingStorageWarning',
                        'Continuing will clear the websites storage in your browser. This DOES NOT have any effect on your deposits.'
                      )
                    )
                  ) {
                    localStorage.clear()
                    window.location.reload()
                  }
                }}
              >
                {t('tryClearingLocalStorage', 'Try clearing local storage')}.
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const ERROR_LINKS = Object.freeze([
  {
    i18nKey: 'home',
    href: 'https://pooltogether.com'
  },
  {
    i18nKey: 'app',
    href: 'https://app.pooltogether.com'
  },
  {
    i18nKey: 'forum',
    href: 'https://gov.pooltogether.com'
  },
  {
    i18nKey: 'userGuide',
    href: 'https://docs.pooltogether.com'
  },
  {
    title: 'Docs',
    href: 'https://dev.pooltogether.com'
  },
  { title: 'Discord', href: 'https://pooltogether.com/discord' }
])

export const ErrorLinks = () => {
  const { t } = useTranslation()
  return (
    <div className='flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-8'>
      {ERROR_LINKS.map((link) => (
        <a
          key={link.href}
          target='_blank'
          rel='noreferrer'
          href={link.href}
          className='flex hover:opacity-70 transition-opacity'
        >
          {link.i18nKey && t(link.i18nKey)}
          {link.title}
          <FeatherIcon icon={'external-link'} className='w-4 h-4 ml-2 my-auto' />
        </a>
      ))}
    </div>
  )
}

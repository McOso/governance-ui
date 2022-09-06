import FeatherIcon from 'feather-icons-react'
import React, { useState } from 'react'
import Link from 'next/link'
import {
  LanguagePickerDropdown,
  PageHeaderContainer,
  SettingsContainer,
  SettingsItem,
  TestnetSettingsItem,
  FeatureRequestSettingsItem,
  ThemeSettingsItem,
  SocialLinks,
  Modal,
  NetworkIcon
} from '@pooltogether/react-components'
import { useTranslation } from 'react-i18next'
import { FullWalletConnectionButtonWrapper } from './FullWalletConnectionButtonWrapper'
import { SUPPORTED_LANGUAGES } from '../../languages'

export enum ContentPaneState {
  deposit = 'deposit',
  prizes = 'prizes',
  account = 'account'
}

export const PageHeader = (props) => {
  return (
    <PageHeaderContainer
      href='/'
      maxWidthClassName='max-w-screen-sm'
      className='backdrop-filter backdrop-blur-xl w-full sticky top-0'
    >
      <div className='flex flex-row justify-end items-center space-x-4'>
        <FullWalletConnectionButtonWrapper />
        <Settings />
      </div>
    </PageHeaderContainer>
  )
}

const Settings = () => {
  const { t } = useTranslation()

  return (
    <SettingsContainer t={t} className='ml-1 my-auto' sizeClassName='w-6 h-6 overflow-hidden'>
      <div className='flex flex-col justify-between h-full sm:h-auto'>
        <div>
          <LanguagePicker />
          <ThemeSettingsItem t={t} />
          <TestnetSettingsItem t={t} />
          <FeatureRequestSettingsItem t={t} />
          <ClearLocalStorageSettingsItem />
        </div>
        <div className='sm:pt-24 pb-4 sm:pb-0'>
          <SocialLinks t={t} />
        </div>
      </div>
    </SettingsContainer>
  )
}

const LanguagePicker = () => {
  const { i18n: i18next, t } = useTranslation()
  const [currentLang, setCurrentLang] = useState(i18next.language)
  return (
    <SettingsItem label={t('language')}>
      <LanguagePickerDropdown
        langs={SUPPORTED_LANGUAGES}
        className='dark:text-white'
        currentLang={currentLang}
        changeLang={(newLang) => {
          setCurrentLang(newLang)
          i18next.changeLanguage(newLang)
        }}
      />
    </SettingsItem>
  )
}

const ClearLocalStorageSettingsItem = () => {
  const { t } = useTranslation()
  return (
    <SettingsItem label={t('clearStorage', 'Clear storage')}>
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
        {t('clear', 'Clear')}
      </button>
    </SettingsItem>
  )
}

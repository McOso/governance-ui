import { FullWalletConnectionButton } from '@pooltogether/wallet-connection'
import { Trans } from 'react-i18next'

import { useSupportedNetworks } from '../../hooks/useSupportedNetworks'

/**
 * NOTE: Only render one per app
 * @param props
 * @returns
 */
export const FullWalletConnectionButtonWrapper = (props) => {
  const chains = useSupportedNetworks()

  return <FullWalletConnectionButton {...props} chains={chains} TosDisclaimer={<TosDisclaimer />} />
}

export const TosDisclaimer = () => (
  <Trans
    i18nKey='connectWalletTermsAndDisclaimerBlurb'
    components={{
      termsLink: (
        <a
          className='text-pt-teal transition hover:opacity-70 underline'
          href='https://pooltogether.com/terms/'
          target='_blank'
          rel='noreferrer'
        />
      ),
      disclaimerLink: (
        <a
          className='text-pt-teal transition hover:opacity-70 underline'
          href='https://pooltogether.com/protocol-disclaimer/'
          target='_blank'
          rel='noreferrer'
        />
      )
    }}
  />
)

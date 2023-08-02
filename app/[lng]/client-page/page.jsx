'use client'

import Link from 'next/link'
import { useTranslation } from '../../i18n/client'
import { useState } from 'react'
import TransitionEffect from '../components/TransitionEffect'

export default function Page({ params: { lng } }) {
  const { t } = useTranslation(lng, 'client-page')

  return (
    <>
      <TransitionEffect />
      <main>
    

        <Link href={`/${lng}/second-client-page`}>
          {t('to-second-client-page')}
        </Link>
        <Link href={`/${lng}`}>
          <button type="button">
            {t('back-to-home')}
          </button>
        </Link>
      </main>

    </>
  )
}
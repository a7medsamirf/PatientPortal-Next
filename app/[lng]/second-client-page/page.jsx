'use server'

import Link from 'next/link'
import { useTranslation } from '../../i18n/client'

import TransitionEffect from '../components/TransitionEffect'

export default function Page({ params: { lng } }) {
  const { t } = useTranslation(lng, 'second-client-page')
  return (
    <>
    <TransitionEffect />
      <main>
        <Link href={`/${lng}`}>
          <button type="button">
            {t('back-to-home')}
          </button>
        </Link>
      </main>

    </>
  )
}
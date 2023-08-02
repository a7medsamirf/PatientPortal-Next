'use server'
import Link from 'next/link'
import { useTranslation } from '../../i18n'

import TransitionEffect from '../components/TransitionEffect'

export async function generateMetadata({ params: { lng } }) {
  const { t } = await useTranslation(lng, 'second-page')
  return { title: t('h1') }
}

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng, 'second-page')
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
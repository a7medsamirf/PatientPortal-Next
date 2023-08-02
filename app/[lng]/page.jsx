import Link from 'next/link'
import { Trans } from 'react-i18next/TransWithoutContext'
import { languages, fallbackLng } from '../i18n/settings'
import { useTranslation } from '../i18n'
import TransitionEffect from './components/TransitionEffect'

/* import { Header } from "./components/Header"; */

export async function generateMetadata({ params: { lng } }) {
  const { t } = await useTranslation(lng)
  return { title: t('h1') }
}

export default async function Home({ params: { lng } }) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = await useTranslation(lng)

  return (
    <>
{/*        <Header /> */}
    <TransitionEffect />
      <main>
        <h2 className='text-dark dark:text-light'>
          <Trans t={t} i18nKey="welcome">
            Welcome to Next.js v13 <small>appDir</small> and i18next
          </Trans>
        </h2>
        
        <div className="inline-block text-dark dark:text-light
      text-8xl font-bold w-full capitalize  mb-16 !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 xl:text-6xl">Hello world!</div>



        <div>
     

          <Link href={`/${lng}/second-page`}>
            <button type="button">{t('to-second-page')}</button>
          </Link>
          <Link href={`/${lng}/client-page`}>
            <button type="button">{t('to-client-page')}</button>
          </Link>
          <Link href={`/${lng}/test`}>
            <button type="button">test</button>
          </Link>
        </div>
        
      </main>



    </>
  )
}

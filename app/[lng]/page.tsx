import Link from 'next/link'
import { languages, fallbackLng } from '../i18n/settings'
import { useTranslation } from '../i18n'
import { Footer } from './components/Footer'

interface Params {
  lng: string;
}
export const FooterBase = ({ t, lng, path = '' }) => {
export default async function Page({ params: { lng } }: { params: Params }) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = await useTranslation(lng)

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">

        <div>
        <Link href={`/${lng}/`} className="flex items-center">{t('to-home-page')}</Link>
        <Link href={`/${lng}/about`} className="flex items-center">{t('to-about-page')}</Link>
        <Link href={`/${lng}/posts`} className="flex items-center">{t('to-posts-page')}</Link>
        </div>
      </main>
      <Footer lng={lng} path="/client-page" />
    </>
  )
}

import { useTranslation } from '../../../i18n'
import { HeaderBase } from './HeaderBase'

export const Footer = async ({ lng, path }) => {
  const { t } = await useTranslation(lng, 'Header')
  return <HeaderBase t={t} lng={lng} path={path} />
}

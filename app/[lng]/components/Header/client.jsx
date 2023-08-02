'use client'
import { HeaderBase } from './HeaderBase'
import { useTranslation } from '../../../i18n/client'

export const Footer = ({ lng, path }) => {
  const { t } = useTranslation(lng, 'Header')
  return <HeaderBase t={t} lng={lng} path={path} />
}

import { Typography } from "@material-tailwind/react"
import Link from "next/link"
import { languages } from '../../i18n/settings'

export const NavLink = ({ t, lng, path = '' }) => {
    return (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <Link href={`/${lng}/`} className="flex items-center">

                {t('to-home-page')}
                
                </Link>
            </Typography>

            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <Link href={`/${lng}/about`} className="flex items-center">

                {t('to-about-page')}
                </Link>
            </Typography>

            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <Link href={`/${lng}/posts`} className="flex items-center">

                {t('to-posts-page')}
                </Link>
            </Typography>

        </ul>


    
    )
}


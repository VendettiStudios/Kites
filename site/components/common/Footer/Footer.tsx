// needs work

import { FC } from 'react'
import cn from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import s from './Footer.module.css'
import Container from '@components/ui/Container/Container'

interface Props {
    className?: string
    children?: any
}

const links = [
    {
        name: 'Home',
        url: '/',
    },
]

const Footer: FC<Props> = ({ className }) => {
    const rootClassName = cn(s.root, className)

    return (
        <footer className={rootClassName}>
            <Container>
                <div className={s.container}>
                    <div className={s.container2}>
                        <Link
                            href="/"
                            className={s.link1}
                        >
                            <span className={s.logo}>
                            </span>
                            <span>Kites by Carla Manuel</span>
                        </Link>
                    </div>
                    <div className={s.container3}>
                        <div className={s.container4}>
                        </div>
                    </div>
                    <div className="col-span-1 lg:col-span-3 flex items-start lg:justify-end text-primary">
                        <div className="flex space-x-4 items-center h-10">
                            <a
                                className={s.link}
                                aria-label="Github Repository"
                                href="https://github.com/vercel/commerce"
                            >
                            </a>
                        </div>
                    </div>
                </div>
                <div className="pt-6 pb-10 flex flex-col md:flex-row justify-between items-center space-y-4 text-accent-6 text-sm">
                    <div>
                        <span>&copy; 2023 Kites by Carla Manuel, Inc. All rights reserved.</span>
                    </div>
                    <div className="flex items-center text-primary text-sm">
                        <span className="text-primary">Created by Daniel Holloway</span>
                        <a
                            rel="noopener noreferrer"
                            href="https://vercel.com"
                            aria-label="Vercel.com Link"
                            target="_blank"
                            className="text-primary"
                        >
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer

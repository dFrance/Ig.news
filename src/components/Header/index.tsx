import React from 'react';
import styles from './styles.module.scss'
import { SignInButton } from '../SigninButton'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ActiveLink } from '../ActiveLink';
import Image from 'next/image'


export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Image src="/images/logo.svg" alt="logo do ig.news" />
                <nav>
                    <ActiveLink activeClassName={styles.active} href="/">
                        <Link href={'/'}>
                            Home
                        </Link>
                    </ActiveLink>
                    <ActiveLink activeClassName={styles.active} href="/posts">
                        <Link href={'/posts'}>
                        Posts
                        </Link>
                    </ActiveLink>
                </nav>
                <SignInButton />
            </div>
        </header>
    );
}
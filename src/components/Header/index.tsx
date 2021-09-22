import React from 'react';
import styles from './styles.module.scss'
import { SignInButton } from '../SigninButton'
import Link from 'next/link'
import {useRouter} from 'next/router'
import { ActiveLink } from '../ActiveLink';


export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <a href="/">
                    <img src="/images/logo.svg" alt="logo do ig.news" />
                </a>
                <nav>
                    <ActiveLink activeClassName={styles.active} href="/">
                        <a>
                            Home
                        </a>
                    </ActiveLink>
                    <ActiveLink activeClassName={styles.active} href="/posts">
                        <a>
                            Posts
                        </a>
                    </ActiveLink>
                </nav>
                <SignInButton />
            </div>
        </header>
    );
}
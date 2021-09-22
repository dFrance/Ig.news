import { FaGithub } from 'react-icons/fa'
import {FiX} from 'react-icons/fi'
import styles from './styles.module.scss'
import { useState } from 'react';
import { signIn, signOut, useSession } from 'next-auth/client'


export function SignInButton() {
    const [session] = useSession();

    return session ? (
        <button
        className={styles.signInButton}>
            <FaGithub color="#04d361" />
            {session.user.name}
            <FiX onClick={() => signOut()} color="#737380" className={styles.closeIcon} />
        </button>
    ) : (
        <button
        onClick={() => signIn('github')}
        className={styles.signInButton}>
            <FaGithub color="#eba417" />
            Sign-in with GitHub
        </button>
    )
}
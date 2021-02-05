import Link from "next/link";
import {SearchIcon} from './icons/SearchIcon'
import Image from 'next/image';
import styles from '../styles/Header.module.css'

export function MainLayout({ children }) {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.wrapper}>
                    <div className={styles.header_wrapper}>
                        <nav className={styles.nav_bar}>
                            <ul className={styles.header_list}>
                                <li className={styles.header_item}>
                                    <Link href={'#!'}><a className={styles.header_link}>About</a></Link>
                                </li>
                                <li className={styles.header_item2}>
                                    <Link href={'#!'}><a className={styles.header_link}>Contact</a></Link>
                                </li>
                                <li className={styles.header_item_center}>
                                    <div className={styles.header_center}><Link href={'/'}>
                                        <a className={styles.header_link}>Camping.</a></Link></div>
                                </li>
                                <li className={styles.header_item}>
                                    <Link href={'#!'}><a className={styles.header_link}>Sign In</a></Link>
                                </li>
                                <li className={styles.header_item3}>
                                    <Link href={'#!'}><a className={styles.header_link}>Sign Up</a></Link>
                                </li>
                                <li className={styles.header_link_icon}>
                                    <Link href={'#!'}><a className={styles.header_link}><SearchIcon/></a></Link>
                                </li>
                            </ul>
                            <div className={styles.header_border}/>
                        </nav>
                    </div>
                </div>
            </header>
            <main>
                { children }
            </main>
        </>
    )
}

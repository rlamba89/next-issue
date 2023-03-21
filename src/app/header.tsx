'use client';

import Link from "next/link";
import { useState } from "react";
import styles from './header.module.css'


export default function Header() {
    const [isMobileMenuOpen, setActive] = useState(false);

    const ToggleClass = () => {
        setActive(!isMobileMenuOpen);
    }

    return (
        <>
            <header className={styles.header}>
                <div className="container d-flex align-items-center justify-content-between">
                    <h1 className={styles.logo}>
                        <Link href="#">

                        </Link>
                    </h1>
                    <nav className={styles.navbar + " " + (isMobileMenuOpen ? styles.navbarmobile : "")}>
                        <ul>
                            <li>
                                <Link href="#link1" className={styles.active} scroll={false}>Link 1</Link>
                            </li>
                            <li>
                                <Link href="#link2" scroll={false}>Link 2</Link>
                            </li>
                            <li>
                                <Link href="#link3" scroll={false}>Link 3</Link>
                            </li>
                            <li>
                                <Link href="#link4" scroll={false}>Link 4</Link>
                            </li>
                            <li>
                                <Link href="/book-a-demo-session" scroll={false}>Redirect to Demo Page</Link>
                            </li>
                        </ul>
                        <i onClick={ToggleClass} className={styles.mobilenavtoggle}>
                            {
                                isMobileMenuOpen ?
                                    (<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className={styles.mobilenavcross} viewBox="0 0 16 16">
                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                    </svg>)
                                    : (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className={styles.mobilenavlist} viewBox="0 0 16 16">
                                            <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                                        </svg>
                                    )
                            }
                        </i>
                    </nav>
                </div>
            </header>
        </>
    )
}
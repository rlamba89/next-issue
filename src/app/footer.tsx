'use client';

import Link from 'next/link'
import styles from './footer.module.css'

export default function Footer() {

    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.footertop}>
                    <div className="container">
                        <div className="row">
                            <div className={`col-lg-3 col-md-6 ` + styles.footercontact}>
                                <h3>Dummy Text</h3>
                            </div>
                            <div className={`col-lg-2 col-md-6 ` + styles.footerlinks}>
                                <h4>Useful Links</h4>
                                <ul>
                                    <li>
                                        <i>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                            </svg>
                                        </i>
                                        <Link href="#link1">Link 1</Link>
                                    </li>
                                    <li>
                                        <i>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                            </svg>
                                        </i>
                                        <Link href="#link2">Link 2</Link>
                                    </li>
                                    <li> <i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                        </svg>
                                    </i>
                                        <Link href="#link3">Link 3</Link>
                                    </li>
                                    <li>
                                        <i>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                            </svg>
                                        </i>
                                        <Link href="#link4">Link 4</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
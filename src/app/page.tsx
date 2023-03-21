'use client';

import Link from 'next/link'
import styles from './page.module.css'
import { Poppins, Raleway, Open_Sans } from 'next/font/google';
import { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.json'
import Image from 'next/image';


const poppins = Poppins({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
})

const raleway = Raleway({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
})

const opensans = Open_Sans({
  weight: '600',
  subsets: ['latin'],
  display: 'swap',
})

const opensansnobold = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})


export default function Home() {
  return (
    <main className={styles.main}>
      <section id="link1">
        <div className="row">
          <Image src="/1.jpg" alt="test" width={1000} height={1000} />
        </div>
      </section>

      <section id="link2">
        <div className="row">
          <Image src="/2.jpg" alt="test" width={1000} height={1000} />
        </div>
      </section>

      <section id="link3">
        <div className="row">
          <Image src="/3.jpg" alt="test" width={1000} height={1000} />
        </div>
      </section>

      <section id="link4">
        <div className="row">
          <Image src="/4.jpg" alt="test" width={1000} height={1000} />
        </div>
      </section>
    </main>
  )
}

"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function BookDemoSession() {
  return (
    <>
      <main>
        <section className={styles.bookDemoSession}>
          <div className={`container-sm ` + styles.bookDemoContainer}>
            <h1>Demo Page</h1>
          </div>
        </section>
      </main>
    </>
  );
}

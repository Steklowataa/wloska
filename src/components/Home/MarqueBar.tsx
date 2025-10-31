"use client";
import { Inter } from 'next/font/google';
import styles from './MarqueBar.module.css';
import { useMenuByLangName } from '@/utils/useMenuByLangName';

const inter = Inter({ subsets: ['latin'], weight: "700" });


export default function MarqueBar() {
  const text = useMenuByLangName()
  const promo = text.homeText.homeText[0]?.promotion
  return (
    <div className={styles.marquee}>
      <div className={styles.marqueeContent}>
        <span className={`${inter.className} text-4xl md:text-[60px] text-white mx-4`}>🚀 {promo}</span>
        <span className={`${inter.className} text-4xl md:text-[60px] text-white mx-4`}>🚀 {promo}</span>
      </div>
    </div>
  );
}

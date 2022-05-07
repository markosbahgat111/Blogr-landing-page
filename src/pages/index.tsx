import FirstSection from 'components/FirstSection/firstSection.component'
import Header from 'components/headerSection/header.component'
import SecondSection from 'components/secondSection/secondSection.component'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import ThirdSection from 'components/thirdSection/thirdSection.component'
import Footer from 'components/footerSection/footerSection.component'
import * as React from 'react';
import { useState } from 'react';

const Home: NextPage = () => {
  const [iconClass, setIconClass] = useState<number>(0);
    const handleOpenMenu = (value: number) => {
        setIconClass(iconClass => iconClass === 0 ? value : 0)
    }
  return (
    <>
      <Head>
        <title>Blogr Landing Page</title>
        <meta name="description" content="Generated by Markos Bahgat" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <main className={styles.main}>
          <Header handleOpenMenu={handleOpenMenu} iconClass={iconClass}/>
          <FirstSection/>
          <SecondSection/>
          <ThirdSection/>
          <Footer/>
      </main>
    </>
  )
}

export default Home
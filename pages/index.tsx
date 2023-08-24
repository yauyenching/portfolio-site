import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useColorMode, useColorModeValue, Flex, Button, Box, Stack } from '@chakra-ui/react'
import styles from 'styles/Home.module.css'
import base from 'styles/base.module.scss'
import Header from './sections/Header'
import Intro from './sections/Intro'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Designs from './sections/Designs'
import Features from './sections/Features'

const Home: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const test = useColorModeValue('#000', '#fff')

  // TODO: Add smooth scrolling animation

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://kit.fontawesome.com/c0cc8a8286.js" crossOrigin="anonymous"></script>
      </Head>

      <main>
        <Flex justifyContent='center' bg='brand.bg'>
          <Stack w={styles.contentWidth} h='100%' className={styles.main} spacing={100}>
            <Header
              colorMode={colorMode}
              toggleColorMode={toggleColorMode}
            />
            <Intro />
            <Experience />
            <Projects />
            <Designs />
            <Features />
          </Stack>
        </Flex>
        {/* <Button size='sm' onClick={toggleColorMode}>
          Toggle Mode
        </Button>
        <Box w='500px' h='250px' background={test} transition='background 350ms ease-in'>test</Box> */}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home

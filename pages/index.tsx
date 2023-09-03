import type { NextPage } from 'next'
import Head from 'next/head'
import { useColorMode, Flex, Stack, Text, Box } from '@chakra-ui/react'
import styles from 'styles/Home.module.css'
import Header from './sections/Header'
import Intro from './sections/Intro'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Designs from './sections/Designs'
import Features from './sections/Features'
import Contact from './sections/Contact'

const Home: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  // TODO: Add smooth scrolling animation

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Flex justifyContent='center' bg='brand.bg' flexDir="column">
          <Box w="100%" h="50px" bg="yellow" zIndex={-1}></Box>
          <Header
            colorMode={colorMode}
            toggleColorMode={toggleColorMode}
          />
          <Stack 
            w='100%'
            display='flex'
            alignItems='center' justifyContent="center"
            padding={{base: "1.5em 27.5px 5em", md: "7.5em 27.5px"}}
            spacing={100}
          >
            <Intro />
            <Experience />
            <Projects />
            <Designs />
            <Features />
            <Contact />
          </Stack>
        </Flex>
      </main>

      <footer>
        <Text
          as="span"
          textAlign="center"
          display="flex"
          justifyContent="center"
          fontSize="xs"
          background="brand.bg"
          pb="2.5em"
        >
          Designed and built by Yau Yen Ching
        </Text>
      </footer>
    </>
  )
}

export default Home

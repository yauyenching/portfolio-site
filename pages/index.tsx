import { Flex, Link, Stack, Text, useBreakpointValue, useColorMode } from '@chakra-ui/react'
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { ReactNode, useEffect, useRef, useState } from 'react'
import Header from '../components/Header'

const Intro = dynamic(() => import('../app/Intro'), { loading: () => <p>Loading...</p> })
const Experience = dynamic(() => import('../app/Experience'), {
  loading: () => <p>Loading...</p>,
})
const Projects = dynamic(() => import('../app/Projects'), { loading: () => <p>Loading...</p> })
const Designs = dynamic(() => import('../app/Designs/Designs'), {
  loading: () => <p>Loading...</p>,
})
const Features = dynamic(() => import('../app/Features'), { loading: () => <p>Loading...</p> })
const Contact = dynamic(() => import('../app/Contact'), { loading: () => <p>Loading...</p> })

interface section {
  sectionId: number
  sectionComponent: ReactNode
}

const Home: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const observerRef = useRef<IntersectionObserver | null>(null)
  const [activeSection, setActiveSection] = useState<number>(0)
  const [hovering, setHovering] = useState<boolean>(false)
  const paddingTopBreakpointVals = useBreakpointValue({ base: '125px', md: '0px' })

  const SECTIONS: section[] = [
    { sectionId: 0, sectionComponent: <Intro /> },
    { sectionId: 1, sectionComponent: <Experience /> },
    { sectionId: 2, sectionComponent: <Projects /> },
    { sectionId: 3, sectionComponent: <Designs /> },
    { sectionId: 4, sectionComponent: <Features /> },
    { sectionId: 5, sectionComponent: <Contact /> },
  ]

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        const entryId = Number(entry.target.id.slice(8))
        if (entry.isIntersecting && entry.intersectionRatio <= 0.45) {
          if (!hovering) {
            setActiveSection(entryId)
            // console.log('active: ' + entryId + ', intersectionRatio: ' + entry.intersectionRatio)
          }
        }
      },
      {
        threshold: 0.25,
      },
    )

    const sections = document.querySelectorAll('section')
    sections.forEach((section) => {
      observerRef.current?.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        observerRef.current?.unobserve(section)
      })
    }
  }, [activeSection, hovering])

  // TODO: Add smooth scrolling animation

  return (
    <>
      <Head>
        <title>Yau Yen Ching</title>
        <meta
          name='description'
          content='Yau Yen Ching is a software engineer and aspiring product manager based in Singapore. She enjoys building user-first products that solve real user needs through empathy, thoughtful design, and data-driven insights.'
        />
        <link rel='icon' href='/icons/favicon.svg' type='image/svg+xml' />
        <link rel='apple-touch-icon' href='/icons/ios/192.png' />
        <link rel='manifest' href='/manifest.json' />
        <meta name='theme-color' media='(prefers-color-scheme: light)' content='#faf5eb' />
        <meta name='theme-color' media='(prefers-color-scheme: dark)' content='#12142b' />
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="preload" href="https://rsms.me/inter/inter.css" as="style"/>
      </Head>

      <main>
        <Flex justifyContent='center' bg='brand.bg' flexDir='column'>
          <Header
            colorMode={colorMode}
            toggleColorMode={toggleColorMode}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            hovering={hovering}
            setHovering={setHovering}
          />
          <Stack
            w='100%'
            display='flex'
            alignItems='center'
            // justifyContent='center'
            padding={{ base: '1.5em 27.5px 5em', md: '7.5em 27.5px 5em' }}
            spacing={{ base: 0, md: 125 }}
          >
            {SECTIONS.map((section, i) => {
              const elem = (
                <section
                  key={section.sectionId}
                  id={`section-${i}`}
                  style={{
                    width: '100%',
                    maxWidth: 'var(--chakra-sizes-contentW)',
                    minHeight: '65vh',
                    paddingTop: i !== 0 ? paddingTopBreakpointVals : '0px',
                    display: 'flex',
                    // alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {section.sectionComponent}
                </section>
              )
              return elem
            })}
          </Stack>
        </Flex>
      </main>

      <footer>
        <Text
          as='span'
          textAlign='center'
          display='flex'
          justifyContent='center'
          fontSize='sm'
          background='brand.bg'
          pb='2.5em'
          color='brand.titleMuted'
        >
          Designed and coded by Yau Yen Ching. Built with&nbsp;
          <Link variant='footer' href='https://nextjs.org/'>
            Next.js
          </Link>
          &nbsp;and&nbsp;
          <Link variant='footer' href='https://chakra-ui.com/'>
            Chakra UI
          </Link>
          , deployed with&nbsp;
          <Link variant='footer' href='https://netlify.com/'>
            Netlify
          </Link>
          .
        </Text>
      </footer>
    </>
  )
}

export default Home

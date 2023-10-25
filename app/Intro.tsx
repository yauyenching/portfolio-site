'use client'

import {
  Box,
  Flex,
  Heading,
  ListItem,
  SkeletonCircle,
  SkeletonText,
  Text,
  UnorderedList,
  useBreakpointValue,
} from '@chakra-ui/react'
import Image from 'next/image'
import { useState } from 'react'

// TODO: Make Intro height 100vh and make bio center
export default function Intro() {
  const profilePicSize = useBreakpointValue({ base: 175, sm: 200, md: 225 }, { fallback: 'md' })
  const headingSize = useBreakpointValue({ base: '4xl', sm: '5xl', md: '6xl' }, { fallback: 'md' })
  const [loading, setLoading] = useState(true)

  function IntroSkeleton() {
    return (
      <Box w='100%' display='inline-block'>
        <SkeletonCircle size={String(profilePicSize)} />
        <SkeletonText mt='4' noOfLines={10} spacing='4' skeletonHeight='2.5' />
      </Box>
    )
  }

  // return <IntroSkeleton />\

  const displayImgStyle = {
    display: loading ? 'none' : undefined,
  }

  const loadingImgStyle = {
    display: loading ? undefined : 'none',
  }

  return (
    <Flex direction={{ base: 'column', md: 'row-reverse' }} columnGap={50} justify='left'>
      <Flex justifyContent={{ base: 'center', md: 'right' }}>
        {loading && <SkeletonCircle size={String(profilePicSize)} />}
        <Image
          src='/profile_pic.webp'
          alt='Headshot of Yau Yen Ching, an Asian young adult female.'
          width={profilePicSize}
          height={profilePicSize}
          style={{
            borderRadius: '50%',
            // boxShadow: '0px 6px 30px 0px rgba(0, 0, 0, 0.08)',
            marginBottom: 5,
            display: loading ? 'none' : 'block',
          }}
          onLoad={() => setLoading(false)}
          priority
        />
      </Flex>
      <Box w={{ base: '100%', md: '80%' }}>
        <Box textAlign={{ base: 'center', md: 'left' }} overflow='visible'>
          <Heading
            as='h1'
            textTransform='lowercase'
            fontSize={headingSize}
            verticalAlign='bottom'
            letterSpacing='0.065rem'
            lineHeight='1em'
            m={0}
          >
            {/* TODO: Add name gradient hover and startup animation */}
            Hi, I&apos;m&nbsp;
            <Box display='inline-block'>
              <Heading as='span' variant='gradient' fontSize={headingSize} lineHeight='1em'>
                Yau Yen Ching
              </Heading>
              .
            </Box>
          </Heading>
        </Box>
        <Box lineHeight='2em' textAlign='left'>
          <Text>I am a Software Engineer and aspiring Product Manager based in Singapore. 🇸🇬</Text>

          <Text>
            As a proud <b>Computer Science</b> graduate of <b>Yale-NUS College</b>, I love exploring
            the intersection of technology, design, and human interaction! I possess a diverse array
            of interests and skills, such as: <b>full-stack development</b>, <b>UX/UI design</b>,
            and <b>data analytics</b>.
          </Text>

          <Text>
            Drawing upon my multifaceted background, I enjoy building user-first products that solve
            real user needs through empathy, thoughtful design, and data-driven insights.
          </Text>

          <Text>Here are some technologies I have been working with:</Text>
        </Box>
        <UnorderedList
          w={{ base: '100%', sm: '85%' }}
          fontFamily='heading'
          fontSize='sm'
          lineHeight='2.25em'
          letterSpacing='0.025em'
          sx={{ columns: 2 }}
        >
          <ListItem>TypeScript / JavaScript</ListItem>
          <ListItem>React.js</ListItem>
          <ListItem>Python</ListItem>
          <ListItem>Django</ListItem>
          <ListItem>MySQL</ListItem>
          <ListItem>AWS</ListItem>
          <ListItem>R</ListItem>
          <ListItem>Java</ListItem>
        </UnorderedList>
        {/* TODO: Maybe? Add Let's connect as button/link to Contact section. Maybe below pfp */}
      </Box>
    </Flex>
  )
}

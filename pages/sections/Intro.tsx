import styles from './Intro.module.scss'
import base from 'styles/base.module.scss'
import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'

export default function Intro() {
  return (
    <Flex
      w='100%'
      maxW={base.contentWidth}
      direction={{ base: 'column', md: 'row-reverse' }}
      columnGap={50}
    >
      <Flex
        justifyContent={{ base: 'center', md: 'right' }}
      >
        <Image
            className={styles.profilePic}
            src="/profile_pic.jpg"
            alt="test"
            width={0} height={0}
            sizes="100vw"
            style={{
              width: '225px', height: '225px',
              objectFit: 'cover',
              position: 'relative',
              zIndex: 2,
            }}
        />
        {/* <Flex
          justifyContent='center'
          w={225} h={225}
          position='relative'
          top='-10'
          opacity={0.86}
        >
          <Image
            src="/openpeeps_profilepic_shirt.png"
            alt="test"
            width={0} height={0}
            sizes="100vw"
            style={{
              width: '225px', height: '300px',
              objectFit: 'cover',
              position: 'relative',
              zIndex: 2,
              filter: useColorModeValue('none', 'brightness(98%)  contrast(105%) saturate(120%)')
            }}
          />
          <Box
            background='var(--accent-fade)'
            w={185} h={185}
            top='50%'
            // right='25%'
            transform='translateY(-30%)'
            borderRadius='50%'
            position='absolute'
          />
          <Box
            background='#CDEDC0'
            w='45px' h='45px'
            top='85%'
            right='25%'
            position='absolute'
            opacity={0.75}
          />
          <Image
            src="/smoke6.gif"
            alt="test"
            width={35} height={55}
            style={{
              zIndex: 3,
              position: 'absolute',
              bottom: '35px',
              right: '60px',
              opacity: '0.6'
            }}
          />
        </Flex> */}
      </Flex>
      <Box w={{ base: '100%', md: '80%' }}>
        <Box textAlign={{ base: 'center', md: 'left' }}>
          <h1 className={styles.title}>
            {/* TODO: Add name gradient hover and startup animation */}
            Hi, I'm <span style={{ 'display': 'inline-block' }}>
              <span className={styles.name}>Yau Yen Ching</span>.
            </span>
          </h1>
        </Box>
        <div className={styles.bio}>
          <Text>I am a Software Engineer and aspiring Product Manager based in Singapore. 🇸🇬</Text>

          <Text>As a proud <b>Computer Science</b> graduate of <b>Yale-NUS College</b>,
            I love exploring the intersection of technology, design, and human interaction! I possess a diverse array of interests and skills, such as: <b>full-stack development</b>, <b>UI/UX design</b>, and <b>data analytics</b>.</Text>

          <Text>Drawing upon my multifaceted background, I enjoy building user-first products that solve real user needs through empathy, thoughtful design, and data-driven insights.</Text>

          <Text>Here are some technologies I have been working with:</Text>
        </div>
        <ul className={styles.skills}>
          <li>TypeScript/JavaScript</li>
          <li>React.js</li>
          <li>Python</li>
          <li>Django</li>
          <li>MySQL</li>
          <li>AWS</li>
          <li>R</li>
          <li>Java</li>
        </ul>
      </Box>
    </Flex>
  )
}
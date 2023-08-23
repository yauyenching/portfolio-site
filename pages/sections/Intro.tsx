import styles from './Intro.module.scss'
import base from 'styles/base.module.scss'
import { Box, Flex } from '@chakra-ui/react'
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
        <Image className={styles.profilePic} src="/profile_pic2.jpg" alt="test" width={225} height={225} />
      </Flex>
      <Box w={{ base: '100%', md: '80%' }}>
        <Box textAlign={{ base: 'center', md: 'left' }}>
          <h1 className={styles.title}>
            {/* TODO: Add name gradient hover and startup animation */}
            Hello, I'm <span style={{ 'display': 'inline-block' }}>
              <span className={styles.name}>Yen Ching</span>.
            </span>
          </h1>
        </Box>
        <div className={styles.bio}>
          <p>I am a Software Engineer and aspiring Product Manager based in Singapore. 🇸🇬</p>

          <p>As a proud <span className={styles.accent}>Computer Science</span> graduate of <b>Yale-NUS College</b>,
            I love exploring the intersection of technology, design, and human interaction! I possess a diverse array of interests and skills, such as: <b>full-stack development</b>, <b>UX/UI design</b>, and <b>data analytics</b>.</p>

          <p>Drawing upon my multifaceted background, I enjoy building user-first products that solve real user needs through empathy, thoughtful design, and data-driven insights.</p>
          
          <p>Here are some technologies I have been working with:</p>
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
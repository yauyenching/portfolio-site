import styles from './Intro.module.scss'
import base from 'styles/base.module.scss'
import { Box, Flex } from '@chakra-ui/react'
import Image from 'next/image'

export default function Intro() {
  return (
    <Box w='100%' maxW={base.contentWidth}>
      <Flex>
        <Box w='80%'>
          <span className={styles.title}>
            {/* TODO: Add name gradient hover and startup animation */}
            Hello, I'm <span className={styles.gradient}>Yen Ching</span>.
          </span>
          <div className={styles.bio}>
            <p>I am a Software Engineer and aspiring Product Manager based in Singapore. 🇸🇬</p>
            
            <p>As a proud <span className={styles.accent}>Computer Science</span> graduate of <b>Yale-NUS College</b>,
            I love exploring the intersection of technology, design, and human interaction! I possess a diverse array of interests and skills, such as: <b>full-stack development</b>, <b>UX/UI design</b>, and <b>data analytics</b>.</p>
            
            <p>Drawing upon my multifaceted background, I enjoy building user-first products that solve real user needs through empathy, thoughtful design, and data-driven insights.</p>
          </div>
          <p>
          Here are some technologies I have been working with:
          </p>
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
        <Box ml={50}>
          <Image className={styles.profilePic} src="/profile_pic2.jpg" alt="test" width={225} height={225}/>
        </Box>
      </Flex>
    </Box>
  )
}
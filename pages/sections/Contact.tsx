import { Flex, Heading, Text, Button, Box, useBreakpointValue, Link, HStack } from '@chakra-ui/react'
import SectionHeading from 'components/SectionHeading'
import { motion } from 'framer-motion'
import GitHubIcon from 'public/assets/GitHubIcon'
import LinkedInIcon from 'public/assets/LinkedInIcon'

export default function Contact() {
  const headingSize = useBreakpointValue({ base: '5xl', md: '6xl' })
  return (
    <Box textAlign={{ base: 'left', sm: 'center' }}>
      <SectionHeading sectionId={5} sectionTitle='Contact' />
      <Flex alignItems='center' justifyContent='center' flexDirection='column'>
        <Heading m={0} variant='gradient' fontSize={headingSize} textAlign='center' pb={5}>
          get in touch
        </Heading>
        <Box textAlign='center'>
          <Text>
            I am currently <b>open</b> to full-time work opportunities in Singapore.
          </Text>
          <Text>Whether you want to work together, or say hi, my inbox is always open! ☺️👋🏻</Text>
        </Box>
        <Link
          as={motion.a}
          whileHover={{ scale: 1.1, transition: { duration: 0.25 } }}
          // whileInView={{ scale: [1.05, 1], transition: { duration: 0.5, repeat: Infinity, repeatType: 'mirror' } }}
          variant='gradient'
          mt={50}
          mb={30}
          p='15px 30px'
          fontSize='lg'
          href='mailto:yauyenching@proton.me'
        >
          <Text as='span' letterSpacing='0.02em'>
            Say Hello
          </Text>
        </Link>
        <HStack fontSize='2xl' spacing='0.8rem' color='brand.title'>
          <Link href='https://github.com/yauyenching'>
            <GitHubIcon boxSize='1.25em' />
          </Link>
          <Link href='https://www.linkedin.com/in/yau-yen-ching'>
            <LinkedInIcon boxSize='1.25em' />
          </Link>
        </HStack>
      </Flex>
    </Box>
  )
}

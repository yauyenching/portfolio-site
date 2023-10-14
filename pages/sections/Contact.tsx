import { Flex, Heading, Text, Button, Box, useBreakpointValue, Link } from '@chakra-ui/react'
import SectionHeading from 'components/SectionHeading'
import { motion } from 'framer-motion'

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
        <Flex fontSize='2xl' columnGap={15} color='brand.title'>
          <Link href='https://github.com/yauyenching'>
            <i className='fa-brands fa-github'></i>
          </Link>
          <Link href='https://www.linkedin.com/in/yau-yen-ching'>
            <i className='fa-brands fa-linkedin'></i>
          </Link>
        </Flex>
      </Flex>
    </Box>
  )
}

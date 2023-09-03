import { Box, Flex, Text, Heading, UnorderedList, ListItem, SimpleGrid, useBreakpointValue } from '@chakra-ui/react'
import Image from 'next/image'

export default function Intro() {
  const profilePicSize = useBreakpointValue({base: 175, sm: 200, md: 225})
  const headingSize = useBreakpointValue({ base: '2.5rem', sm: '5xl', md: '6xl' })

  return (
    <Flex
      w='100%'
      maxW='contentW'
      direction={{ base: 'column', md: 'row-reverse' }}
      columnGap={50}
    >
      <Flex
        justifyContent={{ base: 'center', md: 'right' }}
      >
        <Image
          src="/profile_pic.jpg" alt="test"
          width={profilePicSize} height={profilePicSize}
          style={{
            borderRadius: '50%',
            // boxShadow: '0px 6px 30px 0px rgba(0, 0, 0, 0.08)',
            marginBottom: 5,
          }}
        />
      </Flex>
      <Box w={{ base: '100%', md: '80%' }}>
        <Box textAlign={{ base: 'center', md: 'left' }} overflow="visible">
          <Heading
            as="h1"
            textTransform='lowercase'
            fontSize={headingSize}
            verticalAlign='bottom'
            letterSpacing='0.065rem' lineHeight='1em'
            m={0}
          >
            {/* TODO: Add name gradient hover and startup animation */}
            Hi, I'm&nbsp;
            <Box display="inline-block">
              <Heading
                as="span" variant="gradient"
                fontSize={headingSize} lineHeight='1em'
              >
                Yau Yen Ching
              </Heading>
              .
            </Box>

          </Heading>
        </Box>
        <Box lineHeight="2em" textAlign="justify">
          <Text>I am a Software Engineer and aspiring Product Manager based in Singapore. 🇸🇬</Text>

          <Text>As a proud <b>Computer Science</b> graduate of <b>Yale-NUS College</b>,
            I love exploring the intersection of technology, design, and human interaction! I possess a diverse array of interests and skills, such as: <b>full-stack development</b>, <b>UX/UI design</b>, and <b>data analytics</b>.</Text>

          <Text>Drawing upon my multifaceted background, I enjoy building user-first products that solve real user needs through empathy, thoughtful design, and data-driven insights.</Text>

          <Text>Here are some technologies I have been working with:</Text>
        </Box>
        <UnorderedList
          w={{ base: '100%', sm: '85%' }}
          fontFamily='heading' fontSize="sm"
          lineHeight="2.25em" letterSpacing="0.025em"
        >
          <SimpleGrid columns={2}>
            <ListItem>TypeScript / JavaScript</ListItem>
            <ListItem>React.js</ListItem>
            <ListItem>Python</ListItem>
            <ListItem>Django</ListItem>
            <ListItem>MySQL</ListItem>
            <ListItem>AWS</ListItem>
            <ListItem>R</ListItem>
            <ListItem>Java</ListItem>
          </SimpleGrid>
        </UnorderedList>
      </Box>
    </Flex>
  )
}
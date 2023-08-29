import { Box, Flex, Text, Heading, UnorderedList, ListItem, SimpleGrid } from '@chakra-ui/react'
import Image from 'next/image'

export default function Intro() {
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
          width={225} height={225}
          style={{
            borderRadius: '50%',
            boxShadow: '0px 6px 30px 0px rgba(0, 0, 0, 0.08)',
            marginBottom: 5,
          }}
        />
      </Flex>
      <Box w={{ base: '100%', md: '80%' }}>
        <Box textAlign={{ base: 'center', md: 'left' }} overflow="visible">
          <Heading
            as="h1"
            textTransform='lowercase'
            fontSize={{ base: '5xl', md: '6xl' }}
            verticalAlign='bottom'
            letterSpacing='0.065rem' lineHeight='1em'
            m={0}
          >
            {/* TODO: Add name gradient hover and startup animation */}
            Hi, I'm&nbsp;
            <Box display="inline-block">
              <Heading
                as="span" variant="gradient"
                fontSize={{ base: '5xl', md: '6xl' }} lineHeight='1em'
              >
                Yau Yen Ching
              </Heading>
              .
            </Box>

          </Heading>
        </Box>
        <Text lineHeight="2em" textAlign="justify">
          <Text>I am a Software Engineer and aspiring Product Manager based in Singapore. 🇸🇬</Text>

          <Text>As a proud <Text as="span" color="brand.accent">Computer Science</Text> graduate of <b>Yale-NUS College</b>,
            I love exploring the intersection of technology, design, and human interaction! I possess a diverse array of interests and skills, such as: <b>full-stack development</b>, <b>UX/UI design</b>, and <b>data analytics</b>.</Text>

          <Text>Drawing upon my multifaceted background, I enjoy building user-first products that solve real user needs through empathy, thoughtful design, and data-driven insights.</Text>

          <Text>Here are some technologies I have been working with:</Text>
        </Text>
        <UnorderedList
          w='85%'
          fontFamily='heading' fontSize="sm"
          lineHeight="2.25em" letterSpacing="0.025em"
        >
          <SimpleGrid columns={2}>
            <ListItem>TypeScript/JavaScript</ListItem>
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
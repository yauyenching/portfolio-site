import { Flex, Box, Text, Link, Show, HStack, VStack, Slide, Hide, SimpleGrid, useDisclosure } from "@chakra-ui/react"
import { colorModeProps } from "components/props"
import DayNightToggle from "components/DayNightToggle"
import HamburgerMenu from "components/HamburgerMenu"
import { PropsWithChildren } from "react"

export default function Header({ colorMode, toggleColorMode }: colorModeProps) {
  const SECTIONS: string[] = ["Experience", "Projects", "Designs", "Features", "Contact"]
  const { isOpen, onToggle } = useDisclosure()

  function HeaderLink({ children }: PropsWithChildren) {
    const changeOverlayPos = (elem: HTMLAnchorElement) => {
      const overlay = document.getElementById('overlay');
      const position = elem.getBoundingClientRect();
      overlay!.style.left = elem.offsetLeft + 'px';
      overlay!.style.width = position.width + 'px';
    }

    const addOverlay = (elem: HTMLAnchorElement) => {
      const overlay = document.getElementById('overlay');
      changeOverlayPos(elem);
      overlay?.classList.add('active');
    }

    const removeOverlay = (elem: HTMLAnchorElement) => {
      const overlay = document.getElementById('overlay');
      overlay?.classList.remove('active');
    }

    return (
      <Link
        variant='header'
        onMouseOver={(e) => addOverlay(e.target as HTMLAnchorElement)}
        onMouseLeave={(e) => removeOverlay(e.target as HTMLAnchorElement)}
      >
        {children}
      </Link>
    )
  }

  // TODO: add persistent hover color and overlay position for active section
  return (
    <>
      <Flex
        w='100%' h={50} px={27.5}
        bg='brand.bg'
        position='fixed'
        top={0} left={0}
        zIndex={5}
        letterSpacing='0.05em'
        alignItems='center'
        justifyContent='center'
      >
        <HStack
          w='100%' maxW='contentW'
          justifyContent='space-between'
          spacing={8}
        >
          <HStack>
            {/* hamburger menu */}
            <Box color='brand.body'>
              <Show below="md">
                <HamburgerMenu 
                  onOpen={onToggle}
                  isOpen={isOpen}
                />
              </Show>
            </Box>
            {/* logo */}
            <Box
              h='40px' w='40px'
              borderRadius={8}
              bg='#222' color='black'
              position="relative"
              fontFamily='heading' fontWeight={500}
              fontSize='lg'
            >
              <Box position='absolute' left='6px' top='4px'>
                <Text as="span" color='white'>yc</Text>
                <Text as="span" color='#FFA68A'>.</Text>
              </Box>
            </Box>
          </HStack>
          <Show above="md">
            <Flex
              w='100%' maxW='67.5%'
              justifyContent='space-between' position='relative'
              gap="10px"
            >
              <Box id="overlay" />
              {/* DONE: Find how use inner text for params */}
              {/* https://stackoverflow.com/questions/32248427/this-props-children-selecting-innerhtml */}
              {SECTIONS.map((s, i) => (
                <HeaderLink key={i}>{s}</HeaderLink>
              ))}
            </Flex>
          </Show>
          {/* https://daily-dev-tips.com/posts/creating-day-night-css-only-toggle-switch/ */}
          <DayNightToggle
            colorMode={colorMode}
            toggleColorMode={toggleColorMode}
          />
        </HStack>
      </Flex>
      <Slide direction="top" in={isOpen} style={{zIndex: 3}}>
        <Hide above="md">
        <Flex
          background="brand.bg"
          py="12.5px" h="95px"
          mt={50}
          justifyContent="center"
        > 
          <SimpleGrid columns={3} w="100%" maxW="650px" px={{base: 25, sm: 75}}>
          {SECTIONS.map((s, i) => (
            <Link variant="header" key={i}>{s}</Link>
          ))}
          </SimpleGrid>
        </Flex>
        </Hide>
      </Slide>
      <Box mb={isOpen ? 95 : 0} h="50px" transition="margin-bottom 300ms ease-out"/>
    </>
  )
}
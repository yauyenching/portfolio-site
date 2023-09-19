import {
  Flex,
  Box,
  Text,
  Link,
  Show,
  HStack,
  Slide,
  Hide,
  SimpleGrid,
  useDisclosure,
  useBreakpointValue,
} from '@chakra-ui/react'
import { colorModeProps } from 'components/props'
import DayNightToggle from 'components/DayNightToggle'
import HamburgerMenu from 'components/HamburgerMenu'
import { PropsWithChildren, useEffect, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'

interface HeaderProps extends colorModeProps {
  activeSection: number
  setActiveSection: (_: number) => void
  hovering: boolean
  setHovering: (_: boolean) => void
}

interface HeaderLinkProps {
  mobile: boolean
  id: number
}

export default function Header({
  colorMode,
  toggleColorMode,
  activeSection,
  setActiveSection,
  hovering,
  setHovering,
}: HeaderProps) {
  const SECTIONS: string[] = ['Experience', 'Projects', 'Designs', 'Features', 'Contact']
  const { isOpen, onToggle } = useDisclosure()
  const overlayRef = useRef<HTMLDivElement | null>(null)
  const scrollIntoViewBreakpointVals = useBreakpointValue<ScrollLogicalPosition>({
    base: 'start',
    md: 'center',
  })

  // https://codefrontend.com/scroll-to-element-in-react/
  const scrollToSection = (id: number) => {
    const sectionElem = document.getElementById(`section-${id}`)
    if (sectionElem) {
      sectionElem.scrollIntoView({
        behavior: 'smooth',
        block: scrollIntoViewBreakpointVals,
      })
      setActiveSection(id)
    }
  }

  function HeaderLink({ id, mobile, children }: PropsWithChildren<HeaderLinkProps>) {
    const changeOverlayPos = (elem: HTMLElement) => {
      const position = elem.getBoundingClientRect()
      overlayRef.current!.style.left = elem.offsetLeft + 'px'
      overlayRef.current!.style.width = position.width + 'px'
    }

    const addOverlay = (elem: HTMLElement) => {
      overlayRef.current!.classList.add('active')
      changeOverlayPos(elem)
    }

    const removeOverlay = (elem: HTMLElement) => {
      overlayRef.current!.classList.remove('active')
    }

    useEffect(() => {
      if (!hovering) {
        const activeLink = document.getElementById(`header-link-${activeSection}`)
        if (activeLink) {
          activeLink?.classList.add('active')
          if (!mobile) {
            changeOverlayPos(activeLink)
            overlayRef.current!.classList.add('active')
          }
        }
        if (!mobile && activeSection === 0) {
          overlayRef.current!.classList.remove('active')
        }
      }
    }, [mobile])

    return (
      <Link
        id={`header-link-${id}`}
        variant='header'
        tabIndex={0}
        onClick={(_) => scrollToSection(id)}
        onMouseOver={(e) => (!mobile ? addOverlay(e.target as HTMLAnchorElement) : null)}
        onMouseLeave={(e) => (!mobile ? removeOverlay(e.target as HTMLAnchorElement) : null)}
        position='relative'
        bottom='3px'
      >
        {children}
      </Link>
    )
  }

  // TODO: add persistent hover color and overlay position for active section
  return (
    <>
      <Flex
        w='100%'
        h={50}
        px={27.5}
        bg='brand.bg'
        position='fixed'
        top={0}
        left={0}
        zIndex={5}
        letterSpacing='0.05em'
        alignItems='center'
        justifyContent='center'
      >
        <HStack w='100%' maxW='contentW' justifyContent='space-between' spacing={8}>
          <HStack>
            {/* hamburger menu */}
            <Box color='brand.body'>
              <Show below='md'>
                <HamburgerMenu onOpen={onToggle} isOpen={isOpen} />
              </Show>
            </Box>
            {/* logo */}
            <Flex
              onClick={(_) => scrollToSection(0)}
              cursor='pointer'
              h='40px'
              w='40px'
              borderRadius={8}
              bg='#222'
              color='black'
              position='relative'
              fontFamily='heading'
              fontWeight={500}
              fontSize='lg'
              justifyContent='center'
              alignItems='center'
              tabIndex={0}
            >
              <Text as='span' color='white'>
                yc
              </Text>
              <Text as='span' color='#FFA68A'>
                .
              </Text>
            </Flex>
          </HStack>
          <Show above='md'>
            <Flex
              w='100%'
              maxW='67.5%'
              justifyContent='space-between'
              position='relative'
              gap='10px'
              onMouseOver={(_) => setHovering(true)}
              onMouseLeave={(_) => setHovering(false)}
            >
              {/* DONE: Find how use inner text for params */}
              {/* https://stackoverflow.com/questions/32248427/this-props-children-selecting-innerhtml */}
              {SECTIONS.map((s, i) => (
                <HeaderLink key={i} id={i + 1} mobile={false}>
                  {s}
                </HeaderLink>
              ))}
              <Box id='overlay' ref={overlayRef} />
            </Flex>
          </Show>
          {/* https://daily-dev-tips.com/posts/creating-day-night-css-only-toggle-switch/ */}
          <DayNightToggle colorMode={colorMode} toggleColorMode={toggleColorMode} />
        </HStack>
      </Flex>
      <Slide direction='top' in={isOpen} style={{ zIndex: 3 }}>
        <Hide above='md'>
          <Flex background='brand.bg' py='12.5px' h='95px' mt={50} justifyContent='center'>
            <SimpleGrid columns={3} w='100%' maxW='650px' px={{ base: 25, sm: 75 }}>
              {SECTIONS.map((s, i) => (
                <HeaderLink key={uuidv4()} id={i + 1} mobile={true}>
                  {s}
                </HeaderLink>
              ))}
            </SimpleGrid>
          </Flex>
        </Hide>
      </Slide>
      <Box mb={isOpen ? 95 : 0} h='50px' transition='margin-bottom 300ms ease-out' />
    </>
  )
}

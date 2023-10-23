import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  UseDisclosureProps,
  Text,
  Heading,
  Box,
  Link,
  useColorModeValue,
  Flex,
  useBreakpointValue,
  LinkProps,
} from '@chakra-ui/react'
import Image from 'next/image'
import Download from 'public/assets/Download'
import FigmaIcon from 'public/assets/FigmaIcon'
import PresentationPlay from 'public/assets/PresentationPlay'
import { PropsWithChildren, ReactNode } from 'react'

export interface CardModalProps extends Required<Pick<UseDisclosureProps, 'isOpen' | 'onClose'>> {
  designTitle: string
  background: ReactNode
  prototypeLink: string
  presentationLink: string
  caseStudyFileName?: string
  caseStudyDisclaimer?: string
}

function ModalHeading({ children }: PropsWithChildren) {
  return (
    <Heading as='h1' size='lg'>
      {children}
    </Heading>
  )
}

export function ModalSubHeading({ children }: PropsWithChildren) {
  return (
    <Heading as='h2' size='md'>
      {children}
    </Heading>
  )
}

interface FeaturePreviewProps {
  caption: string
  images: ReactNode[]
}

export function FeaturePreview({ caption, images }: FeaturePreviewProps) {
  function FeatureCaption({ children }: PropsWithChildren) {
    return (
      <Text fontSize='md' textAlign='center' fontWeight={400}>
        {children}
      </Text>
    )
  }

  return (
    <>
      <FeatureCaption>{caption}</FeatureCaption>
      <Box textAlign='center'>
        {images.map((image) => {
          return image
        })}
      </Box>
    </>
  )
}

export function CardModal({
  isOpen,
  onClose,
  designTitle,
  caseStudyFileName,
  prototypeLink,
  presentationLink,
  caseStudyDisclaimer,
  background,
  children,
}: PropsWithChildren<CardModalProps>) {
  const defaultBtnStyle = useColorModeValue('blackAlpha.50', 'whiteAlpha.200')
  const hoverBtnStyle = useColorModeValue('blackAlpha.200', 'whiteAlpha.300')

  function ModalLink({ children, href, isExternal }: PropsWithChildren<LinkProps>) {
    return (
      <Button
        as={Link}
        variant='link'
        p={3}
        textDecoration='none'
        color='brand.title'
        href={href}
        download={!isExternal}
        isExternal={isExternal}
      >
        {children}
      </Button>
    )
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={{ base: 'full', md: '3xl', lg: '4xl' }}
      allowPinchZoom
      scrollBehavior={useBreakpointValue({ base: 'inside', sm: 'outside' })}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{designTitle}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex
            columnGap={1.5}
            rowGap={1}
            flexWrap='wrap'
            direction={{ base: 'column', sm: 'row' }}
          >
            {caseStudyFileName && <ModalLink href={`case studies/${caseStudyFileName}`}>
              <Download mr={1.5} boxSize='18px' />
              Case Study
            </ModalLink>}
            <ModalLink href={presentationLink}>
              <PresentationPlay mr={1.5} boxSize='18px' />
              Figma Interactive Prototype
            </ModalLink>
            <ModalLink href={prototypeLink}>
              <FigmaIcon mr={1.5} boxSize='18px' />
              Figma Wireframes
            </ModalLink>
          </Flex>
          <Text fontSize='xs' fontStyle='italic'>
            {caseStudyDisclaimer}
          </Text>

          <ModalHeading>Background</ModalHeading>
          {background}

          <ModalHeading>Features & Preview</ModalHeading>
          {children}
        </ModalBody>

        <ModalFooter>
          <Button bg={defaultBtnStyle} _hover={{ bg: hoverBtnStyle }} mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

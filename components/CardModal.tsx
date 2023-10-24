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
import Download from 'public/assets/Download'
import FigmaIcon from 'public/assets/FigmaIcon'
import GitHubIcon from 'public/assets/GitHubIcon'
import PresentationPlay from 'public/assets/PresentationPlay'
import { PropsWithChildren, ReactNode } from 'react'
import { DesignMetadataType } from 'app/Designs/designMetadata'
import Video from 'public/assets/Video'

export interface CardModalProps extends Required<Pick<UseDisclosureProps, 'isOpen' | 'onClose'>> {
  metadata: DesignMetadataType
  background: ReactNode
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
  metadata,
  isOpen,
  onClose,
  caseStudyDisclaimer,
  background,
  children,
}: PropsWithChildren<CardModalProps>) {
  const defaultBtnStyle = useColorModeValue('blackAlpha.50', 'whiteAlpha.200')
  const hoverBtnStyle = useColorModeValue('blackAlpha.200', 'whiteAlpha.300')

  const {
    designTitle,
    caseStudy,
    caseStudyIsLink,
    prototypeLink,
    presentationLink,
    githubLink,
    demoLink,
  } = metadata

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
      scrollBehavior={useBreakpointValue({ base: 'inside', lg: 'outside' })}
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
            {caseStudy && (
              <ModalLink
                isExternal={caseStudyIsLink}
                href={caseStudyIsLink ? caseStudy : `case studies/${caseStudy}`}
              >
                <Download mr={1.5} boxSize='18px' />
                Case Study
              </ModalLink>
            )}
            {githubLink && (
              <ModalLink isExternal href={githubLink}>
                <GitHubIcon mr={1.5} boxSize='20px' />
                Code & Documentation
              </ModalLink>
            )}
            <ModalLink isExternal href={presentationLink}>
              <PresentationPlay mr={1.5} boxSize='18px' />
              Figma Interactive Prototype
            </ModalLink>
            <ModalLink isExternal href={prototypeLink}>
              <FigmaIcon mr={1.5} boxSize='18px' />
              Figma Wireframes
            </ModalLink>
            {demoLink && (
              <ModalLink isExternal href={demoLink}>
                <Video mr={1.5} boxSize='18px' />
                Video Demo
              </ModalLink>
            )}
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

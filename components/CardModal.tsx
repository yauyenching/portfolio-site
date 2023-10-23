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
import { PropsWithChildren } from 'react'

export interface CardModalProps {
  designTitle: string
  isOpen: boolean
  onClose: () => void
}

export function CardModal({
  isOpen,
  onClose,
}: Required<Pick<UseDisclosureProps, 'isOpen' | 'onClose'>>) {
  const defaultBtnStyle = useColorModeValue('blackAlpha.50', 'whiteAlpha.200')
  const hoverBtnStyle = useColorModeValue('blackAlpha.200', 'whiteAlpha.300')

  function FeatureCaption({ children }: PropsWithChildren) {
    return (
      <Text fontSize='md' textAlign='center' fontWeight={400}>
        {children}
      </Text>
    )
  }

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
        <ModalHeader>Homemates</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex
            columnGap={1.5}
            rowGap={1}
            flexWrap='wrap'
            direction={{ base: 'column', sm: 'row' }}
          >
            <ModalLink href='case studies/Yau Yen Ching_Case Study_Homemates.pdf'>
              <Download mr={1.5} boxSize='18px' />
              Case Study
            </ModalLink>
            <ModalLink>
              <PresentationPlay mr={1.5} boxSize='18px' />
              Figma Interactive Prototype
            </ModalLink>
            <ModalLink>
              <FigmaIcon mr={1.5} boxSize='18px' />
              Figma Wireframes
            </ModalLink>
          </Flex>
          <Text fontSize='xs' fontStyle='italic'>
            Disclaimer: the case study was originally written as part of my university coursework.
          </Text>

          <Heading as='h1' size='lg'>
            Background
          </Heading>
          <Text>
            With increasing urbanization, more and more city dwellers have the need to find the
            right roommate and ideal living space. This can be daunting and time-consuming as users
            struggle to find a match that's safe and compatible. How do we design an app that helps
            users find and keep the ideal roommate and room? Furthermore, can we improve the
            roommate experience?
          </Text>
          <Text>
            This was designed as part of a project for the <em>Interaction Design</em> course at
            National University of Singapore.
          </Text>

          <Heading as='h1' size='lg'>
            Features & Preview
          </Heading>
          <Heading as='h2' size='md'>
            For Those with Rooms Looking for Roommates
          </Heading>
          <FeatureCaption>Match and Message Prospective Roommates</FeatureCaption>
          <Box textAlign='center'>
            <Image
              src='/previews/homemates/roommate matching.png'
              alt='test'
              width={250}
              height={486.87}
            />
            <Image
              src='/previews/homemates/roommate description.png'
              alt='test'
              width={250}
              height={486.87}
            />
            <Image
              src='/previews/homemates/roommate message.png'
              alt='test'
              width={250}
              height={486.87}
            />
          </Box>

          <FeatureCaption>Filters for Roommate Compatibility</FeatureCaption>
          <Box textAlign='center'>
            <Image src='/previews/homemates/filters.png' alt='test' width={250} height={486.87} />
            <Image
              src='/previews/homemates/filters - living habits.png'
              alt='test'
              width={250}
              height={486.87}
            />
            <Image
              src='/previews/homemates/filters - interests.png'
              alt='test'
              width={250}
              height={486.87}
            />
          </Box>

          <FeatureCaption>Message Interested Roommates and Arrange Viewings</FeatureCaption>
          <Box textAlign='center'>
            <Image src='/previews/homemates/messages.png' alt='test' width={250} height={486.87} />
            <Image
              src='/previews/homemates/messages - chat.png'
              alt='test'
              width={250}
              height={486.87}
            />
          </Box>

          <Heading as='h2' size='md'>
            For Those Looking for Rooms
          </Heading>
          <FeatureCaption>Browse Available Rooms</FeatureCaption>
          <Box textAlign='center'>
            <Image
              src='/previews/homemates/room description - a.png'
              alt='test'
              width={250}
              height={486.87}
            />
            <Image
              src='/previews/homemates/room description - b.png'
              alt='test'
              width={250}
              height={486.87}
            />
            <Image
              src='/previews/homemates/room filters.png'
              alt='test'
              width={250}
              height={486.87}
            />
          </Box>

          <Heading as='h2' size='md'>
            For Roommates Managing their Space
          </Heading>
          <FeatureCaption>Roommate Management</FeatureCaption>
          <Box textAlign='center'>
            <Image
              src='/previews/homemates/homemail - feed.png'
              alt='test'
              width={250}
              height={486.87}
            />
            <Image
              src='/previews/homemates/homemail - tasks.png'
              alt='test'
              width={250}
              height={486.87}
            />
            <Image
              src='/previews/homemates/homemail - notes.png'
              alt='test'
              width={250}
              height={486.87}
            />
            <Image
              src='/previews/homemates/homemail - calendar.png'
              alt='test'
              width={250}
              height={486.87}
            />
          </Box>
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

import { CardModal, FeaturePreview, ModalSubHeading } from 'components/CardModal'
import { UseDisclosureProps, Text } from '@chakra-ui/react'
import { DESIGN_METADATA as designs } from 'app/Designs/designMetadata'
import Image from 'next/image'
import { v4 as uuidv4 } from 'uuid'

export default function HomematesModal({
  isOpen,
  onClose,
}: Required<Pick<UseDisclosureProps, 'isOpen' | 'onClose'>>) {
  const background = (
    <>
      <Text>
        With increasing urbanization, more and more city dwellers have the need to find the right
        roommate and ideal living space. This can be daunting and time-consuming as users struggle
        to find a match that&apos;s safe and compatible. How do we design an app that helps users
        find and keep the ideal roommate and room? Furthermore, can we improve the roommate
        experience?
      </Text>
      <Text>
        This was designed as part of a project for the <em>Interaction Design</em> course at
        National University of Singapore.
      </Text>
    </>
  )

  const disclaimer =
    'Disclaimer: the case study was originally written as part of my university coursework.'

  return (
    <CardModal
      isOpen={isOpen}
      onClose={onClose}
      metadata={designs.homemates}
      background={background}
      caseStudyDisclaimer={disclaimer}
    >
      <ModalSubHeading>For Those with Rooms Looking for Roommates</ModalSubHeading>
      <FeaturePreview
        caption='Match and Message Prospective Roommates'
        images={[
          <Image
            key={uuidv4()}
            src='/previews/homemates/roommate_matching.webp'
            alt='Design of roommate matching feature'
            width={250}
            height={486.87}
          />,
          <Image
            key={uuidv4()}
            src='/previews/homemates/roommate_description.webp'
            alt='test'
            width={250}
            height={486.87}
          />,
          <Image
            key={uuidv4()}
            src='/previews/homemates/roommate_message.webp'
            alt='test'
            width={250}
            height={486.87}
          />,
        ]}
      />
      <FeaturePreview
        caption='Filters for Roommate Compatibility'
        images={[
          <Image
            key={uuidv4()}
            src='/previews/homemates/filters.webp'
            alt='test'
            width={250}
            height={486.87}
          />,
          <Image
            key={uuidv4()}
            src='/previews/homemates/filters_living_habits.webp'
            alt='test'
            width={250}
            height={486.87}
          />,
          <Image
            key={uuidv4()}
            src='/previews/homemates/filters_interests.webp'
            alt='test'
            width={250}
            height={486.87}
          />,
        ]}
      />
      <FeaturePreview
        caption='Message Interested Roommates and Arrange Viewings'
        images={[
          <Image
            key={uuidv4()}
            src='/previews/homemates/messages.webp'
            alt='test'
            width={250}
            height={486.87}
          />,
          <Image
            key={uuidv4()}
            src='/previews/homemates/messages_chat.webp'
            alt='test'
            width={250}
            height={486.87}
          />,
        ]}
      />

      <ModalSubHeading>For Those Looking for Rooms</ModalSubHeading>
      <FeaturePreview
        caption='Browse Available Rooms'
        images={[
          <Image
            key={uuidv4()}
            src='/previews/homemates/room_description_a.webp'
            alt='test'
            width={250}
            height={486.87}
          />,
          <Image
            key={uuidv4()}
            src='/previews/homemates/room_description_b.webp'
            alt='test'
            width={250}
            height={486.87}
          />,
          <Image
            key={uuidv4()}
            src='/previews/homemates/room_filters.webp'
            alt='test'
            width={250}
            height={486.87}
          />,
        ]}
      />

      <ModalSubHeading>For Roommates Managing their Space</ModalSubHeading>
      <FeaturePreview
        caption='Roommate Management'
        images={[
          <Image
            key={uuidv4()}
            src='/previews/homemates/homemail_feed.webp'
            alt='test'
            width={250}
            height={486.87}
          />,
          <Image
            key={uuidv4()}
            src='/previews/homemates/homemail_tasks.webp'
            alt='test'
            width={250}
            height={486.87}
          />,
          <Image
            key={uuidv4()}
            src='/previews/homemates/homemail_notes.webp'
            alt='test'
            width={250}
            height={486.87}
          />,
          <Image
            key={uuidv4()}
            src='/previews/homemates/homemail_calendar.webp'
            alt='test'
            width={250}
            height={486.87}
          />,
        ]}
      />
    </CardModal>
  )
}

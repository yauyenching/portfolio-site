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
            alt='Card-based roommate matching design. Shows profile photo, bio, budget, availability to start lease, common interests, and percentage match in living habits.'
            width={250}
            height={486.87}
          />,
          <Image
            key={uuidv4()}
            src='/previews/homemates/roommate_description.webp'
            alt='Profile for prospective roommate. Shows profile sections for Languages spoken, Interests (with highlights for shared interests), Living Habits (5 point Likert scale), and References.'
            width={250}
            height={486.87}
          />,
          <Image
            key={uuidv4()}
            src='/previews/homemates/roommate_message.webp'
            alt='Messaging roommates via their profile. Shows app-provided template messages.'
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
            alt='Filters for roommate listings. Has options for location preferences, budget, demographics, living habits, and interests.'
            width={250}
            height={486.87}
          />,
          <Image
            key={uuidv4()}
            src='/previews/homemates/filters_living_habits.webp'
            alt='Selecting preferences of roommates&apos; living habits. There is a 5 point Likert scale for the following lifestyle habits: smoking, drinking, cleanliness, hosting guests, sleeping time, and cooking at home. Users are able to select no preferences.'
            width={250}
            height={486.87}
          />,
          <Image
            key={uuidv4()}
            src='/previews/homemates/filters_interests.webp'
            alt='Selecting preferences for roommate interests.'
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
            alt='Overview of messages from/to prospective roommates. Can view names, verification status, date/time of last sent message, and message preview. Highlights unread messages.'
            width={250}
            height={486.87}
          />,
          <Image
            key={uuidv4()}
            src='/previews/homemates/messages_chat.webp'
            alt='Screenshot of design for a single chat with a prospective roommate. Shows receiving a request to arrange a viewing.'
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
            alt='Profile for a room (Part 1). Shows name, location, number of tenants, lease duration, and move-in availability. There is a short user-written bio, followed by info for room furniture, shared amenities, and roommates&apos; spoken languages.'
            width={250}
            height={486.87}
          />,
          <Image
            key={uuidv4()}
            src='/previews/homemates/room_description_b.webp'
            alt='Profile for a room (Part 2). Shows sections for living habits preferences (5 point Likert scale), house rules, and bios of roommates.'
            width={250}
            height={486.87}
          />,
          <Image
            key={uuidv4()}
            src='/previews/homemates/room_filters.webp'
            alt='Filters for room listings. Has options for setting location preferences match, budget match, lease availability time range, amenities, living habits, interests.'
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
            alt='Feed for roommate management app feature. Screenshot shows latest activity for new additions to shared tasks and calendar.'
            width={250}
            height={486.87}
          />,
          <Image
            key={uuidv4()}
            src='/previews/homemates/homemail_tasks.webp'
            alt='View for assigned tasks and roommates&apos; tasks.'
            width={250}
            height={486.87}
          />,
          <Image
            key={uuidv4()}
            src='/previews/homemates/homemail_notes.webp'
            alt='View for collaborative notes among roommates.'
            width={250}
            height={486.87}
          />,
          <Image
            key={uuidv4()}
            src='/previews/homemates/homemail_calendar.webp'
            alt='View of shared calendar with event title, date, time, location, and owner.'
            width={250}
            height={486.87}
          />,
        ]}
      />
    </CardModal>
  )
}

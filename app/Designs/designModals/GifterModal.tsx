import { CardModal, FeaturePreview, ModalSubHeading } from 'components/CardModal'
import {
  UseDisclosureProps,
  Text,
  UnorderedList,
  ListItem,
  useBreakpointValue,
  Box,
} from '@chakra-ui/react'
import { DESIGN_METADATA as designs } from 'app/Designs/designMetadata'
import Image from 'next/image'
import { v4 as uuidv4 } from 'uuid'

export default function GifterModal({
  isOpen,
  onClose,
}: Required<Pick<UseDisclosureProps, 'isOpen' | 'onClose'>>) {
  const previewImageWidth = useBreakpointValue({ base: 350, sm: 450, md: 600 })
  const previewImageHeight = useBreakpointValue({ base: 248.89, sm: 320, md: 426.67 })

  const background = (
    <>
      <Text>
        The season of gift-giving is all year: Valentine&apos;s Day, birthdays, anniversaries,
        celebrations, Christmas, etc. Ideating meaningful, tailored gift for your various loved ones
        all year round can quickly become exhausting and stressful. How do we make finding that
        perfect gift easier and more efficient?
      </Text>
      <Text>
        Enter <em>Gifter</em>: a gift idea inspiration community platform which curates products
        from all over the internet. With gift-recipient profiles, personalized gift recommendations,
        and digital canvases for brainstorming, users are sure to find the perfect gift for their
        loved ones!
      </Text>
      <UnorderedList>
        <ListItem>
          <b>Role:</b> UX Designer
        </ListItem>
        <ListItem>
          <b>Team Size:</b> 3
        </ListItem>
        <ListItem>
          <b>Timeline:</b> 8 weeks
        </ListItem>
      </UnorderedList>
      <Text>
        This was designed as part of a group project for the <em>Interaction Design</em> course at
        National University of Singapore.
      </Text>
    </>
  )

  return (
    <CardModal isOpen={isOpen} onClose={onClose} metadata={designs.gifter} background={background}>
      <ModalSubHeading>Homepage</ModalSubHeading>
      <FeaturePreview
        caption='See Gift Ideas at a Glance'
        imageGap={1.5}
        images={[
          <Image
            key={uuidv4()}
            src='/previews/gifter/homepage_not_logged_in.png'
            alt='Gifter homepage. Shows banner with image carousell and collection of product ideas.'
            width={previewImageWidth}
            height={previewImageHeight}
            quality={100}
          />,
        ]}
      />
      <FeaturePreview
        caption='Quickly Access Your Recipient Profiles'
        images={[
          <Image
            key={uuidv4()}
            src='/previews/gifter/homepage_logged_in.png'
            alt='Gifter homepage when user is logged in. Shows all saved gift recipient profiles and collection of product ideas.'
            width={previewImageWidth}
            height={previewImageHeight}
            quality={100}
          />,
        ]}
      />
      <ModalSubHeading>Recipient Profiles</ModalSubHeading>
      <FeaturePreview
        caption='View All Recipients and Countdowns to Their Upcoming Celebrations'
        imageGap={1.5}
        images={[
          <Image
            key={uuidv4()}
            src='/previews/gifter/all_profiles.png'
            alt='Collection of gift recipient profiles. Shows preview of their saved gift ideas and a countdown to the celebration.'
            width={previewImageWidth}
            height={previewImageHeight}
            quality={100}
          />,
        ]}
      />
      <FeaturePreview
        caption='Create a New Profile for a Gift Recipient'
        imageGap={1.5}
        images={[
          <Image
            key={uuidv4()}
            src='/previews/gifter/recipient_create_profile.png'
            alt='Modal for creating a new gift recipient profile. Has inputs for name, age, gender, and relationship to user.'
            width={previewImageWidth}
            height={previewImageHeight}
            quality={100}
          />,
          <Image
            key={uuidv4()}
            src='/previews/gifter/recipient_profile.png'
            alt='Profile for gift recipient "Xiao Hua". Has information for relationship, gender, age, birthday, budget, and interests.'
            width={previewImageWidth}
            height={previewImageHeight}
            quality={100}
          />,
        ]}
      />
      <FeaturePreview
        caption='Browse Site-recommended Gift Ideas and Save Them'
        imageGap={1.5}
        images={[
          <Image
            key={uuidv4()}
            src='/previews/gifter/recipient_browse_(filters).png'
            alt='Collection of products. On the left, there is a sidebar with filters (budget, occasion, product availability, and vicinity).'
            width={previewImageWidth}
            height={previewImageHeight}
            quality={100}
          />,
          <Image
            key={uuidv4()}
            src='/previews/gifter/recipient_saved.png'
            alt='Collection of saved product ideas for recipient gift-giving.'
            width={previewImageWidth}
            height={previewImageHeight}
            quality={100}
          />,
        ]}
      />
      <ModalSubHeading>Brainstorm</ModalSubHeading>
      <FeaturePreview
        caption='Brainstorm Gift Ideas Using a Canvas'
        imageGap={1.5}
        images={[
          <Image
            key={uuidv4()}
            src='/previews/gifter/recipient_brainstorm_boards.png'
            alt='Collection of brainstorm boards for a recipient.'
            width={previewImageWidth}
            height={previewImageHeight}
            quality={100}
          />,
          <Image
            key={uuidv4()}
            src='/previews/gifter/brainstorm_canvas.png'
            alt='Brainstorm canvas titled "Xiao Hua&apos;s Board 2". Has product images with some starred, labelled, or circled. There is a note with highlighted text "Some Flowers & Cards??".'
            width={previewImageWidth}
            height={previewImageHeight}
            quality={100}
          />,
        ]}
      />
    </CardModal>
  )
}

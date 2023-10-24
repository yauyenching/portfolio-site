import { CardModal, FeaturePreview, ModalSubHeading } from 'components/CardModal'
import { UseDisclosureProps, Text } from '@chakra-ui/react'
import { DESIGN_METADATA as designs } from 'app/Designs/designMetadata'
import Image from 'next/image'

export default function W3SchoolsModal({
  isOpen,
  onClose,
}: Required<Pick<UseDisclosureProps, 'isOpen' | 'onClose'>>) {
  const disclaimer =
    'Disclaimer: the case study was originally written as part of my university coursework.'

  return (
    <CardModal
      isOpen={isOpen}
      onClose={onClose}
      metadata={designs.w3schools}
      caseStudyDisclaimer={disclaimer}
      background={'🚧 Under Construction'}
    >
      🚧 Under Construction
    </CardModal>
  )
}

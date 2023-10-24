import { CardModal, FeaturePreview, ModalSubHeading } from 'components/CardModal'
import { UseDisclosureProps, Text } from '@chakra-ui/react'
import { DESIGN_METADATA as designs } from 'pages/sections/Designs'
import Image from 'next/image'

export default function PortfolioModal({
  isOpen,
  onClose,
}: Required<Pick<UseDisclosureProps, 'isOpen' | 'onClose'>>) {
  return (
    <CardModal
      isOpen={isOpen}
      onClose={onClose}
      metadata={designs.portfolio}
      background={'🚧 Under Construction'}
    >
      🚧 Under Construction
    </CardModal>
  )
}

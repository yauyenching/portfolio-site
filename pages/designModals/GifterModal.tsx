import { CardModal, FeaturePreview, ModalSubHeading } from 'components/CardModal'
import { UseDisclosureProps, Text } from '@chakra-ui/react'
import Image from 'next/image'

export default function GifterModal({
  isOpen,
  onClose,
}: Required<Pick<UseDisclosureProps, 'isOpen' | 'onClose'>>) {
  return (
    <CardModal
      isOpen={isOpen}
      onClose={onClose}
      designTitle='Gifter'
      prototypeLink='#'
      presentationLink='#'
      background={'🚧 Under Construction'}
    >
      🚧 Under Construction
    </CardModal>
  )
}

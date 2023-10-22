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
} from '@chakra-ui/react'

export default function ExampleModal({
  isOpen,
  onClose,
}: Required<Pick<UseDisclosureProps, 'isOpen' | 'onClose'>>) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size='4xl'>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non ipsum ex. Aliquam
            molestie ornare lacus id elementum. Phasellus mi turpis, eleifend nec feugiat non,
            consequat ut tortor. Sed id rutrum dui. Etiam sagittis consequat justo, sed molestie
            arcu consequat auctor. In finibus viverra blandit. Duis sit amet posuere massa. Integer
            pulvinar lectus et urna sagittis, id dapibus lorem tempus.
          </Text>

          <Text>
            Maecenas nec justo libero. Pellentesque vitae mauris ex. Nunc ut efficitur diam, nec
            porttitor elit. Phasellus eu arcu pharetra, cursus dolor fermentum, aliquet lacus.
            Vestibulum non lacus tincidunt, pellentesque lacus eget, lobortis augue. Phasellus lacus
            augue, molestie fermentum purus at, laoreet vestibulum lacus. Integer ipsum orci,
            finibus eget malesuada non, rutrum ac mi. Nulla lectus ante, tincidunt ut neque non,
            placerat laoreet tellus. Vivamus tempus sodales tortor, ac elementum elit sollicitudin
            a. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Vivamus vel odio in arcu porttitor suscipit vel in neque. Ut at magna quam.
          </Text>

          <Text>
            Vivamus eu nulla faucibus, aliquam ante eget, pulvinar enim. Fusce sed finibus orci, sed
            accumsan diam. Suspendisse potenti. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Etiam iaculis diam vitae mauris rhoncus, at
            laoreet nulla varius. Phasellus a lobortis risus, non hendrerit justo. Donec elementum
            nisl ac fringilla pulvinar. Fusce interdum enim vel orci hendrerit tempus. Cras ornare
            scelerisque erat, eget elementum sem auctor ut. Proin convallis, enim et cursus
            vehicula, metus sem sagittis nisi, blandit iaculis metus sem nec lacus. Nulla nec
            venenatis orci, ut pretium ante. Mauris euismod urna quis felis congue euismod eget
            vitae leo. Morbi convallis quam in purus venenatis porttitor. Fusce a feugiat quam, a
            pretium dolor.
          </Text>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

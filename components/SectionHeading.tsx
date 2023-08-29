import { Text, Heading } from '@chakra-ui/react'

interface sectionHeadingProps {
  sectionId: number,
  sectionTitle: string
}

export default function SectionHeading({ sectionId, sectionTitle }: sectionHeadingProps) {
  return (
    <Heading variant="mono" as="h1">
      <Text as="span" color="brand.accent">0{sectionId}.</Text> {sectionTitle}
    </Heading>
  )
}
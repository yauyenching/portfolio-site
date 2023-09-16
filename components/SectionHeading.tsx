import { Text, Heading, useBreakpointValue } from '@chakra-ui/react'

interface sectionHeadingProps {
  sectionId: number
  sectionTitle: string
}

export default function SectionHeading({ sectionId, sectionTitle }: sectionHeadingProps) {
  const sectionHeadingSize = useBreakpointValue({ base: '3xl' })
  return (
    <Heading variant='mono' as='h1' fontSize={sectionHeadingSize}>
      <Text as='span' color='brand.accent'>
        0{sectionId}.
      </Text>{' '}
      {sectionTitle}
    </Heading>
  )
}

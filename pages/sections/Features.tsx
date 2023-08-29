import { Box, Stack, Heading, Text, Link } from "@chakra-ui/react"
import SectionHeading from "components/SectionHeading"
import { ReactNode } from "react"

export default function Features() {
  interface FeaturesCardProps {
    publishDate: string,
    publishDescription: string,
    featureTitle: string,
    children?: ReactNode
  }

  function FeaturesCard({ publishDate, publishDescription, featureTitle, children }: FeaturesCardProps) {
    return (
      <Box
        w='100%'
        backgroundColor='brand.card'
        borderRadius={20}
        padding={25}
        boxShadow="0px 6px 30px 0px rgba(0, 0, 0, 0.08)"
      >
        <Heading fontSize="lg" mt={0} mb={2.5}>“{featureTitle}”</Heading>
        <Text variant='noSpacing' fontSize="sm">{publishDate} <Text as="span" color="brand.accent">•</Text> {publishDescription}</Text>
        {children}
      </Box>
    )
  }

  return (
    <Box w='100%' maxW='contentW'>
      <SectionHeading
        sectionId={4}
        sectionTitle='Articles & Features'
      />
      <Stack>
        <FeaturesCard
          featureTitle="Mapping the inequality of the global distribution of seasonal influenza vaccine"
          publishDate="March 8 2021"
          publishDescription="Published research article co-authored with Professor Michael T. Gastner"
        >
          <Text variant='noSpacing' fontSize="sm">Achieved top <Link>10% of research attention</Link> to date</Text>
          <Text variant='noSpacing' fontSize="sm">DOI: <Link>10.1177/0308518X21998356</Link></Text>
        </FeaturesCard>
        <FeaturesCard
          featureTitle="Everybody is talking about vaccines, but who on earth gets them?"
          publishDate="May 7 2021"
          publishDescription="Written blog post for SAGE perspectives about the accompanying research article"
        />
        <FeaturesCard
          featureTitle="Faculty-student research collaboration tackles inequality in vaccine distribution"
          publishDate="April 16 2021"
          publishDescription="Yale-NUS College featured article about Professor Gastner and I’s faculty-student collaboration"
        />
      </Stack>
    </Box>
  )
}
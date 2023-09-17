import { Box, Stack, Heading, Text, Link, LinkBox, LinkOverlay } from '@chakra-ui/react'
import SectionHeading from 'components/SectionHeading'
import { PropsWithChildren } from 'react'

export default function Features() {
  interface FeaturesCardProps {
    publishDate: string
    publishDescription: string
    featureTitle: string
    featureUrl: string
  }

  function FeaturesCard({
    publishDate,
    publishDescription,
    featureTitle,
    featureUrl,
    children,
  }: PropsWithChildren<FeaturesCardProps>) {
    return (
      <LinkBox
        w='100%'
        backgroundColor='brand.card'
        borderRadius={20}
        padding={25}
        boxShadow='0px 6px 30px 0px rgba(0, 0, 0, 0.08)'
      >
        <Heading fontSize='lg' mt={0} mb={2.5}>
          <LinkOverlay href={featureUrl}>“{featureTitle}”</LinkOverlay>
        </Heading>
        <Text as='span' fontSize='sm'>
          {publishDate}{' '}
          <Text as='span' color='brand.accent'>
            •
          </Text>{' '}
          <Text as='span'>{publishDescription}</Text>
        </Text>
        {children}
      </LinkBox>
    )
  }

  return (
    <Box w='100%'>
      <SectionHeading sectionId={4} sectionTitle='Articles & Features' />
      <Stack>
        <FeaturesCard
          featureTitle='Mapping the inequality of the global distribution of seasonal influenza vaccine'
          publishDate='March 8 2021'
          publishDescription='Published research article co-authored with Professor Michael T. Gastner'
          featureUrl='https://journals.sagepub.com/doi/10.1177/0308518X21998356'
        >
          <Text variant='noSpacing' fontSize='sm'>
            Achieved top{' '}
            <Link href='https://sage.altmetric.com/details/105472330\#score'>
              10% of research attention and 3 citations
            </Link>{' '}
            to date
          </Text>
          <Text variant='noSpacing' fontSize='sm'>
            DOI: 10.1177/0308518X21998356
          </Text>
        </FeaturesCard>
        <FeaturesCard
          featureTitle='Everybody is talking about vaccines, but who on earth gets them?'
          publishDate='May 7 2021'
          publishDescription='Written blog post for SAGE perspectives about the accompanying research article'
          featureUrl='https://perspectivesblog.sagepub.com/blog/research/everybody-is-talking-about-vaccines-but-who-on-earth-gets-them'
        />
        <FeaturesCard
          featureTitle='Faculty-student research collaboration tackles inequality in vaccine distribution'
          publishDate='April 16 2021'
          publishDescription='Yale-NUS College featured article about Professor Gastner and I’s faculty-student collaboration'
          featureUrl='https://www.yale-nus.edu.sg/story/faculty-student-research-collaboration-tackles-inequality-in-vaccine-distribution/'
        />
      </Stack>
    </Box>
  )
}

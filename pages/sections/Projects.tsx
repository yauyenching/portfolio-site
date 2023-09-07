import { Box, Card, CardHeader, CardBody, Heading, Text, Flex, CardFooter, Grid, GridItem } from '@chakra-ui/react'
import SectionHeading from 'components/SectionHeading'
import Image from 'next/image'
import { PropsWithChildren } from 'react'

export default function Projects() {
  interface ProjectsCardProp {
    imageFileName: string,
    projectTitle: string,
    techStack: string[],
  }

  function ProjectsCard({ imageFileName, projectTitle, techStack, children }: PropsWithChildren<ProjectsCardProp>) {
    return (
      <GridItem>
        <Card
          size='sm' overflow='hidden'

        >
          <CardHeader>
            <Image
              src={`/previews/${imageFileName}`}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: '170px', objectFit: 'cover' }}
              alt={`${projectTitle} ui preview`}
            />
            <Heading as="h2" size='sm' m='0 25px' textAlign='center'>{projectTitle}</Heading>
          </CardHeader>
          <CardBody textAlign="left" position="relative">
            <Text as="span" fontSize="sm">{children}</Text>
            <Heading
              variant='subtitle'
              fontSize="xs" color="brand.accent"
              textAlign='center'
              position={{ base: 'static', sm: 'absolute' }}
              px={25}
              left={0} right={0} bottom={0}
            >
              {techStack.join(', ')}
            </Heading>
          </CardBody>
          <CardFooter>
            <i className="fa-brands fa-github"></i>
            <i className="fa-solid fa-up-right-from-square"></i>
          </CardFooter>
        </Card>
      </GridItem>
    )
  }


  return (
    <Box>
      <SectionHeading
        sectionId={2}
        sectionTitle='Projects'
      />
      <Grid
        w="100%"
        justifyContent='space-between'
        gridTemplateColumns='repeat(auto-fill, minmax(250px, 1fr))'
        rowGap={15} columnGap={15}
      >
        <ProjectsCard
          imageFileName='dorm_temp_dashboard.png'
          projectTitle='Dorm Temperature Monitoring Dashboard'
          techStack={['typescript', 'react.js', 'sass', 'meteor']}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu ligula sit amet nulla tempus condimentum.
        </ProjectsCard>
        <ProjectsCard
          imageFileName='wordle_tele_bot.png'
          projectTitle='Wordle Leaderboard Telegram Bot'
          techStack={['python', 'mongodb']}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu ligula sit amet nulla tempus condimentum.
        </ProjectsCard>
        <ProjectsCard
          imageFileName='s3_pattern_recategorizer.png'
          projectTitle='Sims 3 Pattern Recategorizer Tool'
          techStack={['python']}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu ligula sit amet nulla tempus condimentum.
        </ProjectsCard>
        <ProjectsCard
          imageFileName='bandung_word_cloud.png'
          projectTitle='Bandung Bulletins Interactive Word Cloud'
          techStack={['R']}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu ligula sit amet nulla tempus condimentum.
        </ProjectsCard>
        <ProjectsCard
          imageFileName='thermostat_radial_slider.png'
          projectTitle='Thermostat Radial Slider'
          techStack={['React.js']}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu ligula sit amet nulla tempus condimentum.
        </ProjectsCard>
      </Grid>
    </Box>
  )
}
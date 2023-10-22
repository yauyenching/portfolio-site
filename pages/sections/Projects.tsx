import {
  Box,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Text,
  Flex,
  CardFooter,
  Grid,
  GridItem,
  Link,
  LinkOverlay,
  LinkBox,
  useColorModeValue,
  HStack,
  Stack,
} from '@chakra-ui/react'
import SectionHeading from 'components/SectionHeading'
import SkillTag from 'components/SkillTag'
import Image from 'next/image'
import { PropsWithChildren } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { motion } from 'framer-motion'
import GitHubIcon from 'public/assets/GitHubIcon'
import ExternalLink from 'public/assets/ExternalLink'

export default function Projects() {
  interface ProjectsCardProp {
    imageFileName: string
    projectTitle: string
    techStack: string[]
    githubLink: string
    externalLink?: string
    downloads?: string
    downloadLink?: string
    githubStars?: string
  }

  function ProjectsCard({
    imageFileName,
    projectTitle,
    techStack,
    githubLink,
    externalLink,
    downloads,
    downloadLink,
    githubStars,
    children,
  }: PropsWithChildren<ProjectsCardProp>) {
    const cardBoxShadow = useColorModeValue('rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.25)')

    return (
      <GridItem>
        <LinkBox>
          <Card
            as={motion.div}
            role='group'
            size='sm'
            overflow='hidden'
            whileHover={{
              scale: 1.035,
              boxShadow: `0px 6px 36px 8px ${cardBoxShadow}`,
              transition: { duration: 0.25, ease: 'easeInOut' },
            }}
          >
            <CardHeader>
              <Image
                src={`/previews/${imageFileName}`}
                width={0}
                height={0}
                sizes='100vw'
                style={{ width: '100%', height: '170px', objectFit: 'cover' }}
                alt={`${projectTitle} ui preview`}
              />
              <Heading as='h2' size='sm' m='0 25px' textAlign='center'>
                <LinkOverlay href={githubLink}>{projectTitle}</LinkOverlay>
              </Heading>
            </CardHeader>
            <CardBody>
              <Text as='span' fontSize='sm'>
                {children}
              </Text>
              {(downloads || githubStars) && (
                <Text textAlign='left' fontSize='sm' mb={0}>
                  {downloads && (
                    <>
                      {!downloadLink ? (
                        downloads
                      ) : (
                        <Link variant='noULine' href={downloadLink}>
                          <i className='fa-solid fa-download' style={{ marginRight: '5px' }} />
                          {downloads}
                        </Link>
                      )}
                    </>
                  )}
                  {githubStars && (
                    <>
                      <i
                        className='fa-solid fa-star'
                        style={{
                          marginRight: '5px',
                          marginLeft: downloads ? 15 : 0,
                        }}
                      />
                      {githubStars}
                    </>
                  )}
                </Text>
              )}
            </CardBody>
            <CardFooter>
              <Box mb='5px'>
                {techStack.map((skill, i) => (
                  <SkillTag key={uuidv4()}>{skill}</SkillTag>
                ))}
              </Box>
              <HStack color='brand.title' justify='center' spacing='0.5rem' flexDir='row-reverse'>
                {externalLink && (
                  <Link className='hyperlink' href={externalLink}>
                    <ExternalLink boxSize='1.7em' />
                  </Link>
                )}
                <Link
                  href={githubLink}
                  _groupHover={{ color: 'brand.accent' }}
                  sx={{
                    '.hyperlink:hover ~ &': {
                      color: 'brand.title',
                    },
                  }}
                >
                  <GitHubIcon boxSize='1.8em' />
                </Link>
              </HStack>
            </CardFooter>
          </Card>
        </LinkBox>
      </GridItem>
    )
  }

  return (
    <Box w='100%'>
      <SectionHeading sectionId={2} sectionTitle='Projects' />
      <Grid
        // w="100%"
        justifyContent='space-between'
        gridTemplateColumns='repeat(auto-fill, minmax(250px, 1fr))'
        rowGap={15}
        columnGap={15}
      >
        <ProjectsCard
          imageFileName='s3_pattern_recategorizer.webp'
          projectTitle='Sims 3 Pattern Recategorizer Tool'
          techStack={['Python']}
          githubLink='https://github.com/yauyenching/sims-3-pattern-recategorizer'
          downloads='430+ installs'
          downloadLink='https://www.simfileshare.net/download/3444496'
        >
          Desktop app executable that edits Sims 3 binary files to recategorize pattern custom
          content in-game.
        </ProjectsCard>
        <ProjectsCard
          imageFileName='dorm_temp_dashboard.webp'
          projectTitle='Dorm Temperature Monitoring Dashboard'
          techStack={['Typescript', 'React.js', 'SASS', 'Meteor.js']}
          githubLink='https://github.com/yauyenching/dorm-temp-dashboard'
          externalLink='https://dorm-temp-dashboard.meteorapp.com/'
        >
          Progressive web app (PWA) for a mock dorm temperature monitoring dashboard. Features
          responsive design, data filters, and a pannable and zoomable time graph.
        </ProjectsCard>
        <ProjectsCard
          imageFileName='wordle_tele_bot.webp'
          projectTitle='Wordle Leaderboard Telegram Bot'
          techStack={['Python', 'MongoDB']}
          githubLink='https://github.com/yauyenching/wordle-tele-bot'
        >
          Telegram bot that parses Wordle results, calculates user statistics (average # of guesses,
          total games, streak), and stores the aggregated data using MongoDB. Designed to track and
          display leaderboards in group chats for social play.
        </ProjectsCard>
        <ProjectsCard
          imageFileName='bandung_word_cloud.webp'
          projectTitle='Bandung Bulletins Interactive Word Cloud'
          techStack={['R']}
          githubLink='https://github.com/yauyenching/bandung-bulletins'
          externalLink='https://yauyenching.shinyapps.io/bandung-bulletins/'
        >
          Interactive word cloud with data filters and user input to remove custom stop words. This
          digital humanities project aims to provide a visual text analysis of the 1955 Bandung
          Asian-African Conference bulletins.
        </ProjectsCard>
        <ProjectsCard
          imageFileName='thermostat_radial_slider.webp'
          projectTitle='Thermostat Radial Slider'
          techStack={['React.js']}
          githubLink='https://github.com/yauyenching/thermostat-radial-slider'
          externalLink='https://yauyenching.github.io/thermostat-radial-slider/'
        >
          Customized radial slider UI component for a mock smart thermostat interface with visible
          state changes and scroll and drag controls.
        </ProjectsCard>
      </Grid>
    </Box>
  )
}

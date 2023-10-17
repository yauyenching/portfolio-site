import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Heading,
  UnorderedList,
  ListItem,
  useBreakpointValue,
  Flex,
  Text,
  Link,
  TabIndicator,
} from '@chakra-ui/react'
import SectionHeading from 'components/SectionHeading'
import SkillTag from 'components/SkillTag'
import { PropsWithChildren, useRef, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { motion, AnimatePresence } from 'framer-motion'

const routesAnimationVariants = {
  hidden: {
    opacity: 0,
    // y: '200px',
  },
  visible: {
    opacity: 1,
    // y: 0,
    transition: { delay: 0.1, duration: 0.2, style: 'easeOut' },
  },
  exit: {
    // y: '-200px',
    opacity: 0,
    transition: {
      duration: 0.1,
      // style: 'easeOut'
    },
  },
}

export default function Experience() {
  interface JobExperienceTabPanelProps {
    jobTitle: string
    company: string
    employmentDateRange: string
    skills: string[]
    // changeHeight: (_: string) => void
  }

  function JobExperienceTabPanel({
    jobTitle,
    company,
    employmentDateRange,
    skills,
    // changeHeight,
    children,
  }: PropsWithChildren<JobExperienceTabPanelProps>) {
    // const currentPanelRef = useRef<HTMLDivElement>(null)
    // console.log(currentPanelRef.current?.clientHeight);
    // useEffect(() => {
    //   changeHeight(currentPanelRef.current?.clientHeight + 'px')
    // })
    return (
      <TabPanel
        // as={AnimatePresence} initial={false} mode='wait'
      >
        <Box
          // as={motion.div}
          // variants={routesAnimationVariants}
          // initial='hidden'
          // animate='visible'
          // exit='exit'
          // pos='absolute'
          // ref={currentPanelRef}
          // padding={{ base: '10px', sm: '10px 25px' }}
        >
          <Heading as='h2' fontSize='lg' m={0}>
            {jobTitle} <span style={{ fontWeight: 'normal' }}>@ </span>
            {company}
          </Heading>
          <Heading as='h3' variant='subtitle' fontSize='md'>
            {employmentDateRange}
          </Heading>
          <Box textAlign='left'>
            {children}
            {skills.map((skill) => (
              <SkillTag key={uuidv4()}>{skill}</SkillTag>
            ))}
          </Box>
        </Box>
      </TabPanel>
    )
  }

  // const [height, setHeight] = useState('450px')

  return (
    <Box>
      <SectionHeading sectionId={1} sectionTitle='Experience' />
      <Tabs
        orientation={useBreakpointValue({ base: 'horizontal', sm: 'vertical' })}
        isLazy
        pos='relative'
        // maxW='90vw'
        maxW='825px'
      >
        <TabList>
          <Tab>Koru Partners</Tab>
          <Tab>AirAsia</Tab>
          <Tab>Yale-NUS</Tab>
        </TabList>
        <TabIndicator
          mt='-1.5px'
          height='2.5px'
          width='2.5px'
          bg='brand.title'
          borderRadius='2px'
        />

        <TabPanels>
          <JobExperienceTabPanel
            jobTitle='Junior Software Developer'
            company='Koru Partners'
            employmentDateRange='Feb 2023 - July 2023'
            skills={[
              'Django',
              'Python',
              'MySQL',
              'AWS',
              'TypeScript/JavaScript',
              'HTML/CSS',
              'PHP',
              'Git',
              'Figma',
              'WordPress',
            ]}
            // changeHeight={setHeight}
          >
            <UnorderedList>
              <ListItem>
                Designed and developed internal superapp with user authentication, CRUD (Create,
                Read, Update, Delete) operations for company data, and a dashboard for monitoring
                and summarizing daily operational logs.
              </ListItem>
              <ListItem>
                Engineered Python bots automating tedious internal processes such as sending of
                recruitment emails and creation of Asana tasks, resulting in weekly time savings of
                8-10 hours for the HR team.
              </ListItem>
              <ListItem>
                Collaborated with cross-functional teams to gather product requirements and user
                feedback.
              </ListItem>
              <ListItem>
                Maintained codebase by investigating and solving user-reported bugs.
              </ListItem>
            </UnorderedList>
          </JobExperienceTabPanel>
          <JobExperienceTabPanel
            jobTitle='Product Analyst Intern'
            company='AirAsia'
            employmentDateRange='June 2021 - Sep 2021'
            skills={[
              'Python',
              'Data Analysis',
              'Data Visualization',
              'User Research',
              'Competitor Analysis',
              'Survey Design',
              'Market Research',
            ]}
            // changeHeight={setHeight}
          >
            <UnorderedList>
              <ListItem>
                Analyzed user data in Python to identify key insights for demographics and behavior
                on newly launched EdTech platform.
              </ListItem>
              <ListItem>
                Designed and executed user testing survey on 680 users to gather feedback and
                identify bottlenecks in low purchase conversion of 20%.
              </ListItem>
              <ListItem>
                Conducted in-depth competitor research, gathering and analyzing market intelligence
                to identify key strengths, weaknesses, opportunities, and threats (SWOT analysis)
                and presented to senior management.
              </ListItem>
              <ListItem>
                Identified market opportunity to target key customer segment of 1000+ university
                students and led business pitch and communications with external stakeholders.
              </ListItem>
            </UnorderedList>
          </JobExperienceTabPanel>
          <JobExperienceTabPanel
            jobTitle='Computational Research Assistant'
            company='Yale-NUS College'
            employmentDateRange='May 2020 - Apr 2021'
            skills={['R', 'JavaScript', 'D3.js', 'Docker', 'Linux']}
            // changeHeight={setHeight}
          >
            <UnorderedList>
              <ListItem>
                Implemented world map visualization feature on cartogram-generating website{' '}
                <Link href='https://go-cart.io'>go-cart.io</Link>.
              </ListItem>
              <ListItem>
                Utilized D3.js to smooth website cartogram transformation animations by 20%.
              </ListItem>
              {/* <ListItem>
                    Wrote and published a topical{' '}
                    <Link href='https://journals.sagepub.com/doi/10.1177/0308518X21998356'>
                      research article
                    </Link>{' '}
                    and{' '}
                    <Link href='https://perspectivesblog.sagepub.com/blog/research/everybody-is-talking-about-vaccines-but-who-on-earth-gets-them'>
                      blog post
                    </Link>{' '}
                    about global vaccination distribution inequality in 2021 with{' '}
                    <Link href='https://sage.altmetric.com/details/105472330#score'>
                      3 citations and top 11% of research attention to date
                    </Link>
                    .
                  </ListItem> */}
            </UnorderedList>
          </JobExperienceTabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

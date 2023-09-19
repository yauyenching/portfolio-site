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
} from '@chakra-ui/react'
import SectionHeading from 'components/SectionHeading'
import SkillTag from 'components/SkillTag'
import { PropsWithChildren } from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function Experience() {
  interface JobExperienceItemProps {
    jobTitle: string
    company: string
    employmentDateRange: string
    skills: string[]
  }

  function JobExperienceItem({
    jobTitle,
    company,
    employmentDateRange,
    skills,
    children,
  }: PropsWithChildren<JobExperienceItemProps>) {
    return (
      <Box>
        <Heading as='h2' fontSize='lg' m={0}>
          {jobTitle} <span style={{ fontWeight: 'normal' }}>@ </span>
          {company}
        </Heading>
        <Heading as='h3' variant='subtitle' fontSize='md'>
          {employmentDateRange}
        </Heading>
        <Box textAlign='left'>
          {children}
          {skills.map((skill, i) => (
            <SkillTag key={uuidv4()}>{skill}</SkillTag>
          ))}
        </Box>
      </Box>
    )
  }

  return (
    <Flex alignItems='center' flexDir='column'>
      <Box>
        <SectionHeading sectionId={1} sectionTitle='Experience' />
        <Tabs orientation={useBreakpointValue({ base: 'horizontal', sm: 'vertical' })} maxW={825}>
          <TabList>
            <Tab>Koru Partners</Tab>
            <Tab>AirAsia</Tab>
            <Tab>Yale-NUS</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <JobExperienceItem
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
              >
                <UnorderedList>
                  <ListItem>
                    Designed and developed internal superapp with user authentication, CRUD (Create,
                    Read, Update, Delete) operations for company data, and a dashboard for
                    monitoring and summarizing daily operational logs.
                  </ListItem>
                  <ListItem>
                    Engineered Python bots automating tedious internal processes such as sending of
                    recruitment emails and creation of Asana tasks, resulting in weekly time savings
                    of 8-10 hours for the HR team.
                  </ListItem>
                  <ListItem>
                    Collaborated with cross-functional teams to gather product requirements and user
                    feedback.
                  </ListItem>
                  <ListItem>
                    Maintained codebase by investigating and solving user-reported bugs.
                  </ListItem>
                </UnorderedList>
              </JobExperienceItem>
            </TabPanel>
            <TabPanel>
              <JobExperienceItem
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
              >
                <UnorderedList>
                  <ListItem>
                    Analyzed user data in Python to identify key insights for demographics and
                    behavior on newly launched EdTech platform.
                  </ListItem>
                  <ListItem>
                    Designed and executed user testing survey on 680 users to gather feedback and
                    identify bottlenecks in low purchase conversion of 20%.
                  </ListItem>
                  <ListItem>
                    Conducted in-depth competitor research, gathering and analyzing market
                    intelligence to identify key strengths, weaknesses, opportunities, and threats
                    (SWOT analysis) and presented to senior management.
                  </ListItem>
                  <ListItem>
                    Identified market opportunity to target key customer segment of 1000+ university
                    students and led business pitch and communications with external stakeholders.
                  </ListItem>
                </UnorderedList>
              </JobExperienceItem>
            </TabPanel>
            <TabPanel>
              <JobExperienceItem
                jobTitle='Computational Research Assistant'
                company='Yale-NUS College'
                employmentDateRange='May 2020 - Apr 2021'
                skills={['R', 'JavaScript', 'D3.js', 'Docker', 'Linux']}
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
              </JobExperienceItem>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Flex>
  )
}

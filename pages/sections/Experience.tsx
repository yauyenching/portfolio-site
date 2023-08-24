import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator, Box, Heading } from '@chakra-ui/react'
import styles from './Experience.module.scss'
import SectionHeading from 'components/SectionHeading'
import { PropsWithChildren } from 'react'

export default function Experience() {
  interface JobExperienceItemProps {
    jobTitle: string,
    company: string,
    employmentDateRange: string,
  }

  function JobExperienceItem({ jobTitle, company, employmentDateRange, children }: PropsWithChildren<JobExperienceItemProps>) {
    return (
      <Box>
        <Heading as='h2' fontSize='lg' m={0}>{jobTitle} <span style={{'fontWeight': 'normal'}}>@ </span>{company}</Heading>
        <Heading as='h3' variant='subtitle' fontSize='md'>{employmentDateRange}</Heading>
        <Box className={styles.description}>{children}</Box>
      </Box>
    )
  }

  return (
    <Box>
      <SectionHeading
        sectionId={1}
        sectionTitle='Experience'
      />
      <Tabs orientation="vertical" w={680}>
        <TabList>
          <Tab className={styles.tab}>Koru Partners</Tab>
          <Tab className={styles.tab}>AirAsia</Tab>
          <Tab className={styles.tab}>Yale-NUS</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <JobExperienceItem
              jobTitle='Junior Software Developer'
              company='Koru Partners'
              employmentDateRange='Feb 2023 - Jul 2023'
            >
              <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu ligula sit amet nulla tempus condimentum. </li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu ligula sit amet nulla tempus condimentum. </li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu ligula sit amet nulla tempus condimentum. </li>
              </ul>
            </JobExperienceItem>
          </TabPanel>
          <TabPanel>
            <JobExperienceItem
              jobTitle='Product Analyst Intern'
              company='AirAsia'
              employmentDateRange='Jun 2021 - Sep 2021'
            >
              <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu ligula sit amet nulla tempus condimentum. </li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu ligula sit amet nulla tempus condimentum. </li>
              </ul>
            </JobExperienceItem>
          </TabPanel>
          <TabPanel>
            <JobExperienceItem
              jobTitle='Computational and Data Sciences Research Assistant'
              company='Yale-NUS College'
              employmentDateRange='May 2020 - Apr 2021'
            >
              <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu ligula sit amet nulla tempus condimentum. </li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu ligula sit amet nulla tempus condimentum. </li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu ligula sit amet nulla tempus condimentum. </li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu ligula sit amet nulla tempus condimentum. </li>
              </ul>
            </JobExperienceItem>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}
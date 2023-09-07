import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Heading, UnorderedList, ListItem, useBreakpointValue, Flex } from '@chakra-ui/react'
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
        <Heading as='h2' fontSize='lg' m={0}>{jobTitle} <span style={{ 'fontWeight': 'normal' }}>@ </span>{company}</Heading>
        <Heading as='h3' variant='subtitle' fontSize='md'>{employmentDateRange}</Heading>
        <Box textAlign="left">{children}</Box>
      </Box>
    )
  }

  return (
    <Flex alignItems="center" flexDir="column">
      <Box>
        <SectionHeading
          sectionId={1}
          sectionTitle='Experience'
        />
        <Tabs orientation={useBreakpointValue({ base: 'horizontal', sm: 'vertical' })} maxW={680}>
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
                employmentDateRange='Feb 2023 - Jul 2023'
              >
                <UnorderedList>
                  <ListItem>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu ligula sit amet nulla tempus condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu ligula sit amet nulla tempus condimentum.</ListItem>
                  <ListItem>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu ligula sit amet nulla tempus condimentum. </ListItem>
                  <ListItem>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu ligula sit amet nulla tempus condimentum. </ListItem>
                </UnorderedList>
              </JobExperienceItem>
            </TabPanel>
            <TabPanel>
              <JobExperienceItem
                jobTitle='Product Analyst Intern'
                company='AirAsia'
                employmentDateRange='Jun 2021 - Sep 2021'
              >
                <UnorderedList>
                  <ListItem>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu ligula sit amet nulla tempus condimentum. </ListItem>
                  <ListItem>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu ligula sit amet nulla tempus condimentum. </ListItem>
                </UnorderedList>
              </JobExperienceItem>
            </TabPanel>
            <TabPanel>
              <JobExperienceItem
                jobTitle='Computational and Data Sciences Research Assistant'
                company='Yale-NUS College'
                employmentDateRange='May 2020 - Apr 2021'
              >
                <UnorderedList>
                  <ListItem>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu ligula sit amet nulla tempus condimentum. </ListItem>
                  <ListItem>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu ligula sit amet nulla tempus condimentum. </ListItem>
                  <ListItem>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu ligula sit amet nulla tempus condimentum. </ListItem>
                  <ListItem>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu ligula sit amet nulla tempus condimentum. </ListItem>
                </UnorderedList>
              </JobExperienceItem>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Flex>
  )
}
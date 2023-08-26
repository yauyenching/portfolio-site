import { Flex, Heading, Text, Button, Box } from "@chakra-ui/react"
import SectionHeading from "components/SectionHeading"

export default function Contact() {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <SectionHeading
        sectionId={5}
        sectionTitle='Contact'
      />
      <Heading m={0} fontSize="6xl" variant="gradient">get in touch</Heading>
      <Box textAlign="center">
        <Text variant="noSpacing">I am currently open to Software Engineering opportunities.</Text>
        <Text variant="noSpacing">Whether you want to work together, or say hi, my inbox is always open! :-)</Text>
      </Box>
      <Button
        variant="gradient"
        mt={50} mb={30}
        p="25px 30px"
        fontSize="lg"
      >
        <Box as="span" letterSpacing="0.02em">Say Hello</Box>
      </Button>
      <Flex fontSize="2xl" columnGap={15} color="brand.title">
        <i className="fa-brands fa-github"></i>
        <i className="fa-brands fa-linkedin"></i>
      </Flex>
    </Flex>
  )
}
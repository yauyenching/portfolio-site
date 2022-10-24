import React from "react"
import { Flex, Stack, Box, Text, Link, Checkbox, useColorModeValue } from "@chakra-ui/react"
import styles from './Header.module.scss'
import variables from '../styles/variables.module.scss'
import { colorModeProps } from "./props"
import DayNightToggle from "./DayNightToggle"

export default function Header({ colorMode, toggleColorMode }: colorModeProps) {
  const toggleBackground = useColorModeValue(styles.lightBg, styles.darkBg)
  return (
    <Flex
      bg="red"
      color="white"
      w="100%" h="50px"
      position="fixed"
      top="0" left="0"
      align="center" justify="center"
      background={variables.bg}
    >
      <Flex w='100%' maxW={variables.contentWidth} justifyContent='space-between'>
        <Box className={styles.logo} position='relative'>
          <div className={styles.logoText}>
            <Text as="span" color='#fff'>yc</Text>
            <Text as="span" color='#FFA68A'>.</Text>
          </div>
        </Box>
        <Flex w='100%' maxW='662px' justifyContent='space-between'>
          <a className={styles.link}>Projects</a>
          <a className={styles.link}>Designs</a>
          <a className={styles.link}>Experience</a>
          <a className={styles.link}>Features</a>
          <a className={styles.link}>Contact</a>
        </Flex>
        {/* https://daily-dev-tips.com/posts/creating-day-night-css-only-toggle-switch/ */}
        <DayNightToggle
          colorMode={colorMode}
          toggleColorMode={toggleColorMode}
        />
        {/* <input id="toggle" className={styles.toggleCheckbox} />
        <label htmlFor="toggle" className={styles.toggle}>
          <span className={styles.toggleBackground}/>
        </label> */}
      </Flex>
    </Flex>
  )
}
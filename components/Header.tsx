import React from "react"
import { Flex, Stack, Box, Text, Link, Checkbox, useColorModeValue, forwardRef, useStyleConfig, StyleFunctionProps, defineStyleConfig, LinkProps } from "@chakra-ui/react"
import styles from './Header.module.scss'
import variables from '../styles/variables.module.scss'
import { colorModeProps } from "./props"
import DayNightToggle from "./DayNightToggle"
import { NavBarProps } from "../pages/theme"

const NavBar = forwardRef<NavBarProps, 'div'>((props, ref) => {
  const { size, variant, ...rest } = props;
  const styles = useStyleConfig("NavBar", { size, variant });

  return <Flex ref={ref} __css={styles} {...rest} />;
});

export default function Header({ colorMode, toggleColorMode }: colorModeProps) {
  return (
    <NavBar>
      <Flex w='100%' maxW={variables.contentWidth} justifyContent='space-between'>
        <Box className={styles.logo} position='relative'>
          <div className={styles.logoText}>
            <Text as="span" color='#fff'>yc</Text>
            <Text as="span" color='#FFA68A'>.</Text>
          </div>
        </Box>
        <Flex 
          w='100%' maxW='662px' justifyContent='space-between'
        >
          <Link>Experience</Link>
          <Link>Projects</Link>
          <Link>Designs</Link>
          <Link>Features</Link>
          <Link>Contact</Link>
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
    </NavBar>
  )
}
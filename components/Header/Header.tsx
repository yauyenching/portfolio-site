import React, { useEffect } from "react"
import { Flex, Stack, Box, Text, Link, Checkbox, useColorModeValue, forwardRef, useStyleConfig, StyleFunctionProps, defineStyleConfig, LinkProps } from "@chakra-ui/react"
import styles from './Header.module.scss'
import base from 'styles/base.module.scss'
import { colorModeProps } from "../props"
import DayNightToggle from "./DayNightToggle"
import dynamic from "next/dynamic"

export default function Header({ colorMode, toggleColorMode }: colorModeProps) {
  type HeaderLinkProps = {
    linkText: String
  }

  function HeaderLink({ linkText }: HeaderLinkProps) {
    const changeOverlayPos = (elem: HTMLAnchorElement) => {
      const overlay = document.getElementById('overlay');
      const position = elem.getBoundingClientRect();
      overlay!.style.left = elem.offsetLeft + 'px';
      overlay!.style.width = position.width + 'px';
    }

    const addOverlay = (elem: HTMLAnchorElement) => {
      const overlay = document.getElementById('overlay');
      changeOverlayPos(elem);
      overlay?.classList.add('active');
    }

    const removeOverlay = (elem: HTMLAnchorElement) => {
      const overlay = document.getElementById('overlay');
      overlay?.classList.remove('active');
    } 
    
    return (
      <Link 
        className={styles.link}
        onMouseOver={(e) => addOverlay(e.target as HTMLAnchorElement)} 
        onMouseLeave={(e) => removeOverlay(e.target as HTMLAnchorElement)}
      >
        {linkText}
      </Link>
    )
  }
  
  // TODO: add persistent hover color and overlay position for active section
  return (
    <Flex className={styles.navbar}>
      <Flex w='100%' maxW={base.contentWidth} justifyContent='space-between'>
        <Box className={styles.logo} position='relative'>
          <div className={styles.logoText}>
            <Text as="span" color='#fff'>yc</Text>
            <Text as="span" color='#FFA68A'>.</Text>
          </div>
        </Box>
        <Flex 
          w='100%' maxW='662px' justifyContent='space-between' position={'relative'}
        >
          <div id="overlay"/>
          {/* TODO: Find how use inner text for params */}
          <HeaderLink linkText={"Experience"}/>
          <HeaderLink linkText={"Projects"}/>
          <HeaderLink linkText={"Designs"}/>
          <HeaderLink linkText={"Features"}/>
          <HeaderLink linkText={"Contact"}/>
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
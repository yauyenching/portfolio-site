import React from 'react'
import { Flex } from '@chakra-ui/react'
import { colorModeProps } from './props'
import styles from './DayNightToggle.module.scss'

export default function DayNightToggle({ colorMode, toggleColorMode }: colorModeProps) {
  return (
    <div
      onClick={toggleColorMode}
      className={`${styles.toggle} ${colorMode === 'dark' ? styles.dark : styles.light}`}
    >
      <div className={styles.toggleCircle} />
    </div>
  )
}
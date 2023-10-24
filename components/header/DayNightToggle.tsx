import React from 'react'
import { Box } from '@chakra-ui/react'
import { colorModeProps } from '../props'
import styles from './DayNightToggle.module.scss'
import NightSparkle from 'public/assets/NightSparkle'
import DayCloud from 'public/assets/Cloud'

export default function DayNightToggle({ colorMode, toggleColorMode }: colorModeProps) {
  const colorModeStyle: string = colorMode === 'dark' ? styles.dark : styles.light
  const lightModeVisibility = (index: number) =>
    colorMode === 'dark' ? styles['starVisible' + index] : styles.invisible
  const darkModeVisibility = (index: number) =>
    colorMode === 'light' ? styles['cloudVisible' + index] : styles.invisible

  return (
    <Box onClick={toggleColorMode} className={`${styles.toggle} ${colorModeStyle}`} tabIndex={0}>
      <Box className={styles.toggleCircle} />
      <NightSparkle className={lightModeVisibility(1)} width={9} height={10} left={8} top={14} />
      <NightSparkle
        className={lightModeVisibility(2)}
        width={5.5}
        height={4}
        left={18.5}
        top={9.5}
      />
      <NightSparkle
        className={lightModeVisibility(3)}
        width={7}
        height={6.5}
        left={21.3}
        top={18.4}
      />
      <DayCloud className={darkModeVisibility(1)} left={34} top={16} />
      <DayCloud className={darkModeVisibility(2)} left={49} top={8} />
    </Box>
  )
}

import { Box, UseDisclosureProps } from '@chakra-ui/react'

// https://stackoverflow.com/questions/69327990/how-can-i-make-one-property-non-optional-in-a-typescript-type
type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] }

// Animated Hamburger Menu from Flippin' burgers by Mikael Ainalem
// https://codepen.io/ainalem/pen/LJYRxz
export default function HamburgerMenu({
  onOpen,
  isOpen,
}: WithRequired<UseDisclosureProps, 'onOpen'>) {
  return (
    <Box stroke='brand.body' tabIndex={0}>
      <svg
        className={'ham hamRotate ham8'.concat(isOpen ? ' active' : '')}
        viewBox='0 0 100 100'
        width='40'
        onClick={(e) => onOpen()}
      >
        <path
          className='line top'
          d='m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20'
        />
        <path className='line middle' d='m 30,50 h 40' />
        <path
          className='line bottom'
          d='m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20'
        />
      </svg>
    </Box>
  )
}

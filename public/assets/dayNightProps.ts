import { SVGProps } from 'react'

export interface DayNightSVGProps extends Partial<SVGProps<SVGSVGElement>> {
  left: number
  top: number
}
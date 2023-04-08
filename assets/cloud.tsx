import { SVGProps } from "../components/props"

const DayCloud = ({ className, left, top }: Partial<SVGProps>) => {
  return (
    <svg 
      className={className}
      style={{ position: 'absolute', 
               left: `${left}px`, top: `${top}px` }}
      width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="5" cy="4" r="3" fill="#EEF1F0"/>
      <circle cx="8.5" cy="3.5" r="3.5" fill="#EEF1F0"/>
      <rect y="4" width="14" height="6" rx="3" fill="#EEF1F0"/>
    </svg>
  )
}

export default DayCloud

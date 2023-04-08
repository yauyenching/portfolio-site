import { SVGProps } from "../components/props"

const NightSparkle = ({ className, width, height, left, top }: SVGProps) => {
  return (
    <svg 
      className={className}
      style={{ width: width, height: height, position: 'absolute', 
               left: `${left}px`, top: `${top}px` }}
      width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5.92517 3.20404L7.70484 3.91025C8.12561 4.07723 8.12561 4.67277 7.70484 4.83975L5.92517 5.54596C5.79798 5.59643 5.69704 5.69683 5.64587 5.82373L4.92972 7.59989C4.76144 8.01726 4.17056 8.01726 4.00227 7.59989L3.28613 5.82373C3.23496 5.69683 3.13402 5.59643 3.00683 5.54596L1.22716 4.83975C0.806388 4.67277 0.806388 4.07723 1.22716 3.91025L3.00683 3.20404C3.13402 3.15357 3.23496 3.05317 3.28613 2.92627L4.00227 1.15011C4.17056 0.732743 4.76144 0.732744 4.92972 1.15011L5.64587 2.92627C5.69704 3.05317 5.79798 3.15357 5.92517 3.20404Z" fill="#C8D8D7"/>
    </svg>
  )
}

export default NightSparkle


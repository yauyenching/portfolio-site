import styles from './SectionHeading.module.scss'

interface sectionHeadingProps {
  sectionId: number,
  sectionTitle: string
}

export default function SectionHeading({ sectionId, sectionTitle }: sectionHeadingProps) {
  return (
    <h1>
      <span className={styles.title}>
        <span className={styles.id}>0{sectionId}.</span> {sectionTitle}
      </span>
    </h1>
  )
}
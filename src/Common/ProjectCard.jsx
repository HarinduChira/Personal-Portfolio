import styles from '../Sections/Projects/ProjectsStyles.module.css'

function ProjectCard({src, link , title , description}) {
  return (
    <a href={link} target='_blank' className={styles.projectsContainer}>
        <img src={src} className='hover' alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
    </a>
  )
}

export default ProjectCard

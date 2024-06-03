import styles from './ProjectsStyles.module.css'
import health_harbor from '../../assets/HealthHarbor.png'
import ProjectCard from '../../Common/ProjectCard'


function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div>
            <ProjectCard
                src={health_harbor} 
                link="https://github.com/HarinduChira/health_harbor.git"
                title="Health Harbor"
                description="A web application to buy pharmaceutical products online."
            />
            <ProjectCard 
                src={health_harbor} 
                link="https://github.com/HarinduChira/health_harbor.git"
                title="Health Harbor"
                description="A web application to buy pharmaceutical products online."
            />
            <ProjectCard 
                src={health_harbor} 
                link="https://github.com/HarinduChira/health_harbor.git"
                title="Health Harbor"
                description="A web application to buy pharmaceutical products online."
            />
            <ProjectCard 
                src={health_harbor} 
                link="https://github.com/HarinduChira/health_harbor.git"
                title="Health Harbor"
                description="A web application to buy pharmaceutical products online."
            />
        </div>
    </section>
  )
}

export default Projects

import {
  Container,
  ProjectCard,
  ProjectImage,
  ProjectItem,
  ProjectsSection
} from './style'
import Aos from 'aos'
import { useEffect } from 'react'
import 'aos/dist/aos.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import tub_1 from '../../Pics//2.jpg'
import tub_2 from '../../Pics/cervejarias.jpg'
import tub_3 from '../../Pics/dorna.jpg'
import tub_4 from '../../Pics/laticinios.jpg'

function Projetos() {
  useEffect(() => {
    Aos.init()
  }, [])

  const projects = [
    { id: 1, name: 'Projeto 1', image: `${tub_1}` },
    { id: 2, name: 'Projeto 2', image: `${tub_2}` },
    { id: 3, name: 'Projeto 3', image: `${tub_3}` },
    { id: 4, name: 'Projeto 3', image: `${tub_4}` }
  ]

  return (
    <Container>
      <ProjectsSection>
        {projects.map((project) => (
          <ProjectItem key={project.id}>
            <ProjectImage src={project.image} alt={project.name} />
            <ProjectCard className="project-card">{project.name}</ProjectCard>
          </ProjectItem>
        ))}
      </ProjectsSection>
    </Container>
  )
}

export default Projetos

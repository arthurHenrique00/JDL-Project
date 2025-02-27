import styled from 'styled-components'
import background from '../../Pics/caldeiraria-1.jpg'

export const Container = styled.div`
  background-image: url('${background}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  padding-bottom: 50px;
`
export const ProjectsSection = styled.section`
  display: flex;
  justify-content: space-around;
  gap: 20px;
  flex-wrap: wrap;
  margin: 50px 0;
`

export const ProjectItem = styled.div`
  position: relative;
  width: 300px;
  height: 200px;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  &:hover .project-card {
    transform: translateY(0);
    opacity: 1;
  }
`

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease;
`

export const ProjectCard = styled.div`
  position: absolute;
  bottom: -100%;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 15px;
  text-align: center;
  font-size: 18px;
  transition: all 0.3s ease;
  border-radius: 8px 8px 0 0;
  opacity: 0; /* Card começa invisível */
`

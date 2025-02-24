import { Container } from './style'
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

  return (
    <Container>
      <h1>Projetos</h1>
      <div className="projetos">
        <div data-aos="fade-left" className="projeto-item">
          <img src={tub_1} />
          <div className="project-content">
            <p className="title">lasfafafa</p>
          </div>
        </div>
        <div data-aos="fade-left" className="projeto-item">
          <img src={tub_2} />
          <div className="project-content">
            <p className="title">Fermentação em cervejarias</p>
          </div>
        </div>
        <div data-aos="fade-left" className="projeto-item">
          <img src={tub_3} />
          <div className="project-content">
            <p className="title">
              Fabricação e montagem de dorna de fermentação
            </p>
          </div>
        </div>
        <div data-aos="fade-left" className="projeto-item">
          <img src={tub_4} />
          <div className="project-content">
            <p className="title">Fabricação de interligação em laticínios</p>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Projetos

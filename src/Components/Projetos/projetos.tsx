import { Container } from './style'
import Aos from 'aos'
import { useEffect } from 'react'
import 'aos/dist/aos.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import tub_1 from '../../Pics/tub-1.jpg'
import tub_2 from '../../Pics/tub-2.jpg'
import tub_3 from '../../Pics/tub-3.jpg'
import tub_4 from '../../Pics/tub-4.jpg'

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
          <p>Tubulação</p>
        </div>
        <div data-aos="fade-left" className="projeto-item">
          <img src={tub_2} />
          <p>Tubulação</p>
        </div>
        <div data-aos="fade-right" className="projeto-item">
          <img src={tub_3} />
          <p>Tubulação</p>
        </div>
        <div data-aos="fade-right" className="projeto-item">
          <img src={tub_4} />
          <p>Tubulação</p>
        </div>
      </div>
    </Container>
  )
}

export default Projetos

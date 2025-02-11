import Aos from 'aos'
import 'aos/dist/aos.css'
import { Geral } from './style'

import caldeiraria from '../Pics/caldeiraria.png'
import { useEffect } from 'react'

function Espec() {
  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <Geral>
      <div className="sobre">
        <h1 id="title">Caldeiraria</h1>
        <img src={caldeiraria} />
      </div>
      <div className="especializacao">
        <h1 id="title">Especializações nas áreas :</h1>
        <ul>
          <li data-aos="fade-down">Alimentícia</li>
          <li data-aos="fade-down">Cervejarias</li>
          <li data-aos="fade-down">Latícinios</li>
          <li data-aos="fade-down">Sucroalcooleiro</li>
          <li data-aos="fade-down">Papel Celulose</li>
          <li data-aos="fade-down">Agroindústria</li>
          <li data-aos="fade-down">Frigoríficos</li>
          <li data-aos="fade-down">Thermo-Elétrica</li>
          <li data-aos="fade-down">Supervisão de montagem</li>
        </ul>
      </div>
    </Geral>
  )
}

export default Espec

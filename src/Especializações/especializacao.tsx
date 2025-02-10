import { Geral } from './style'

import caldeiraria from '../Pics/caldeiraria.png'

function Espec() {
  return (
    <Geral>
      <div className="sobre">
        <h1 id="title">Caldeiraria</h1>
        <img src={caldeiraria} />
      </div>
      <div className="especializacao">
        <h1 id="title">Especializações nas áreas :</h1>
        <ul>
          <li>Alimentícia</li>
          <li>Cervejarias</li>
          <li>Latícinios</li>
          <li>Sucroalcooleiro</li>
          <li>Papel Celulose</li>
          <li>Agroindústria</li>
          <li>Frigoríficos</li>
          <li>Thermo-Elétrica</li>
          <li>Supervisão de montagem</li>
        </ul>
      </div>
    </Geral>
  )
}

export default Espec

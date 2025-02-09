import { DownLane, TopLane } from './style'
import './gradient.scss'

import logo from '../Pics/JDL-logo.png'
import building from '../Pics/building.png'
import home from '../Pics/home.png'
import contato from '../Pics/contact.png'
import referencias from '../Pics/references.png'

function Header() {
  return (
    <>
      <header id="header">
        <TopLane>
          <div id="title">
            <a href="">
              <img src={logo} />
            </a>
            <h1>JDL Caldeiraria</h1>
            <span>Fabricação & Montagem</span>
          </div>
          <button id="glass">Solicitar Orçamento</button>
        </TopLane>
      </header>
      <DownLane>
        <ul>
          <li>
            Home <img src={home} />{' '}
          </li>
          <li>
            Empresa <img src={building} />{' '}
          </li>
          <li>
            Contato <img src={contato} />{' '}
          </li>
          <li>
            Referências <img src={referencias} />{' '}
          </li>
        </ul>
      </DownLane>
    </>
  )
}

export default Header

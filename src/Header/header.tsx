import { DownLane, TopLane } from './style'
import './gradient.scss'

import logo from '../Pics/JDL-logo.png'
import building from '../Pics/building.png'
import home from '../Pics/home.png'
import contato from '../Pics/contact.png'
import referencias from '../Pics/references.png'
import wapp from '../Pics/wapp.png'

function Header() {
  return (
    <>
      <header>
        <TopLane>
          <div className="title">
            <img src={logo} />
            <h1>JDL Caldeiraria</h1>
            <span>Fabricação & Montagem</span>
          </div>
          <div className="contact">
            <button>Solicitar Orçamento</button>
            <span>
              <img src={wapp} /> (44) 99942-6470
            </span>
          </div>
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

import { DownLane, TopLane } from './style'
import './gradient.scss'
import logo from '../../Pics/JDL-logo.png'
import building from '../../Pics/building.png'
import home from '../../Pics/home.png'
import contato from '../../Pics/contact.png'
import referencias from '../../Pics/references.png'

function Header() {
  const phoneNumber = '5544999426470'

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank')
  }

  return (
    <>
      <header>
        <TopLane>
          <div className="title">
            <a href="/">
              <img src={logo} />
            </a>
            <h1>JDL Caldeiraria</h1>
            <span>Fabricação & Montagem</span>
          </div>
          <div className="contact">
            <button className="btn" onClick={handleClick}>
              Solicitar Orçamento
            </button>
          </div>
        </TopLane>
      </header>
      <DownLane>
        <ul>
          <a href="">
            <li>
              Home <img src={home} />{' '}
            </li>
          </a>
          <a href="">
            <li>
              Empresa <img src={building} />{' '}
            </li>
          </a>
          <a href="">
            <li>
              Contato <img src={contato} />{' '}
            </li>
          </a>
          <a href="">
            <li>
              Projetos <img src={referencias} />{' '}
            </li>
          </a>
        </ul>
      </DownLane>
    </>
  )
}

export default Header

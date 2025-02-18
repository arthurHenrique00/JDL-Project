import { BannerImage, DownLane, TopLane } from './style'
import './gradient.scss'

import logo from '../../Pics/JDL-logo.png'
import building from '../../Pics/building.png'
import home from '../../Pics/home.png'
import contato from '../../Pics/contact.png'
import referencias from '../../Pics/references.png'
import phone from '../../Pics/phone.png'
import caldeiraria_banner from '../../Pics/caldeiraria-bg.jpg'

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
            <img src={logo} />
            <h1>JDL Caldeiraria</h1>
            <span>Fabricação & Montagem</span>
          </div>
          <div className="contact">
            <button onClick={handleClick}>Solicitar Orçamento</button>
            <span>
              <img src={phone} /> (44) 99942-6470
            </span>
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
      <BannerImage src={caldeiraria_banner} />
    </>
  )
}

export default Header

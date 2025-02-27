import { Cabecalho } from './style'
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
      <Cabecalho>
        <div className="title">
          <a href="/">
            <img src={logo} />
          </a>
          <h1>JDL Caldeiraria</h1>
          <span>Fabricação & Montagem</span>
        </div>
        <ul>
          <a href="/">
            <li>
              Home <img src={home} />{' '}
            </li>
          </a>
          <a href="#empresa">
            <li>
              Empresa <img src={building} />{' '}
            </li>
          </a>
          <a href="#contato">
            <li>
              Contato <img src={contato} />{' '}
            </li>
          </a>
          <a href="#projetos">
            <li>
              Projetos <img src={referencias} />{' '}
            </li>
          </a>
        </ul>
        <div className="contact">
          <button className="btn" onClick={handleClick}>
            Solicitar Orçamento
          </button>
        </div>
      </Cabecalho>
    </>
  )
}

export default Header

import { DownLane, TopLane } from './style'

function Header() {
  return (
    <header style={{ display: 'block' }}>
      <TopLane>
        <img src="../Pics/JDL-logo.png" />
        <button id="glass">Solicitar Orçamento</button>
      </TopLane>
      <DownLane>
        <ul>
          <li>
            Home <img src="../Pics/home.png" />{' '}
          </li>
          <li>
            Empresa <img src="../Pics/building.png" />{' '}
          </li>
          <li>
            Contato <img src="../Pics/contact.png" />{' '}
          </li>
          <li>
            Referências <img src="../Pics/references.png" />{' '}
          </li>
        </ul>
      </DownLane>
    </header>
  )
}

export default Header

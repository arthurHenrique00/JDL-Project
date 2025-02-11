import Contato from './Contato/contato'
import Espec from './Especializações/especializacao'
import Header from './Header/header'
import Projetos from './Projetos/projetos'
import GlobalStyle from './styles'

function App() {
  return (
    <>
      <Header />
      <Espec />
      <Projetos />
      <Contato />
      <GlobalStyle />
    </>
  )
}

export default App

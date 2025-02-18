import Contato from './Components/Contato/contato'
import Espec from './Components/Especializações/especializacao'
import Header from './Components/Header/header'
import Projetos from './Components/Projetos/projetos'
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

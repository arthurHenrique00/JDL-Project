import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contato from './Components/Contato/contato'
import Espec from './Components/Especializações/especializacao'
import Header from './Components/Header/header'
import Projetos from './Components/Projetos/projetos'
import GlobalStyle from './styles'
import News from './Pages/news'
import caldeiraria_banner from './Pics/caldeiraria-bg.jpg'
import { BannerImage } from './Components/Header/style'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <BannerImage src={caldeiraria_banner} />
        <Espec />
        <Projetos />
        <Contato />
        <GlobalStyle />
      </>
    )
  },
  {
    path: '/noticias',
    element: (
      <>
        <News />
      </>
    )
  }
])

function App() {
  return (
    <>
      <RouterProvider router={rotas} />
      <GlobalStyle />
    </>
  )
}

export default App

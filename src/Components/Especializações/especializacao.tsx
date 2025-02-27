import { useEffect, useRef } from 'react'
import Aos from 'aos'
import Slider from 'react-slick'
import { useGetNewsAPIQuery } from '../../services/api'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'aos/dist/aos.css'
import { Geral } from './style'
import caldeiraria from '../../Pics/caldeiraria.png'

function Espec() {
  useEffect(() => {
    Aos.init()
  }, [])

  const sliderRef = useRef<Slider | null>(null)

  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1,
    cssEase: 'linear',
    pauseOnHover: true
  }

  const { data: data1, error: error1 } = useGetNewsAPIQuery()

  const displayedArticles = data1?.articles.slice(0, 2)
  const articles = data1?.articles || []

  return (
    <Geral>
      <div
        id="empresa"
        style={{ backgroundColor: '#d6d6d6' }}
        className="sobre"
      >
        <div className="trailer">
          <h1 id="title">Caldeiraria</h1>
          <img src={caldeiraria} />
        </div>
        {!error1 && (
          <div className="news">
            <h1 id="title">Notícias</h1>
            <div className="artigos">
              {displayedArticles?.length ? (
                displayedArticles.map((article, idx) => (
                  <div key={idx}>
                    <img src={article.image} alt={article.title} />
                    <h2>{article.title}</h2>
                    <p>{article.description}</p>
                    <p id="data">
                      {new Date(article.publishedAt).toLocaleDateString(
                        'pt-BR'
                      )}
                    </p>
                  </div>
                ))
              ) : (
                <p>Nenhuma notícia disponível</p>
              )}
              {articles.length > 2 && <a href="/noticias">Ver Mais Notícias</a>}
            </div>
          </div>
        )}
      </div>
      <div className="especializacao">
        <h1>Especializações nas áreas</h1>
        <Slider ref={sliderRef} {...settings}>
          <div>
            <li data-aos="fade-down">Alimentícia</li>
          </div>
          <div>
            <li data-aos="fade-down">Cervejarias</li>
          </div>
          <div>
            <li data-aos="fade-down">Laticínios</li>
          </div>
          <div>
            <li data-aos="fade-down">Sucroalcooleiro</li>
          </div>
          <div>
            <li data-aos="fade-down">Papel Celulose</li>
          </div>
          <div>
            <li data-aos="fade-down">Agroindústria</li>
          </div>
          <div>
            <li data-aos="fade-down">Frigoríficos</li>
          </div>
          <div>
            <li data-aos="fade-down">Thermo-Elétrica</li>
          </div>
          <div>
            <li data-aos="fade-down">Supervisão de montagem</li>
          </div>
        </Slider>
      </div>
    </Geral>
  )
}

export default Espec

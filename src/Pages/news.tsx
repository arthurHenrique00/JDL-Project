import { useGetNewsAPIQuery } from '../services/api'
import styled from 'styled-components'
import logo from '../Pics/JDL-logo.png'
import header_bg from '../Pics/header-bg.png'
import { colors } from '../styles'
import news_bg from '../Pics/news-bg.png'

function News() {
  const { data } = useGetNewsAPIQuery()

  const phoneNumber = '5544999426470'
  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank')
  }

  const HeaderNews = styled.header`
    background-image: url('${header_bg}');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    display: flex;
    align-items: center;
    color: ${colors.fourth};
    justify-content: center;

    div {
      padding-left: 72px;

      a {
        img {
          width: 150px;
        }
      }

      p {
        font-size: 22px;
        font-weight: bold;
      }
    }

    .contact {
      .btn {
        width: 200px;
        font-size: 16px;
        --border-color: linear-gradient(
          -45deg,
          ${colors.third},
          ${colors.fourth}
        );
        --border-width: 0.125em;
        --curve-size: 0.5em;
        --blur: 30px;
        --bg: #080312;
        --color: ${colors.fourth};
        color: var(--color);
        cursor: pointer;
        position: relative;
        isolation: isolate;
        display: inline-grid;
        place-content: center;
        padding: 0.5em 1.5em;
        font-size: 17px;
        border: 0;
        text-transform: uppercase;
        box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.6);
        clip-path: polygon(
          0% var(--curve-size),
          var(--curve-size) 0,
          100% 0,
          100% calc(100% - var(--curve-size)),
          calc(100% - var(--curve-size)) 100%,
          0 100%
        );
        transition: color 250ms;
      }

      .btn::after,
      .btn::before {
        content: '';
        position: absolute;
        inset: 0;
      }

      .btn::before {
        background: var(--border-color);
        background-size: 300% 300%;
        animation: move-bg7234 5s ease infinite;
        z-index: -2;
      }

      @keyframes move-bg7234 {
        0% {
          background-position: 31% 0%;
        }

        50% {
          background-position: 70% 100%;
        }

        100% {
          background-position: 31% 0%;
        }
      }

      .btn::after {
        background: var(--bg);
        z-index: -1;
        clip-path: polygon(
          var(--border-width)
            calc(var(--curve-size) + var(--border-width) * 0.5),
          calc(var(--curve-size) + var(--border-width) * 0.5)
            var(--border-width),
          calc(100% - var(--border-width)) var(--border-width),
          calc(100% - var(--border-width))
            calc(100% - calc(var(--curve-size) + var(--border-width) * 0.5)),
          calc(100% - calc(var(--curve-size) + var(--border-width) * 0.5))
            calc(100% - var(--border-width)),
          var(--border-width) calc(100% - var(--border-width))
        );
        transition: clip-path 500ms;
      }

      .btn:where(:hover, :focus)::after {
        clip-path: polygon(
          calc(100% - var(--border-width))
            calc(100% - calc(var(--curve-size) + var(--border-width) * 0.5)),
          calc(100% - var(--border-width)) var(--border-width),
          calc(100% - var(--border-width)) var(--border-width),
          calc(100% - var(--border-width))
            calc(100% - calc(var(--curve-size) + var(--border-width) * 0.5)),
          calc(100% - calc(var(--curve-size) + var(--border-width) * 0.5))
            calc(100% - var(--border-width)),
          calc(100% - calc(var(--curve-size) + var(--border-width) * 0.5))
            calc(100% - var(--border-width))
        );
        transition: 200ms;
      }

      .btn:where(:hover, :focus) {
        color: #fff;
      }
    }
  `

  const Noticias = styled.div`
    background-image: url('${news_bg}');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;

    h1 {
      justify-content: center;
      margin: 72px;
      padding: 6px;
      border-bottom: 4px solid ${colors.first};
      display: inline-block;
    }

    .artigo {
      display: grid;
      grid-template-columns: repeat(3, 350px);
      gap: 20px;
      max-width: 1200px;
      margin: 0 auto;

      div {
        width: 300px;
        background: white;
        padding: 15px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        text-align: center;
      }

      h2 {
        font-size: 14px;
        border-bottom: 2px solid ${colors.first};
        padding: 12px 0;
        margin-bottom: 12px;
      }

      p {
        font-size: 12px;
      }

      #data {
        margin-top: 12px;
        color: ${colors.first};
      }

      img {
        width: 100%;
        max-width: 300px;
        height: auto;
        border-radius: 5px;
      }

      a {
        color: ${colors.third};
        font-style: none;
        text-decoration: none;
      }
    }
  `

  return (
    <>
      <HeaderNews>
        <div>
          <a href="/">
            <img src={logo} />
          </a>
          <p>JDL Caldeiraria</p>
        </div>
        <div className="contact">
          <button className="btn" onClick={handleClick}>
            Solicitar Orçamento
          </button>
        </div>
      </HeaderNews>
      <Noticias>
        <h1>Todas as Notícias</h1>
        <div className="artigo">
          {data?.articles.map((article, idx) => (
            <div key={idx}>
              <img src={article.image} />
              <a href={article.url} target="_blank" rel="noreferrer">
                <h2>{article.title}</h2>
              </a>
              <p>{article.description}</p>
              <p id="data">
                {new Date(article.publishedAt).toLocaleDateString('pt-BR')}
              </p>
            </div>
          ))}
        </div>
      </Noticias>
    </>
  )
}

export default News

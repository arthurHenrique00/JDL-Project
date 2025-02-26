import styled from 'styled-components'
import { colors } from '../../styles'
import header_bg from '../../Pics/header-bg-first.jpg'

export const Cabecalho = styled.header`
  background-image: url('${header_bg}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  color: ${colors.fourth};

  .title {
    font-family: 'Spectral', sans-serif;
    margin-left: 220px;

    h1 {
      font-size: 16px;
    }

    span {
      font-size: 12px;
    }

    img {
      width: 120px;
    }
  }

  .contact {
    margin-right: 250px;
    align-items: center;

    .btn {
      --border-color: linear-gradient(-45deg, ${colors.third}, ${colors.first});
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
        var(--border-width) calc(var(--curve-size) + var(--border-width) * 0.5),
        calc(var(--curve-size) + var(--border-width) * 0.5) var(--border-width),
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

  ul {
    display: flex;
    align-items: center;

    a {
      color: ${colors.fourth};
      font-weight: bold;
      text-decoration: none;
      margin-left: 24px;
      padding: 6px;
      border: 2px solid transparent;
      border-radius: 3px;

      &:hover {
        border: 2px solid ${colors.fourth};
      }
    }

    img {
      width: 25px;
      margin-left: 12px;
    }
  }
`

export const BannerImage = styled.img`
  width: 100%;
`

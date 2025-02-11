import styled from 'styled-components'
import { colors } from '../styles'

export const TopLane = styled.div`
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

    button {
      display: block;
      margin-bottom: 12px;
      height: 50px;
      background-color: black;
      color: ${colors.fourth};
      font-weight: bold;
      font-size: 16px;
      padding: 10px 20px;
      cursor: pointer;
      border: 2px solid ${colors.second};
      border-top-right-radius: 16px;
      border-bottom-left-radius: 16px;
      transition: background-color 0.5s ease-in-out;

      &:hover {
        background-color: ${colors.second};
        box-shadow: 0px 5px 15px rggba(0, 0, 0, 0.2);
      }
    }

    span {
      align-items: center;
      font-weight: bold;

      img {
        width: 25px;
      }
    }
  }
`

export const DownLane = styled.nav`
  justify-self: center;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%); /
  z-index: 10;

  a {
  text-decoration: none;
  }

  ul {
    display: flex;
    margin-top: 0;

    li {
      display: flex;
      font-weight: bold;
      font-size: 16px;
      font-family: sans-serif;
      padding: 6px;
      align-items: center;
      transform: transition 0.2s ease-in-out;
      border: 1px solid ${colors.third};
      background: #e6e6e6;
      color: ${colors.third};

      &:hover {
        transition: 5px 5px;
        background: #f3f3f3;
      }

      img {
        weight: 25px;
        height: 25px;
        margin-left: 10px;
      }
    }
  }
`
export const BannerImage = styled.img`
  width: 100%;
`

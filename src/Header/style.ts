import styled from 'styled-components'
import { colors } from '../styles'

export const TopLane = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  a {
    text-decoration: none;
    color: ${colors.third};
    display: inline-block;

    img {
      display: block;
      width: 250px;
      height: 150px;
    }
  }

  button {
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
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

    &:hover {
      background-color: ${colors.second};
      transform: translateY(-8px) translateX(4px);
      box-shadow: 0px 5px 15px rggba(0, 0, 0, 0.2);
    }
  }
`

export const DownLane = styled.nav`
  ul {
    display: flex;
    color: ${colors.third};

    li {
      display: flex;
      font-weight: bold;
      font-size: 16px;
      font-family: sans-serif;
      padding: 6px;
      align-items: center;
      text-transition: transform;

      &:hover {
        transform: 5px 5px;
      }

      img {
        weight: 25px;
        height: 25px;
        margin-left: 10px;
      }
    }
  }
`

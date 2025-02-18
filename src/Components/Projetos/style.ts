import styled from 'styled-components'
import background from '../../Pics/caldeiraria-1.jpg'
import { colors } from '../../styles'

export const Container = styled.div`
  background-image: url('${background}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  padding-bottom: 50px;

  h1 {
    color: ${colors.fourth};
    border-left: 3px solid ${colors.first};
    margin: 60px;
    padding-left: 8px;
    display: inline-block;
    background-color: transparent;
  }

  .projetos {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    overflow: hidden;
    cursor: pointer;
    background-color: transparent;

    .projeto-item {
      text-align: center;
      margin: 0 20px;

      img {
        border-radius: 9px;
        max-width: 100%;
        height: auto;
        transition: transform 0.3s ease-in-out;
      }

      p {
        color: ${colors.fourth};
        font-size: 26px;
        border-bottom: 3px solid ${colors.first};
        padding: 16px;
      }
    }
  }
`

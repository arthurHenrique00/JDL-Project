import styled from 'styled-components'
import background from '../Pics/caldeiraria-1.jpg'
import { colors } from '../styles'

export const Container = styled.div`
  background-image: url('${background}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;

  h1 {
    color: ${colors.fourth};
    border-left: 3px solid ${colors.first};
    margin: 60px;
    padding-left: 8px;
    display: inline-block;
  }

  .projetos {
    display: flex;
    margin-bottom: 120px;
    justify-content: center;

    .projeto-item {
      margin-left: 42px;
      text-align: center;
      width: 300px;

      img {
        width: 100%;
        border-radius: 9px;
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

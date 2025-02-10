import styled from 'styled-components'
import { colors } from '../styles'

export const Geral = styled.div`
  font-weight: bold;
  display: grid;
  grid-template-columns: repeat(2, 650px);
  justify-content: center;
  margin-top: 60px;

  #title {
    font-size: 26px;
    border-left: solid 3px ${colors.first};
    padding-left: 8px;
    margin-bottom: 48px;
    margin-top: 48px;
  }

  .sobre {
    padding-right: 75px;

    img {
      align-items: center;

      margin-left: 25px;
    }
  }

  .especializacao {
    padding-left: 75px;

    ul {
      display: grid;
      grid-template-columns: 150px 150px 150px;
      gap: 32px;
      text-align: center;
      margin-left: 12px;

      li {
        width: 160px;
        list-style: none;
        border: solid 2px ${colors.first};
        padding: 6px;
        background: #e6e6e6;
        border-top-right-radius: 16px;
        border-bottom-left-radius: 16px;

        &:hover {
          background: ${colors.first};
          color: ${colors.fourth};
        }
      }
    }
  }
`

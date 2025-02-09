import styled from 'styled-components'
import { colors } from '../styles'

export const Especializacao = styled.div`
  font-weight: bold;

  h1 {
    font-size: 26px;
    border-left: solid 3px ${colors.first};
    padding-left: 8px;
    margin-bottom: 48px;
    margin-top: 48px;
    margin-left: 220px;
  }

  ul {
    display: grid;
    grid-template-columns: 250px 250px 250px;
    gap: 32px;
    text-align: center;
    justify-content: center;

    li {
      list-style: none;
      border: solid 2px ${colors.first};
      padding: 8px;
      background: #e6e6e6;
      border-top-right-radius: 16px;
      border-bottom-left-radius: 16px;

      &:hover {
        background: #f3f3f3;
      }
    }
  }
`

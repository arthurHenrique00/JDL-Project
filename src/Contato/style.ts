import styled from 'styled-components'
import { colors } from '../styles'

export const DateLoc = styled.div`
  div {
    display: flex;
    padding: 12px;
    align-items: center;

    p {
      font-size: 18px;
    }

    img {
      width: 40px;
      margin-right: 12px;
    }
  }
`

export const Formulario = styled.form`
  font-weight: bold;
  display: flex;
  flex-direction: column;
  width: 400px;

  h1 {
    display: inline-block;
    font-size: 22px;
    border-bottom: 3px solid ${colors.first};
    padding-bottom: 4px;
    margin-bottom: 24px;
  }

  label {
    font-size: 18px;
    border-left: 2px solid ${colors.third};
    padding-left: 8px;
  }

  input {
    padding: 6px;
    margin: 22px;
    border: 2px solid ${colors.third};
    border-radius: 9px;
  }

  textarea {
    border: 2px solid ${colors.third};
    border-radius: 9px;
    resize: none;
    padding: 6px;
    margin: 22px;
    height: 100px;
  }

  span {
    border: 2px solid ${colors.first};
    background-color: ${colors.fourth};
    color: ${colors.first};
    border-radius: 9px;
    font-size: 12px;
    display: inline-block;
    margin: 22px;
    padding: 6px;
    text-align: center;
  }

  button {
    font-weight: bold;
    color: ${colors.fourth};
    background-color: ${colors.first};
    border: 1px solid transparent;
    padding: 4px;
    border-radius: 9px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      border: 1px solid ${colors.first};
      color: ${colors.first};
      background-color: ${colors.fourth};
    }
  }
`

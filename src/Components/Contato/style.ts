import styled from 'styled-components'
import { colors } from '../../styles'

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
    padding: 12px;
  }

  input {
    font-family: 'SF Pro';
    max-width: 300px;
    padding: 0.875rem;
    font-size: 1rem;
    border: 1.5px solid #000;
    border-radius: 0.5rem;
    box-shadow: 2.5px 3px 0 ${colors.first};
    outline: none;
    transition: ease 0.25s;
    margin: 12px;

    &:focus {
      box-shadow: 5.5px 7px 0 ${colors.first};
    }
  }

  textarea {
    font-family: 'SF Pro';
    max-width: 300px;
    padding: 0.875rem;
    font-size: 1rem;
    border: 1.5px solid #000;
    border-radius: 0.5rem;
    box-shadow: 2.5px 3px 0 ${colors.first};
    outline: none;
    transition: ease 0.25s;
    margin: 12px;
    resize: none;

    &:focus {
      box-shadow: 5.5px 7px 0 ${colors.first};
    }
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
    width: 300px;

    &:hover {
      border: 1px solid ${colors.first};
      color: ${colors.first};
      background-color: ${colors.fourth};
    }
  }
`

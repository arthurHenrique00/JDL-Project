import styled from 'styled-components'
import { colors } from '../../styles'
import bg from '../../Pics/bg.png'

export const Geral = styled.div`
font-weight: bold;
display: block;

#title {
  font-size: 26px;
  border-left: solid 3px ${colors.first};
  padding-left: 8px;
  margin-bottom: 48px;
  margin-top: 48px;
  }

  .sobre {
    background-image: url('${bg}');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    justify-content: center;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding-bottom: 120px;

    h1 {
      color: ${colors.fourth};
      text-shadow: 3px 3px 4px #000;
    }

      .trailer {
        padding-left: 50px;

        img {
          padding-left: 50px;
        }
      }

          .artigos {
            display: grid;
            grid-template-columns: repeat(2, 350px);
            gap: 20px;
            max-width: 1200px;

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
              background-color: #e0e0e0;
              border-radius: 50px;
              box-shadow: inset 4px 4px 10px #bcbcbc, inset -4px -4px 10px #ffffff;
              color: #4d4d4d;
              cursor: pointer;
              font-size: 18px;
              padding: 15px 40px;
              transition: all 0.2s ease-in-out;
              border: 2px solid rgb(206, 206, 206);
              width: 300px;
              font-weight: bold;
              text-decoration: none;
              text-align: center;

              &:hover {
                box-shadow: inset 2px 2px 5px #bcbcbc, inset -2px -2px 5px #ffffff, 2px 2px 5px #bcbcbc, -2px -2px 5px #ffffff;
              }

              &:focus {
                outline: none;
                box-shadow: inset 2px 2px 5px #bcbcbc, inset -2px -2px 5px #ffffff, 2px 2px 5px #bcbcbc, -2px -2px 5px #ffffff;
              }
            }
          }
      }
  }

  .especializacao {
    background-color: ${colors.third};
    color: ${colors.fourth};
    padding: 22px;
    padding-bottom: 50px;

    h1 {
      font-size: 26px;
      border-bottom: solid 3px ${colors.first};
      margin-bottom: 50px;
      margin-top: 20px;
      display: inline-block;
      text-align: center;
      padding-bottom: 6px;
    }

    li {
      text-align: center;
      width: 200px;
      list-style: none;
      border: solid 2px ${colors.first};
      padding: 6px;
      background: ${colors.first};
      border-top-right-radius: 16px;
      border-bottom-left-radius: 16px;
      margin-bottom: 24px;
      margin-right: 40px;
      cursor: pointer;

      &:hover {
        background: transparent;
        color: ${colors.fourth};
      }
    }
  }
`

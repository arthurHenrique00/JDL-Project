import styled from 'styled-components'

export const TopLane = styled.div`
  img {
    width: 250px;
    height: 50px;
  }
`

export const DownLane = styled.nav`
  ul {
    display: flex;

    li {
      display: flex;
      font-weight: bold;
      font-size: 12px;
      font-family: sans-serif;
      margin-left: 6px;

      img {
        weight: 50px;
        height: 50px;
      }
    }
  }
`

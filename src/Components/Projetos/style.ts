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
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    overflow: visible;
  }

  .projeto-item {
    position: relative;
    width: 300px;
    height: 250px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    margin: 22px;
    box-shadow: 4.5px 5px 0 ${colors.first};

    &:hover {
      transform: rotate(-5deg) scale(1.1);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
  }

  .projeto-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .project-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: ${colors.third};
    opacity: 0;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .projeto-item:hover .project-content {
    transform: translate(-50%, -50%) rotate(0deg);
    opacity: 1;
  }

  .title {
    margin: 0;
    font-size: 24px;
    color: ${colors.fourth};
    font-weight: 700;
  }
`

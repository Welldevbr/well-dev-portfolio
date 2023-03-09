import styled from 'styled-components';

interface ContainerProps {
  imgUrl: string;
}

export const Container = styled.div<ContainerProps>`
  > a {
    position: relative;
    width: 100%;
    background: url(${props => props.imgUrl}) no-repeat center;
    background-size: cover;
    height: 26rem;
    padding: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    overflow: hidden;

    > span {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      color: #fff;
      font-size: 2rem;
      z-index: 2;
      opacity: 0;
      transition: 0.5s ease-out;

      > svg {
        width: 2rem;
        height: 2rem;
      }
    }

    &:hover {
      > span {
        opacity: 1;
      }
      > div.overlay {
        opacity: 1;
        backdrop-filter: blur(12px);
      }
    }

    > div.overlay {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background: ${({ theme }) => theme.gradient};
      opacity: 0.25;
      transition: 0.5s ease-out;
    }

    @media (max-width: 600px) {
      height: 15rem;
    }
  }
`;

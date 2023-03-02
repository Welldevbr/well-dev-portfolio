import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  > section {
    width: 100%;
    display: flex;
    gap: 3rem;
    align-items: center;
    background: ${({ theme }) => theme.gradient};
    padding: 2rem 4rem;
    transition: 0.5s;
    position: relative;
    margin-block: 6rem;

    &::before {
      content: '';
      width: 100%;
      height: 0.2rem;
      background: ${({ theme }) => theme.primary};
      position: absolute;
      bottom: -0.2rem;
      left: 0;
      transform: scaleX(0);
      transform-origin: bottom center;
      transition: transform 0.5s ease-out;
    }

    img {
      width: 36rem;
      filter: drop-shadow(0 0 0.15rem ${({ theme }) => theme.textHighlight});
      opacity: 0.8;
      transition: 0.5s ease-out;
    }

    @media (max-width: 1450px) {
      padding: 4rem 2rem;
      img {
        width: 30rem;
      }
    }

    @media (max-width: 1200px) {
      img {
        width: 26rem;
      }
    }

    @media (max-width: 1000px) {
      padding: 2.8rem 2rem;
      img {
        display: none;
      }
    }

    @media (max-width: 700px) {
      flex-direction: column;
      margin-top: 5rem;
    }

    > div {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      gap: 2.8rem;
      color: ${({ theme }) => darken(0.09, theme.text)};

      p {
        font-size: 1.5rem;
        font-weight: 200;
      }

      header {
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
        position: relative;
        padding-bottom: 2.4rem;

        h1 {
          font-size: 3.2rem;
          color: ${({ theme }) => theme.primary};
        }

        h2 {
          font-weight: 300;
          font-size: 1.6rem;
          color: rgba(255, 255, 255, 0.5);
          font-family: 'JetBrains Mono', monospace;
        }

        &::before {
          content: '';
          width: 100%;
          height: 0.12rem;
          background: ${({ theme }) => theme.secundary};
          border-radius: 0.5rem;
          position: absolute;
          left: 0;
          bottom: 0;
          z-index: 1;
        }

        @media (max-width: 1450px) {
          h1 {
            font-size: 2.6rem;
          }

          h2 {
            font-size: 1.4rem;
          }

          &::after {
            width: 100%;
          }
        }

        @media (max-width: 1000px) {
          h1 {
            font-size: 2.4rem;
          }

          h2 {
            font-size: 1.2rem;
          }
        }
      }

      @media (max-width: 1200px) {
        p {
          font-size: 1.2rem;
        }
      }

      @media (max-width: 700px) {
        h1 {
          font-size: 1.5rem;
        }

        h2 {
          font-size: 1rem;
        }
        p {
          font-size: 1rem;
          line-height: 2rem;
        }
      }
    }

    &:hover {
      img {
        filter: drop-shadow(0 0 0.15rem ${({ theme }) => theme.text});
      }

      &::before {
        transform: scaleX(1);
        transform-origin: bottom center;
      }
    }
  }
`;

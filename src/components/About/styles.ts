import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  > section {
    width: 100%;
    display: flex;
    gap: 2rem;
    align-items: center;
    background: ${({ theme }) => theme.gradient};
    padding: 2rem 4rem;
    transition: 0.5s;
    position: relative;
    margin-block: 6rem;

    &::before {
      content: '';
      width: 100%;
      height: 0.3rem;
      background: ${({ theme }) => theme.primary};
      position: absolute;
      bottom: 0;
      left: 0;
      transform: scaleX(0);
      transform-origin: bottom center;
      transition: transform 0.5s ease-out;
    }

    img {
      width: 35rem;
    }

    @media (max-width: 1450px) {
      padding: 2rem;
      img {
        width: 26rem;
      }
    }

    @media (max-width: 1200px) {
      img {
        width: 20rem;
      }
    }

    @media (max-width: 1000px) {
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
      color: ${({ theme }) => theme.text};

      p {
        font-size: 1.5rem;
        font-weight: 300;
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

        &::before,
        &::after {
          content: '';
          height: 0.2rem;
          position: absolute;
          left: 0;
          bottom: 0;
          border-radius: 0.5rem;
        }

        &::before {
          background: ${({ theme }) => theme.primary};
          width: 30%;
          z-index: 12;
        }

        &::after {
          background: ${({ theme }) => theme.secundary};
          z-index: 1;
          width: 100%;
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
      filter: brightness(1.1);

      &::before {
        transform: scaleX(1);
        transform-origin: bottom center;
      }
    }
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  > section {
    width: 100%;
    display: flex;
    gap: 2rem;
    align-items: center;
    background: ${({ theme }) => theme.gradient};
    padding: 4rem;
    transition: 0.5s;

    margin-block: 7rem;
    border-bottom: 3px solid ${({ theme }) => theme.primary};

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    img {
      width: 30rem;
    }

    @media (max-width: 1450px) {
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
        font-size: 1.6rem;
        line-height: 2.5rem;
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
          height: 3px;
          position: absolute;
          left: 0;
          bottom: 0;
          border-radius: 5px;
        }

        &::before {
          background: ${({ theme }) => theme.primary};
          width: 30%;
          z-index: 12;
        }

        &::after {
          background: ${({ theme }) => theme.secundary};
          width: 110%;
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
      }

      @media (max-width: 1200px) {
        p {
          font-size: 1.4rem;
        }
      }

      @media (max-width: 700px) {
        p {
          font-size: 1.4rem;
        }
      }
    }

    &:hover {
      filter: brightness(1.2);
    }
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 2rem;

  > main {
    margin-block: 2rem;
    width: 100%;
    padding: 0 4rem;
    display: flex;
    flex-direction: column;

    > div {
      display: flex;
      gap: 2rem;
      justify-content: center;
    }

    > p {
      font-size: 1.5rem;
      color: #fff;
      margin-bottom: 4rem;
      text-align: justify;

      > strong {
        color: ${({ theme }) => theme.textHighlight};
      }
    }

    > section {
      margin-top: 2rem;
      margin-bottom: 6rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    @media (max-width: 1200px) {
      p {
        font-size: 1rem;
      }

      > section {
        flex-direction: column;
        gap: 10rem;
      }
    }

    @media (max-width: 700px) {
      padding: 0 2rem;

      > div {
        flex-direction: column;
      }

      > p {
        margin-bottom: 2rem;
      }
    }
  }
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  align-items: flex-start;

  > h1 {
    color: ${({ theme }) => theme.primary};
    font-size: 2.5rem;
    font-weight: 600;
  }

  span {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;

    p {
      padding: 1rem 2rem;
      font-size: 1.5rem;
      font-family: 'JetBreans mono', monospace;
      color: ${({ theme }) => theme.text};
      background: ${({ theme }) => theme.linkPrimary};
      position: relative;
      cursor: pointer;
      transition: 0.5s;

      &::before {
        content: '';
        width: 100%;
        height: 0.15rem;
        background: ${({ theme }) => theme.primary};
        border-radius: 0 0 0.5rem 0.5rem;
        position: absolute;
        bottom: -0.5rem;
        left: 0;
        transform: scaleX(0);
        transform-origin: bottom center;
        transition: transform 0.5s ease-out;
      }

      &:hover {
        color: ${({ theme }) => theme.primary};

        &::before {
          transform: scaleX(1);
          transform-origin: bottom center;
        }
      }
    }
  }

  @media (max-width: 1200px) {
    > span {
      width: 100%;
      margin: 0 auto;
    }
  }

  @media (max-width: 700px) {
    > span {
      width: 100%;

      p {
        padding: 0.5rem 1.8rem;
        font-size: 1.2rem;
      }
    }
    h1 {
      font-size: 1.8rem;
      width: 70%;
    }
  }
`;

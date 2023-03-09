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
  gap: 2rem;

  > h1 {
    color: ${({ theme }) => theme.primary};
    font-size: 2.5rem;
    font-weight: 600;
  }

  span {
    width: 80%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    gap: 4rem;
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
    }
    h1 {
      font-size: 1.8rem;
      width: 70%;
    }
  }
`;

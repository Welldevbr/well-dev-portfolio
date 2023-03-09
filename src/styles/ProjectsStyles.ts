import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-top: 10rem;

  > main {
    h1 {
      color: ${({ theme }) => theme.text};
      font-size: 2rem;

      span {
        color: ${({ theme }) => theme.primary};
      }
    }
    > section {
      margin-top: 2rem;
      margin-bottom: 6rem;
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
    }

    > div {
      width: 100%;
      margin-top: 8rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 2rem;
    }

    @media (max-width: 1000px) {
      > sction {
        grid-template-columns: 1fr 1fr;
      }
    }

    @media (max-width: 700px) {
      h1 {
        font-size: 1.8rem;
      }
      > sction {
        grid-template-columns: 1fr;
      }
    }
  }
`;

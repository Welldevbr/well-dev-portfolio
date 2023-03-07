import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 2rem;

  > div {
    margin-top: 8rem;
    width: 100%;
  }

  > main {
    margin-block: 2rem;
    width: 100%;
    padding: 0 12rem;
    display: flex;
    flex-direction: column;

    p {
      font-size: 1.5rem;
      color: #fff;
      margin-bottom: 4rem;
      text-align: justify;
    }

    > section {
      margin-top: 2rem;
      margin-bottom: 6rem;
      display: flex;
      justify-content: space-between;

      span {
        display: flex;
        flex-direction: column;

        h1 {
          color: ${({ theme }) => theme.primary};
          font-size: 2.5rem;
          font-weight: 600;
        }
      }
    }

    @media (max-width: 700px) {
      p {
        font-size: 1rem;
      }
    }
  }
`;

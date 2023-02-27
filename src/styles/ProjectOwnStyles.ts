import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  > div {
    margin-top: 10rem;
    width: 100%;
  }

  > main {
    margin-block: 3rem;
    width: 100%;
    padding: 0 5rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;

    p {
      color: ${({ theme }) => theme.text};
      font-size: 1.5rem;
      font-weight: 300;
      text-align: justify;
    }

    @media (max-width: 700px) {
      padding: 0 2.5rem;

      p {
        font-size: 1rem;
      }
    }
  }
`;

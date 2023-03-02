import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 2rem;

  > div {
    margin-top: 10rem;
    width: 100%;
  }

  > main {
    margin-block: 2rem;
    width: 100%;
    padding: 0 5rem;

    p {
      font-size: 1.5rem;
      color: #fff;
      margin-bottom: 4rem;
    }

    @media (max-width: 700px) {
      p {
        font-size: 1rem;
      }
    }
  }
`;

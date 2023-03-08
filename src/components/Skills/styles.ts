import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 6rem;

  > section {
    margin-top: 8rem;
    width: 100%;
    display: grid;
    gap: 6rem;
    grid-template-columns: repeat(6, 1fr);
  }

  @media (max-width: 1450px) {
    > section {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media (max-width: 700px) {
    > section {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 4rem;
    }
  }
`;

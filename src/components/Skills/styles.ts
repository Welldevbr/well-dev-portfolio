import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 6rem;

  > section {
    margin-top: 8rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8rem;
    flex-wrap: wrap;
  }

  @media (max-width: 700px) {
    margin-bottom: 2rem;

    > section {
      gap: 4rem;
    }
  }
`;

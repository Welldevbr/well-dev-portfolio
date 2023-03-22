import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  h1 {
    font-weight: 700;
    font-size: 3.5rem;
    color: ${({ theme }) => theme.text};

    span {
      color: ${({ theme }) => theme.primary};
    }
  }

  h2 {
    font-weight: 300;
    font-size: 2.5rem;
    color: ${({ theme }) => theme.secundary};
  }

  @media (max-width: 1000px) {
    h1 {
      font-size: 2.5rem;
    }

    h2 {
      font-size: 1.8rem;
    }
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 1.8rem;
    }

    h2 {
      font-size: 1.2rem;
    }
  }
`;

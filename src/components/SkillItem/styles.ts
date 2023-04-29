import styled from 'styled-components';

export const Container = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  color: ${({ theme }) => theme.secundary};
  cursor: pointer;
  position: relative;

  p {
    font-weight: 700;
    font-size: 1.3rem;
    font-family: 'JetBrains', monospace;
    color: ${({ theme }) => theme.background};
    transition: 0.5s;
  }

  svg {
    width: 4rem;
    height: 4rem;
    transition: all 0.5s ease-out;
  }

  &:hover {
    p {
      color: ${({ theme }) => theme.primary};
    }

    svg {
      color: ${({ theme }) => theme.primary};
      transform: scale(0.85);
    }
  }

  @media (max-width: 1000px) {
    p {
      font-size: 1rem;
    }

    svg {
      width: 3.5rem;
      height: 3.5rem;
    }
  }

  @media (max-width: 700px) {
    svg {
      width: 3rem;
      height: 3rem;
    }
  }
`;

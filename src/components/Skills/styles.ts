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

export const SkillContainer = styled.div`
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
    width: 5rem;
    height: 5rem;
    transition: 0.5s;
  }

  &::before {
    content: '';
    width: 0%;
    height: 2px;
    background: ${({ theme }) => theme.primary};
    position: absolute;
    bottom: -15%;
    left: 0;
    transition: 0.5s;
  }

  &:hover {
    p {
      color: ${({ theme }) => theme.primary};
    }

    svg {
      color: ${({ theme }) => theme.primary};
      transform: scale(0.95);
    }

    &::before {
      width: 100%;
    }
  }

  @media (max-width: 1000px) {
    p {
      font-size: 1rem;
    }

    svg {
      width: 4rem;
      height: 4rem;
    }
  }
`;

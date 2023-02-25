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
    width: 5rem;
    height: 5rem;
    transition: all 0.5s ease-out;
  }

  &::before {
    content: '';
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.primary};
    position: absolute;
    bottom: -15%;
    left: 0;
    transform: scaleX(0);
    transform-origin: bottom center;
    transition: transform 0.5s ease-out;
  }

  &:hover {
    p {
      color: ${({ theme }) => theme.primary};
    }

    svg {
      color: ${({ theme }) => theme.primary};
      transform: scale(0.85);
    }

    &::before {
      transform: scaleX(1);
      transform-origin: bottom center;
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

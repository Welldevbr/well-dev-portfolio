import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5rem;
  margin-bottom: 6rem;

  > section {
    width: 100%;
    display: flex;
    gap: 2rem;
  }

  @media (max-width: 1000px) {
    > section {
      flex-direction: column;
    }
  }

  @media (max-width: 700px) {
    margin-bottom: 2rem;
  }
`;

export const WorkContainer = styled.div`
  width: 100%;
  height: 32rem;
  padding: 2rem;
  background: ${({ theme }) => darken(0.2, theme.linkPrimary)};
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-direction: column;
  border: 2px solid ${({ theme }) => theme.secundary};
  border-radius: 0.5rem;
  gap: 2rem;
  transition: 0.5s !important;

  &:hover {
    background: ${({ theme }) => darken(0.2, theme.linkPrimary)};
    border: 2px solid ${({ theme }) => theme.primary};
  }

  div {
    background: ${({ theme }) => darken(0.1, theme.linkPrimary)};
    width: 8rem;
    height: 6rem;
    padding: 1rem;
    clip-path: circle();
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color: ${({ theme }) => theme.primary};
      font-size: 4rem;
    }
  }

  h1 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.textHighlight};
  }

  p {
    font-size: 1.5rem;
    font-weight: 300;
  }

  @media (max-width: 1450px) {
    div {
      width: 5rem;
      height: 5rem;

      svg {
        font-size: 3rem;
      }
    }

    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 1200px) {
    height: 24rem;

    div {
      width: 4rem;
      height: 4rem;

      svg {
        font-size: 2.5rem;
      }
    }

    h1 {
      font-size: 1.8rem;
    }

    p {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 1000px) {
    padding: 4rem 2rem;
    height: 100%;
  }

  @media (max-width: 700px) {
    div {
      width: 4rem;
      height: 4rem;

      svg {
        font-size: 2rem;
      }
    }

    h1 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

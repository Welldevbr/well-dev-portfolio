import { lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
  margin-top: 8rem;
  border-top: 1px solid ${({ theme }) => theme.backgroundLight};

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > button {
      background: none;
      color: ${({ theme }) => theme.primary};
      font-size: 1.2rem;
      font-weight: 300;
      transition: 0.5s;

      &:hover {
        color: ${({ theme }) => lighten(0.2, theme.primary)};
      }
    }

    > section {
      display: flex;
      align-items: center;
      gap: 1rem;

      svg {
        color: ${({ theme }) => theme.secundary};
        font-size: 2rem;
        cursor: pointer;
        transition: 0.5s;

        &:hover {
          color: ${({ theme }) => theme.primary};
        }
      }
    }

    @media (max-width: 450px) {
      button {
        font-size: 0.9rem;
      }

      > section {
        gap: 0.5rem;
        svg {
          font-size: 1.5rem;
        }
      }
    }
  }
`;

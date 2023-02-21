import styled, { css } from 'styled-components';

interface MenuProps {
  isVisible: boolean;
}

export const Container = styled.div<MenuProps>`
  width: 100%;
  height: ${props => (props.isVisible ? '100%' : '0')};
  position: fixed;
  backdrop-filter: blur(2rem);
  background: ${({ theme }) => theme.secundary};
  z-index: 1111;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s ease-in-out;

  opacity: 0;
  pointer-events: none;
  transform: translateY(-50rem);

  li {
    list-style-type: none;
  }

  > svg {
    position: absolute;
    top: 2rem;
    right: 4rem;
    cursor: pointer;
    transition: 0.5s;
    color: ${({ theme }) => theme.text};

    &:hover {
      color: ${({ theme }) => theme.backgroundLight};
    }
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
  }

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0);
    `}

  @media (max-width: 700px) {
    > svg {
      right: 2rem;
    }
  }
`;

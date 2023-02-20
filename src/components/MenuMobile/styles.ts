import styled from 'styled-components';

interface MenuProps {
  isVisible: boolean;
}

export const Container = styled.div<MenuProps>`
  width: 100%;
  height: ${props => (props.isVisible ? '100%' : '0')};
  position: fixed;
  backdrop-filter: blur(1rem);
  background: linear-gradient(
    45deg,
    rgba(2, 0, 36, 0.5) 0%,
    rgba(0, 124, 237, 0.8) 100%
  );
  z-index: 1111;
  left: 0;
  top: 0;
  display: ${props => (props.isVisible ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  transition: 0.5s;

  li {
    list-style-type: none;
  }

  > svg {
    position: absolute;
    top: 2rem;
    right: 2rem;
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
`;

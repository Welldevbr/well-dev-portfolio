import styled from 'styled-components';

interface ContainerProps {
  imgUrl: string;
}

export const Container = styled.div<ContainerProps>`
  > a {
    position: relative;
    width: 100%;
    background: url(${props => props.imgUrl}) no-repeat center;
    background-size: cover;
    height: 12rem;
    padding: 1.5rem;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    border-radius: 0.5rem;
    border: 1px solid ${({ theme }) => theme.border};
    transition: 0.5s;
    cursor: pointer;
    overflow: hidden;

    &:hover {
      border-color: ${({ theme }) => theme.primary};
      > section {
        h1 {
          margin: 0 0.5rem 0;
        }
      }
      > div.overlay {
        opacity: 1;
        backdrop-filter: blur(12px);
      }
    }

    > section {
      z-index: 2;

      h1 {
        color: ${({ theme }) => theme.text};
        font-size: 1.5rem;
        background: ${({ theme }) => theme.primary};
        padding: 0 0.5rem;
        transition: 0.5s;
      }

      h2 {
        color: ${({ theme }) => theme.secundary};
        font-weight: 300;
        font-size: 1rem;
        background: ${({ theme }) => theme.text};
        width: fit-content;
        padding: 0 0.5rem;
        transition: 0.5s;
      }
    }

    > div.overlay {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background: ${({ theme }) => theme.gradient};
      opacity: 0.75;
      transition: 0.5s;
    }
  }
`;

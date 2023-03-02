import styled from 'styled-components';

interface BannerProps {
  imgUrl: string;
}

export const Container = styled.div<BannerProps>`
  display: flex;
  width: 100%;
  height: 26rem;
  background: url(${props => props.imgUrl}) no-repeat bottom;
  background-size: cover;
  padding: 3rem 5rem;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  position: relative;

  > section {
    z-index: 2;

    h1 {
      color: ${({ theme }) => theme.text};
      font-size: 2.5rem;
      background: ${({ theme }) => theme.primary};
      padding: 0 0.5rem;
      transition: 0.5s;
    }

    h2 {
      color: ${({ theme }) => theme.secundary};
      font-weight: 300;
      font-size: 2rem;
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
`;

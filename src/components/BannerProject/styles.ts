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
      font-size: 3rem;
      padding: 0 2rem;
      background: ${({ theme }) => theme.primary};
      color: #FFF;
    }

    h2 {
      font-size: 2rem;
      font-weight: 300;
      padding: 0 2rem;
      background: #fff;
      color: ${({ theme }) => theme.primary};
      width: fit-content;
    }
  }

  > div.overlay {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.gradient};
    opacity: 0.85;
  }

  @media (max-width: 700px) {
    padding: 2rem 2.5rem;
    height: 20rem;

    > section {
      h1 {
        font-size: 1.8rem;
      }

      h2 {
        font-size: 1.2rem;
      }
    }
  }
`;

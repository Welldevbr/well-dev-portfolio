import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6rem;
  width: 100%;
  margin-block: 8rem;
  margin-inline: auto;
  position: relative;
  z-index: 1;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &::before,
  &::after {
    content: '';
    width: 20rem;
    height: 20rem;
    position: absolute;
    transform: rotate(-35deg);
    filter: blur(8rem);
    border-radius: 0.8rem;
    z-index: -1;
  }

  &::before {
    width: 20rem;
    height: 20rem;
    background: ${({ theme }) => theme.primary};
    right: 0;
    top: 50%;
    opacity: 0.5;
  }

  &::after {
    width: 20rem;
    height: 20rem;
    background: ${({ theme }) => theme.textHighlight};
    left: -8%;
    top: 10%;
    opacity: 0.75;
  }

  > img {
    width: 40rem;
    flex: 1;
  }

  > div {
    flex: 4;
  }

  @media (max-width: 1450px) {
    gap: 4rem;
    > img {
      width: 28rem;
    }

    > div {
      flex: 1;
    }
  }

  @media (max-width: 1000px) {
    > img {
      width: 22rem;
    }

    &::before,
    &::after {
      width: 15rem;
      height: 15rem;
    }
  }

  @media (max-width: 700px) {
    flex-direction: column-reverse;
    margin-top: 12rem;

    > div {
      width: 100%;
    }

    &::before,
    &::after {
      width: 10rem;
      height: 10rem;
    }
  }

  @media (max-width: 420px) {
    margin-top: 8rem;
    margin-bottom: 0;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3.2rem;
  width: 100%;
  gap: 1.2rem;

  h2 {
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 2rem;
    color: ${({ theme }) => theme.text};
  }

  h1 {
    font-weight: 700;
    font-size: 5rem;
    line-height: 5rem;
    color: ${({ theme }) => theme.primary};
    margin-bottom: 0.6rem;
  }

  @media (max-width: 1450px) {
    gap: 1.6rem;

    h2 {
      font-size: 2rem;
    }

    h1 {
      font-size: 4.8rem;
    }
  }

  @media (max-width: 1000px) {
    gap: 0.6rem;

    h2 {
      font-size: 1.8rem;
    }

    h1 {
      font-size: 4rem;
    }
  }

  @media (max-width: 700px) {
    gap: 0.4rem;

    h2 {
      font-size: 1.6rem;
    }

    h1 {
      font-size: 3.8rem;
    }
  }

  @media (max-width: 420px) {
    h2 {
      font-size: 1.6rem;
    }

    h1 {
      font-size: 3rem;
    }
  }
`;

export const InfosContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6rem;
  width: 100%;
  margin-top: 8rem;
  margin-inline: auto;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

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
  }

  @media (max-width: 700px) {
    flex-direction: column-reverse;
    margin-top: 12rem;

    > div {
      width: 100%;
    }
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
    font-size: 2.8rem;
    line-height: 2.5rem;
    color: ${({ theme }) => theme.text};
  }

  h1 {
    font-weight: 700;
    font-size: 6rem;
    line-height: 5rem;
    color: ${({ theme }) => theme.primary};
    margin-bottom: 2rem;
  }

  p {
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.8rem;
    margin-left: 0.5rem;
    color: ${({ theme }) => darken(0.3, theme.text)};
  }

  @media (max-width: 1450px) {
    gap: 1.6rem;

    h2 {
      font-size: 2.2rem;
    }

    h1 {
      font-size: 5rem;
    }

    p {
      font-size: 1.6rem;
      line-height: 2.6rem;
    }
  }

  @media (max-width: 1000px) {
    gap: 0.6rem;

    h2 {
      font-size: 2rem;
    }

    h1 {
      font-size: 4rem;
    }

    p {
      font-size: 1.4rem;
      line-height: 2rem;
    }
  }

  @media (max-width: 700px) {
    gap: 0.4rem;

    h2 {
      font-size: 1.8rem;
    }

    h1 {
      font-size: 4rem;
    }

    p {
      font-size: 1.2rem;
      line-height: 1.8rem;
    }
  }
`;

export const InfosContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const CodeItem = styled.pre`
  background: ${({ theme }) => theme.gradient};
  padding: 2rem;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 500;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.text};
  width: 24rem;
  align-self: flex-start;
  cursor: pointer;
  transition: 1s;

  &:last-child {
    align-self: flex-end;
  }

  &:hover {
    filter: brightness(1.2);
  }

  > div {
    margin: 0.2rem 0;
    margin-left: 1rem;
  }

  span.comment {
    color: ${({ theme }) => theme.text};
    margin-bottom: 1rem;
    display: block;
  }

  span.purple {
    color: #f36aff;
  }

  span.data {
    color: #ffbb56;
  }
`;

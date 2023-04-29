import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.pre`
  background: ${({ theme }) => theme.gradient};
  padding: 2rem;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 300;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.text};
  width: 24rem;
  align-self: flex-start;
  cursor: pointer;
  transition: 1s !important;
  border-radius: 0.5rem;

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
    color: ${({ theme }) => darken(0.3, theme.text)};
    margin-bottom: 1rem;
    display: block;
  }

  span.purple {
    color: #f36aff;
  }

  span.data {
    color: #ffbb56;
    margin-left: 0.5rem;
  }

  @media (max-width: 1450px) {
    width: 18rem;
    padding: 1.5rem;
    font-size: 0.8rem;
  }

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

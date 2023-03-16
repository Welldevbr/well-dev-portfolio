import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 100%;
    background: ${({ theme }) => theme.gradient};
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 20rem;
    }
  }
`;

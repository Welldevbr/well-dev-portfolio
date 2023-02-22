import styled from 'styled-components';

export const Container = styled.div`
  > a {
    position: relative;
    width: 100%;
    height: 15rem;
    padding: 1.5rem;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    border-radius: 0.5rem;
    border: 1px solid ${({ theme }) => theme.border};
    cursor: pointer;
    overflow: hidden;
    transition: 0.5s;
  }
`;

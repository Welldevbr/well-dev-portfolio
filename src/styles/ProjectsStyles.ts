import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-top: 8rem;

  > main {
    margin-block: 5rem;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;

    @media (max-width: 1000px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 550px) {
      grid-template-columns: 1fr;
    }
  }
`;

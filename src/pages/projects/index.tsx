import Header from '../../components/Header';
import { Project } from '../../components/Project';
import { ProjectsContainer } from '../../styles/ProjectsStyles';
import breeze from '../../assets/breeze.png';

export default function Projects() {
  return (
    <>
      <Header />
      <ProjectsContainer>
        <main className="container">
          <Project
            title="Breeze ask"
            type="Website"
            slug="breeze"
            imgUrl={breeze}
          />
          <Project
            title="Comics Marvel"
            type="Website"
            slug="comics"
            imgUrl={breeze}
          />
          <Project title="Move.it" type="Website" slug="move" imgUrl={breeze} />
        </main>
      </ProjectsContainer>
    </>
  );
}

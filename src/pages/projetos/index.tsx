import Header from '../../components/Header';
import { Project } from '../../components/Project';
import { ProjectsContainer } from '../../styles/ProjectsStyles';
import breeze from '../../assets/breeze.png';
import comics from '../../assets/comics.png';
import moveit from '../../assets/move.png';
import { CarouselProject } from '../../components/CarouselProject';

export default function Projetos() {
  return (
    <>
      <Header />
      <ProjectsContainer>
        <main className="container">
          <section>
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
              imgUrl={comics}
            />
            <Project
              title="Move.it"
              type="Website"
              slug="moveit"
              imgUrl={moveit}
            />
          </section>
          <div>
            <h1> Projetos recentes </h1>
            <CarouselProject />
          </div>
        </main>
      </ProjectsContainer>
    </>
  );
}

import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Header from '../../components/Header';
import { Project } from '../../components/Project';
import { ProjectsContainer } from '../../styles/ProjectsStyles';
import breeze from '../../assets/breeze.png';
import comics from '../../assets/comics.png';
import moveit from '../../assets/move.png';

export default function Projetos() {
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
            imgUrl={comics}
          />
          <Project
            title="Move.it"
            type="Website"
            slug="moveit"
            imgUrl={moveit}
          />
        </main>
        <div>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block"
                src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
                alt="ImageOne"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block"
                src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
                alt="ImageTwo"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
                alt="ImageTwo"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
                alt="ImageTwo"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </ProjectsContainer>
    </>
  );
}

/* eslint-disable react/no-unused-prop-types */
import { ReactNode } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { SiGithub } from 'react-icons/si';
import { Container, SkillsContainer } from './styles';
import BannerProject from '../BannerProject';
import { Button } from '../Button/Index';
import { SliderProject } from '../SliderProject';

interface ProjectOwnProps {
  title: string;
  type: string;
  description: ReactNode;
  bannerImg: string;
  skillsItens: {
    name: string;
  }[];
  imgsUrls: {
    url: string;
  }[];
  demoLink: string;
  repoLink: string;
}

export function ProjectOwn({
  title,
  type,
  description,
  bannerImg,
  skillsItens,
  imgsUrls,
  demoLink,
  repoLink
}: ProjectOwnProps) {
  function handleRedirect(url: string) {
    window.open(url, '_blank');
  }
  return (
    <Container>
      <div>
        <BannerProject title={title} type={type} imgUrl={bannerImg} />
      </div>

      <main>
        {description}
        <section>
          <SkillsContainer>
            <h1>Habildades Utilizadas</h1>
            <span>
              {skillsItens.map(skill => (
                <p>{skill.name}</p>
              ))}
            </span>
          </SkillsContainer>
          <SliderProject>
            {imgsUrls.map(image => (
              <Carousel.Item>
                <img src={image.url} alt="" />
              </Carousel.Item>
            ))}
          </SliderProject>
        </section>

        <div>
          <Button onClick={() => handleRedirect(demoLink)} type="button">
            <a href="#">Ver projeto online</a>
          </Button>
          <Button
            onClick={() => handleRedirect(repoLink)}
            isOutlined
            type="button"
          >
            <a href="#">
              Ver repositorio <SiGithub />
            </a>
          </Button>
        </div>
      </main>
    </Container>
  );
}

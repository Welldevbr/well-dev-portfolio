import Link from 'next/link';
import { AiOutlineRightCircle } from 'react-icons/ai';
import { ProjectContainer } from './styles';

interface ProjectProps {
  title: string;
  type: string;
  img: string;
  slug: string;
}

export function ProjectItem({ title, type, img, slug }: ProjectProps) {
  return (
    <ProjectContainer imgUtl={img} data-aos="fade-up">
      <section>
        <div className="overlay" />
        <div className="text">
          <h1># {title}</h1>
          <h2>- {type}</h2>
        </div>
      </section>
      <button type="button">
        <Link href={`/projetos/${slug}`}>
          <a>
            Ver mais <AiOutlineRightCircle />
          </a>
        </Link>
      </button>
    </ProjectContainer>
  );
}

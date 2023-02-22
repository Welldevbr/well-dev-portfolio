import Link from 'next/link';
import { Container } from './styles';

interface ProjectProps {
  title: string;
  type: string;
  imgUrl?: string;
  slug: string;
}

export function Project({ title, type, imgUrl, slug }: ProjectProps) {
  return (
    <Container>
      <Link href={`/projects/${slug}`}>
        <a>
          <div className="overlay">
            <section>
              <img src={imgUrl} alt="" />
              <h1>{title}</h1>
              <h2>{type}</h2>
            </section>
          </div>
        </a>
      </Link>
    </Container>
  );
}

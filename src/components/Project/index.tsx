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
    <Container imgUrl={imgUrl} data-aos="fade-left">
      <Link href={`/projetos/${slug}`}>
        <a>
          <div className="overlay" />
          <section>
            <h1>{title}</h1>
            <h2>{type}</h2>
          </section>
        </a>
      </Link>
    </Container>
  );
}

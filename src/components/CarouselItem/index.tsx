import Link from 'next/link';
import { RiShareBoxLine } from 'react-icons/ri';
import { Container } from './styles';

interface ProjectProps {
  imgUrl?: string;
  slug: string;
}

export function CarouselItem({ imgUrl, slug }: ProjectProps) {
  return (
    <Container imgUrl={imgUrl}>
      <Link href={`/projetos/${slug}`}>
        <a>
          <span>
            Ver projeto
            <RiShareBoxLine />
          </span>
          <div className="overlay" />
        </a>
      </Link>
    </Container>
  );
}

import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavLinkContainer } from './styles';

interface Props {
  title: string;
  path: string;
  includes?: boolean;
}

export function NavLink({ title, path, includes = false }: Props) {
  const router = useRouter();

  function handleVerifyIsActive() {
    if (includes) {
      return router.pathname.includes(path);
    }
    return path === router.pathname;
  }

  const isActive = handleVerifyIsActive();

  return (
    <NavLinkContainer isActive={isActive}>
      <Link href={path}>
        <a>{title}</a>
      </Link>
    </NavLinkContainer>
  );
}

import { ReactNode } from 'react';
import { NavBar } from '../../components/NavBar';
import { navigations } from '../navigations/navigation';
import { Main } from '../../components/styleds/Main';

// ReactNode = 'string' | number | boolean | HTML
// Element = HTML

interface DefaultLayoutProps {
  children: ReactNode;
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <>
      <NavBar navigations={navigations} />
      <Main>{children}</Main>
      <footer>Meu footer</footer>
    </>
  );
}

import { Button } from './styleds/Button';
import { Avatar } from './styleds/Avatar';
import { Header } from './styleds/Header';
import { Link } from 'react-router-dom';
import logo from '../assets/logos/logo.webp';
import { Navigation } from '../config/navigations/types';

interface NavBarProps {
  navigations: Navigation[];
}

export function NavBar({ navigations }: NavBarProps) {
  return (
    <Header>
      <Avatar src={logo} alt="Logo" size="sm" />
      <nav>
        {navigations.map((nav) => {
          return <Link to={nav.to}>{nav.title}</Link>;
        })}

        <Button size="small">Login</Button>
      </nav>
    </Header>
  );
}

import { Avatar } from "./styleds/Avatar";
import { Header } from "./styleds/Header";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import { Navigation } from "../config/navigations/types";
import { Button } from "./styleds/Button";
import { useContext } from "react";
import { ThemeContext } from "../config/contexts/ThemeContext";

interface NavBarProps {
  navigations: Navigation[];
}

export function NavBar({ navigations }: NavBarProps) {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <Header>
      <Link to="/">
        <Avatar src={logo} alt="Logo" size="sm" />
      </Link>
      <nav>
        {navigations.map((nav) => {
          return <Link to={nav.to}>{nav.title}</Link>;
        })}
      </nav>

      <Button onClick={toggleTheme}>
        {theme === "light" ? "DarkMode" : "LightMode"}
      </Button>
    </Header>
  );
}

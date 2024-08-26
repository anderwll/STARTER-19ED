import { Link } from "react-router-dom";
import { Button } from "../components/Button/Button";
import { Header } from "../components/Header/Header";
import { Main } from "../components/Main/Main";
import { Footer } from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Header>
        <h1>Home</h1>
        <a href="/">Sair</a>
      </Header>
      <Main>
        <Link to="/about">
          <Button>Sobre nós</Button>
        </Link>
      </Main>
      <Footer></Footer>
    </>
  );
}

export default Home;

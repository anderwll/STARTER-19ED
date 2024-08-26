import { Link } from "react-router-dom";
import { Button } from "../components/Button/Button";
import { Header } from "../components/Header/Header";
import { Main } from "../components/Main/Main";
import { Footer } from "../components/Footer/Footer";

function About() {
  return (
    <>
      <Header>
        <h1>Sobre nós</h1>
        <a href="/">Sair</a>
      </Header>
      <Main>
        <section>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet non
            hic itaque delectus, totam velit. Cumque cupiditate suscipit
            reprehenderit, id perspiciatis autem commodi. Molestias doloribus
            quisquam nostrum dolores dolor voluptas?
          </p>
        </section>
        <Link to="/">
          <Button>Home</Button>
        </Link>
      </Main>
      <Footer></Footer>
    </>
  );
}

export default About;

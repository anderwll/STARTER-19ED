import { Button } from "../components/styleds/Button";
import { MainBanner } from "../components/styleds/MainBanner";
import { Title } from "../components/styleds/Title";

export function Home() {
  return (
    <>
      <MainBanner>
        <Title color="white">Meu titulo</Title>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          velit, veritatis.
        </p>

        <Button>Saiba mais</Button>
      </MainBanner>

      <Title>Outro titulo</Title>
    </>
  );
}

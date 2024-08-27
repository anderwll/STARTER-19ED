import { Button } from "./styleds/Button";
import { MainBanner } from "./styleds/MainBanner";
import { Title } from "./styleds/Title";

export function Banner() {
  return (
    <MainBanner>
      <Title color="white">Meu titulo</Title>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam velit,
        veritatis.
      </p>
      <Button>Saiba mais</Button>
    </MainBanner>
  );
}

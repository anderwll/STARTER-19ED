import { Button } from './styleds/Button';
import { MainBanner } from './styleds/MainBanner';

export function Banner() {
  return (
    <MainBanner>
      <h1>Meu titulo</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam velit, veritatis.</p>
      <Button>Saiba mais</Button>
    </MainBanner>
  );
}

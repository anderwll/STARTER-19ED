import { Button } from "./styleds/Button";
import { Container } from "./styleds/Container";
import { GalleryContent } from "./styleds/GalleryContent";
import { Title } from "./styleds/Title";

const imgsContent = Array.from({ length: 9 }, (_, index) => ({
  imgSrc: "http://via.placeholder.com/800",
  imgAlt: `Imagem ${index}`,
}));

export function Gallery() {
  return (
    <Container flexDirection="column" gap="28px">
      <Title>Minha galeria</Title>

      <GalleryContent>
        {imgsContent.map((item) => (
          <img src={item.imgSrc} alt={item.imgAlt} />
        ))}
      </GalleryContent>

      <p>Lorem ipsum dolor sit amet.</p>
      <Button>Veja mais</Button>
    </Container>
  );
}

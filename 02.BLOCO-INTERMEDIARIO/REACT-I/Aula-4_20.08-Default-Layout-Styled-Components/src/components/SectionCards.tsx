import { Avatar } from './styleds/Avatar';
import { Button } from './styleds/Button';
import { Card } from './styleds/Card';
import { Container } from './styleds/Container';

type CardContent = {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
};

const cardsContent: CardContent[] = [
  {
    imgSrc: 'https://avatar.iran.liara.run/public',
    imgAlt: 'Imagem 1',
    title: 'Titulo 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    imgSrc: 'https://avatar.iran.liara.run/public',
    imgAlt: 'Imagem 2',
    title: 'Titulo 2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    imgSrc: 'https://avatar.iran.liara.run/public',
    imgAlt: 'Imagem 3',
    title: 'Titulo 3',
    description: 'Consectetur adipisicing elit. Excepturi quaerat. hehe',
  },
];

export function SectionCards() {
  return (
    <Container>
      {cardsContent.map((card) => (
        <Card>
          <Avatar src={card.imgSrc} alt={card.imgAlt} size="lg" />
          <h1>{card.title}</h1>
          <p>{card.description}</p>
          <Button>Veja mais</Button>
        </Card>
      ))}
    </Container>
  );
}

import { Link } from 'react-router-dom';
import { Button } from '../components/styleds/Button';
import { Container } from '../components/styleds/Container';
import { Title } from '../components/styleds/Title';

export function Error() {
  return (
    <Container flexDirection="column" gap="30px">
      <Title>Ops! Página não encontrada 😐</Title>

      <Link to="/">
        <Button>Voltar para home</Button>
      </Link>
    </Container>
  );
}

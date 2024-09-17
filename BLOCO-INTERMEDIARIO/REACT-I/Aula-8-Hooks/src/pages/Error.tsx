import { Link } from 'react-router-dom';
import { Button } from '../components/styleds/Button';
import { Container } from '../components/styleds/Container';

export function Error() {
  return (
    <Container flexDirection="column" gap="30px">
      <h1>Ops! Página não encontrada 😐</h1>

      <Link to="/">
        <Button>Voltar para home</Button>
      </Link>
    </Container>
  );
}

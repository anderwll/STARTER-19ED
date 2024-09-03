## Presentational x Container

**Presentational**

```bash

interface MeuComponenteProps {
    propriedade1: string
}

function MeuComponente(props: MeuComponenteProps) {
    return (
        { props.propriedade1 }
    )
}


```

**Container**

```bash

interface MeuComponenteProps {
    propriedade1: string
}

function MeuComponente(props: MeuComponenteProps) {
    const [valor, setValor] = useState(0)

    const minhaFuncao() {
        setValor(1)
    }

    return (
        <>
            { valor }
            <button>Somar</button>
        </>
    )
}


```

**Componentes de Class**

```bash

class MeuComponenteClasse extends Component {
  constructor(props) {
    super(props);
    // Inicializa o state
    this.state = {
      contador: 0,
    };
  }

  // Método para incrementar o contador
  incrementar = () => {
    this.setState((prevState) => ({
      contador: prevState.contador + 1,
    }));
  };

  // Método para decrementar o contador
  decrementar = () => {
    this.setState((prevState) => ({
      contador: prevState.contador - 1,
    }));
  };

  render() {
    return (
      <div>
        <h2>Contador: {this.state.contador}</h2>
        <button onClick={this.decrementar}>Diminuir</button>
        <button onClick={this.incrementar}>Aumentar</button>
      </div>
    );
  }
}

export default MeuComponenteClasse;

```

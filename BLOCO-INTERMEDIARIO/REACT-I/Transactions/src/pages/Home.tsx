import { useState } from "react";
import { Button } from "../components/styleds/Button";
import { Container } from "../components/styleds/Container";
import { DefaultLayout } from "../config/layouts/DefaultLayout";
import { List } from "../components/styleds/List";
import { FloatButton } from "../components/styleds/FloatButton";
import { Select } from "../components/styleds/Select";
import { generateId, Toast, Transactions } from "../config/types";
import { ModalTransactions } from "../components/ModalTransactions";
import { ModalDoEma } from "../components/Modal";
import { Input } from "../components/styleds/Input";
import { SelectModal } from "../components/SelectModal";
import { ToastResposta } from "../config/hooks/ToastRespostas";

export function Home() {
  const [transactions, setTransactions] = useState<Transactions[]>([
    {
      id: "1",
      tipo: "Entrada",
      descricao: "Salário",
      valor: 1600,
      criadoEm: new Date(),
    },
  ]);
  const [transationObject, setTransactionObject] = useState<Transactions>();
  const [selected, setSelected] = useState<string | number>();
  const [openAdd, setOpenAdd] = useState(false);
  const [toastProps, setToastProps] = useState<Toast>();
  const [showToast, setShowToast] = useState(false);

  function formatDate(date: string | Date) {
    if (date instanceof Date) {
      return date.toLocaleDateString();
    }

    return new Date(date).toLocaleDateString();
  }

  const handleSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
    console.log(selected);
  };

  function openModal() {
    setOpenAdd(!openAdd);
  }

  const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const descricao = e.currentTarget.descricao.value;
    const valor = e.currentTarget.valor.value;
    const tipo = e.currentTarget.tipo.value;

    const objectForm: Transactions = {
      id: generateId(),
      tipo: tipo,
      descricao: descricao,
      valor: valor,
      criadoEm: new Date(),
    };

    transactions.push(objectForm);

    setToastProps({
      message: "Transação criada com sucesso",
      duration: 3000,
      type: "success",
    });

    setShowToast(!showToast);
    setOpenAdd(!openAdd);

    console.log(toastProps);
  };

  const handleCloseToast = () => {
    setShowToast(false);
  };

  return (
    <DefaultLayout>
      <Container>
        <Select value={selected} onChange={handleSelection}>
          <option value="" selected disabled>
            Selecione um tipo
          </option>
          <option value="Entrada">Entrada</option>
          <option value="Saída">Saída</option>
        </Select>
        <p>Tipo selecionado: {selected}</p>
        <List>
          <thead>
            <th>ID</th>
            <th>TIPO</th>
            <th>VALOR</th>
            <th>DESCRIÇÃO</th>
            <th>DATA DE CRIÇÃO</th>
            <th>AÇÃO</th>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.id}</td>
                <td>{transaction.tipo}</td>
                <td>{transaction.valor}</td>
                <td>{transaction.descricao}</td>
                <td>{formatDate(transaction.criadoEm)}</td>
                <td className="acao">
                  <Button
                    size="medium"
                    onClick={() =>
                      alert(`Deletando transação ${transaction.id}`)
                    }
                  >
                    Editar
                  </Button>
                  <Button
                    size="medium"
                    variant="error"
                    onClick={() =>
                      alert(`Deletando transação ${transaction.id}`)
                    }
                  >
                    Deletar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </List>
      </Container>
      <FloatButton onClick={openModal}>+</FloatButton>
      {/* <ModalTransactions
        tipo="Criar"
        isOpen={open}
        onClose={() => {
          setOpen(!open);
        }}
      /> */}

      {showToast && (
        <ToastResposta
          message={toastProps?.message}
          duration={toastProps?.duration}
          type={toastProps?.type}
          onClose={handleCloseToast}
        />
      )}
      <ModalDoEma
        tipo="Criar"
        isOpen={openAdd}
        onClose={() => setOpenAdd(false)}
      >
        <form onSubmit={handleAdd}>
          <SelectModal
            value={transationObject?.tipo}
            name="tipo"
            requerid={true}
            onChange={(e) => e.target.value}
          />
          <Input
            name="descricao"
            placeholder="Descrição"
            required
            value={transationObject?.descricao}
            onChange={(e) => e.target.value}
          />
          <Input
            name="valor"
            placeholder="Valor"
            required
            value={transationObject?.valor}
            onChange={(e) => e.target.value}
          />
          <div>
            <Button type="submit">Salvar</Button>
            <Button variant="error" onClick={() => setOpenAdd(!openAdd)}>
              Cancelar
            </Button>
          </div>
        </form>
      </ModalDoEma>
    </DefaultLayout>
  );
}

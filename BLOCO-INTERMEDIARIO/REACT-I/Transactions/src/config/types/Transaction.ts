export type Transactions = {
  id: string;
  tipo: string | undefined;
  valor: number;
  descricao: string;
  criadoEm: string | Date;
};

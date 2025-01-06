export type Transaction = {
  id: string;
  tipo: string | undefined;
  valor: number;
  descricao: string;
  criadoEm: Date;
};

// PascalCase
// camelCase

type TipoGenerico = string | number | boolean | undefined;
const arrayGeneric: TipoGenerico[] = ["", 1, true, undefined];

type Setor = "moveis" | "ferramentas" | "eletronicos";
export type Cliente = {
  nome: string;
  telefone: number;
  setor: Setor;
};

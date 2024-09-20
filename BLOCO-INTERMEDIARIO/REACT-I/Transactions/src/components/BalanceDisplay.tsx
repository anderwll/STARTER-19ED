import { Box } from "./styleds/Box";

interface BalanceDisplayProps {
  saldo: number;
  saldoFiltered?: number;
}

export function BalanceDisplay({ saldo, saldoFiltered }: BalanceDisplayProps) {
  return (
    <Box>
      <h1>R$ {saldo.toFixed(2)}</h1>
      {saldoFiltered !== undefined && (
        <h4>Saldo filtrado: R${saldoFiltered.toFixed(2)}</h4>
      )}
    </Box>
  );
}

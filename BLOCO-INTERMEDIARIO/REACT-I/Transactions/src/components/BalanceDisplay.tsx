interface BalanceDisplayProps {
  saldo: number;
  saldoFiltered?: number;
}

export function BalanceDisplay({ saldo, saldoFiltered }: BalanceDisplayProps) {
  return (
    <div>
      <h1>R$ {saldo.toFixed(2)}</h1>
      {saldoFiltered !== undefined && (
        <h4>Saldo filtrado: R${saldoFiltered.toFixed(2)}</h4>
      )}
    </div>
  );
}

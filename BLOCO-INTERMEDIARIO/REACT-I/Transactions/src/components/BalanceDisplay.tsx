interface BalanceDisplayProps {
  saldo: number;
}

export function BalanceDisplay({ saldo }: BalanceDisplayProps) {
  return (
    <div>
      <h1>R$ {saldo.toFixed(2)}</h1>
    </div>
  );
}

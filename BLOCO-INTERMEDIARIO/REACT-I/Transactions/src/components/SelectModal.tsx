import { Select } from "./styleds/Select";

interface SelectModalProps {
  onChange?: React.ChangeEventHandler<HTMLSelectElement> | undefined;
  value: string | number;
}

export function SelectModal({ onChange, value }: SelectModalProps) {
  return (
    <Select marginTop="20px" value={value} onChange={onChange}>
      <option value="" selected disabled>
        Selecione um tipo
      </option>
      <option value="Entrada">Entrada</option>
      <option value="Saída">Saída</option>
    </Select>
  );
}

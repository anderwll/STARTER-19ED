import { Select } from "./styleds/Select";
interface SelectModalProps {
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  name?: string;
  requerid?: boolean;
}

export function SelectModal({
  value,
  onChange,
  name,
  requerid,
}: SelectModalProps) {
  return (
    <Select
      width="95%"
      padding="20px"
      marginTop="10px"
      value={value}
      name={name}
      required={requerid}
      onChange={onChange}
    >
      <option value="" selected disabled>
        Selecione um tipo
      </option>
      <option value="Entrada">Entrada</option>
      <option value="Saída">Saída</option>
    </Select>
  );
}

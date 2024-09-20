import { Select } from "./styleds/Select";
interface SelectModalProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  name?: string;
  requerid?: boolean;
  width?: string;
  disabledFirtsOption?: boolean;
}

export function SelectModal({
  value,
  onChange,
  name,
  requerid,
  width,
  disabledFirtsOption,
}: SelectModalProps) {
  return (
    <Select
      width={width}
      marginTop="10px"
      value={value}
      name={name}
      required={requerid}
      onChange={onChange}
    >
      <option value="" selected disabled={disabledFirtsOption ?? true}>
        Selecione um tipo...
      </option>
      <option value="entrada">Entrada</option>
      <option value="saida">Saída</option>
    </Select>
  );
}

import { useState } from "react";
import { Select } from "./styleds/Select";

export function SelectModal() {
  const [ selected, setSelected ] = useState<string>("")
  
  function handleSelected(e: React.ChangeEvent<HTMLSelectElement>) {
		setSelected(e.target.value);
	}

  return (
		<Select
			width='95%'
			padding='20px'
      marginTop='10px'
      value={selected}
			onChange={handleSelected}>
			<option
				value=''
				selected
				disabled>
				Selecione um tipo
			</option>
			<option value='Entrada'>Entrada</option>
			<option value='Saída'>Saída</option>
		</Select>
	);
}

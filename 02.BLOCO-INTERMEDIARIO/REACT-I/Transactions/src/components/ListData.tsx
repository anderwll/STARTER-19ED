import { useEffect, useState } from "react";

interface ListDataProps {
  getData: () => Promise<any>;
}

export default function ListData({ getData }: ListDataProps) {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    getData().then((valor) => setData(valor));
  }, [getData]);

  return (
    <>
      {data.length ? (
        data.map((item) => (
          <>
            <p>{item.id}</p>
            <p>{item.title}</p>
            <br />
          </>
        ))
      ) : (
        <h1>Nenhum dado encontrado</h1>
      )}
    </>
  );
}

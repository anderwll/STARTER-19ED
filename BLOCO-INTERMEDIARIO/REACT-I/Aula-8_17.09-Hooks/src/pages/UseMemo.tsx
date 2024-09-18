import React from "react";

/**
 * useMemo
 *
 * O useMemo é um hook que serve para memorizar um valor.
 *
 * const valor = useMemo(() => {
 * // código
 * }, [dependencias]);
 *
 * Se o array de dependências não for passado, o valor será memorizado e não será recriado.
 * Se o array de dependências estiver vazio, o valor será recriado a cada renderização.
 * Se o array de dependências tiver valores, o valor será recriado quando esses valores mudarem.
 *
 * Exemplos de uso:
 * - cálculos pesados;
 * - formatação de dados.
 */

export default function UseMemo() {
  return <div></div>;
}

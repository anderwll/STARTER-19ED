import React from "react";

/**
 * useCallback
 *
 * O useCallback é um hook que serve para memorizar uma função.
 *
 * const funcao = useCallback(() => {
 * // código
 * }, [dependencias]);
 *
 * Se o array de dependências não for passado, a função será memorizada e não será recriada.
 * Se o array de dependências estiver vazio, a função será recriada a cada renderização.
 * Se o array de dependências tiver valores, a função será recriada quando esses valores mudarem.
 *
 * Exemplos de uso:
 * - passar funções para componentes filhos;
 * - passar funções para useEffect;
 */
export default function UseCallback() {
  return <div></div>;
}

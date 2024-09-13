export default function UseEffect() {
  /**
   * useEffect
   *
   * O useEffect é um hook que serve para executar efeitos colaterais em componentes funcionais.
   *
   * É executado quando:
   * - o componente é montado (didMount);
   * - o componente é atualizado (didUpdate);
   * - o componente é desmontado (willUnmount).
   *
   * useEffect(() => {
   *  // código (montagem)
   *
   *  return () => {
   *   // código (desmontagem)
   *  }
   * }, [dependencias]);
   *
   * Se o array de dependências não for passado, o useEffect será executado a cada renderização (didUpdate).
   * Se o array de dependências estiver vazio, o useEffect será executado apenas uma vez (didMount)
   * Se o array de dependências tiver valores, o useEffect será executado quando esses valores mudarem (didUpdate).
   *
   */

  return <div></div>;
}

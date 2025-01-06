export function somar(a: number, b: number) {
  return a + b;
}

export function printar(): void {
  console.log("Olá mundo!");
}

export function maioridade(idade: number): boolean {
  if (idade >= 18) {
    return true;
  }
  return false;
}

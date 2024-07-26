export class Casa {
  // ATRIBUTOS = propriedades
  janelas: number = 0; // Definiu um valor padrão
  largura!: number; // ! = Afirma que a propriedade não será nulla.
  altura: number; // Lá no tsconfig.json mudar => "strictPropertyInitialization": false

  // MÉTODOS = funções ou ações
  abrirJanela(): void {
    // Lógica...
    console.log("Abrindo a jenela....");
  }

  fecharJanela(parametro: string): void {
    // Lógica...
    console.log("Fechando a jenela....", parametro);
  }
}

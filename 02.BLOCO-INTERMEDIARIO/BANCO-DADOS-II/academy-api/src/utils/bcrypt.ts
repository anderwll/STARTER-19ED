import bcrypt from "bcrypt";

export class Bcrypt {
  // Embaralhar a nossa senha (criar o hash) => // $2a$10$..Z1P/ls25bYKpWYocayUuh/nmIPnAo2ScuEId7vBdBMNK/vnJGzS
  public async generateHash(password: string): Promise<string> {
    const hash = await bcrypt.hash(password, Number(process.env.BCRYPT_SALT));
    return hash;
  }

  // Verificar o nosso hash // senha123 === $2a$10$..Z1P/ls25bYKpWYocayUuh/nmIPnAo2ScuEId7vBdBMNK/vnJGzS => true
  public async verify(password: string, hash: string): Promise<boolean> {
    const isValid = await bcrypt.compare(password, hash);
    return isValid;
  }
}

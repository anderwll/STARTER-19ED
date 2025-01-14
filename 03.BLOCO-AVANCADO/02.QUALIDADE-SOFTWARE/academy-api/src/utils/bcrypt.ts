import bcrypt from "bcrypt";

/**
 * @name Bcrypt
 * @description É uma adaptação da biblioteca bcrypt.
 * @see Documentação {@link https://www.npmjs.com/package/bcrypt}
 * @author Anderson Wilmsen
 */
export class Bcrypt {
  /**
   * @name generateHash()
   * @description Método responsável por gerar um hash.
   * @param password Senha que será encriptografada.
   * @returns Hash - Hash gerado.
   * @example
   * const bcrypt = new Bcrypt();
   * const passwordHash = await bcrypt.generateHash(password);
   */
  public async generateHash(password: string): Promise<string> {
    const hash = await bcrypt.hash(password, Number(process.env.BCRYPT_SALT));
    return hash;
  }

  public async verify(password: string, hash: string): Promise<boolean> {
    const isValid = await bcrypt.compare(password, hash);
    return isValid;
  }
}

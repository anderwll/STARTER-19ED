import bcrypt from "bcrypt";

/**
 * @class Bcrypt
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

	/**
   *  @name verify()
   *  @description Método para verificar se a senha fornecida e o hash são equivalentes.
   *  @param password Senha no formato "string" fornecido para comparação. 
   *  @param hash - String encriptografada para comparação.
   *  @returns Retorna uma Promise de boolean.
   *  @example
   *  const bcrypt = new Bcrypt();
   *  const isValid = await bcrypt.verify(password, hash);
   */
	public async verify(password: string, hash: string): Promise<boolean> {
		const isValid = await bcrypt.compare(password, hash);
		return isValid;
	}
}

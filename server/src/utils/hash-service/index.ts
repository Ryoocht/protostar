import * as bcrypt from 'bcrypt'

export default class HashService {
  /**
   * Hash the string
   * @param password string to hash
   * @return String hashed string
   */
  static async hash(password: string): Promise<string> {
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hash(password, salt)
  }

  /**
   * Check if the string is correct
   * @param password the string to compare
   * @param hash the hash to compare with
   * @return Boolean true if the string is correct, false otherwise
   */
  static async compare(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash)
  }
}

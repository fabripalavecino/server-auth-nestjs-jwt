import * as bcrypt from 'bcrypt';

export async function hashPassword(password) {
  return await bcrypt.hash(password, 10);
}

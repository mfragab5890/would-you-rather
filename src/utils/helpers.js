import bcrypt from 'bcryptjs'

export async function hashIt(password){
  const salt = await bcrypt.genSaltSync(10);
  const hashed = await bcrypt.hashSync(password, salt);
  return hashed;
}

export async function compareIt(password, hashedPassword){
  const validPassword = await bcrypt.compareSync(password, hashedPassword);
  return validPassword;
}

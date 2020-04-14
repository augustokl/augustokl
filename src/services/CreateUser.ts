interface TechObject {
  title: string;
  experince: number;
}

interface CreateUserData {
  name?: string;
  email: string;
  password: string;
  techs: Array<string | TechObject>;
}

export default function User({ name = '', email, password }: CreateUserData) {
  const user = {
    name,
    email,
    password,
  };
  return user;
}

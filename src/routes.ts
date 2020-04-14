import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    name: 'Augusto',
    email: 'augusto@teste.com',
    password: '12345678',
    techs: [
      'NodeJs',
      'ReactJs',
      'React Native',
      { title: 'JavaScript', experince: 5 },
    ],
  });

  return response.json({ message: 'Hello World!' });
}

import { CreateUserRequest } from '@/api/dto/CreateUserRequest';
import { LoginRequest } from '@/api/dto/LoginRequest';
import { redirect } from 'next/navigation';

export const createUser = async (data: CreateUserRequest) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_TODOLIST_MS_BASEURL}/auth/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response.url;
}

export const login = async (data: LoginRequest) => {
  await fetch(`${process.env.NEXT_PUBLIC_TODOLIST_MS_BASEURL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then((response) => {
    if (!response.ok) {
      throw new Error('Http Status response was not ok');
    }

    response.json().then((data) => {
      const token = data?.token;
      if (!token) {
        throw new Error('Token not found in response');
      }

      localStorage.setItem('token', token);
      redirect('/home');
    });


  });
}
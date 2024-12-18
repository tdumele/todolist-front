import { CreateUserRequest } from '@/api/dto/CreateUserRequest';

export const createUser = async (data: CreateUserRequest) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_TODOLIST_MS_BASEURL}/api/v1/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return await response.json();
}
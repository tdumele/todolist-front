import { GetTaskResponse } from '@/api/dto/GetTasksResponse';

export const updateTask = async (task: GetTaskResponse, todolistId: string) => {
  // TODO call the API to update the
  await fetch(`${process.env.NEXT_PUBLIC_TODOLIST_MS_BASEURL}/api/v1/todolists/${todolistId}/tasks`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(task)
  });
}
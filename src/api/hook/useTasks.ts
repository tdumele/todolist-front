import { useState, useEffect } from 'react';
import { GetTaskResponse } from '@/api/dto/GetTasksResponse';

export const useTasks = ({ todolistId }: { todolistId: string }) => {
  const [tasks, setTasks] = useState<GetTaskResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_TODOLIST_MS_BASEURL}/api/v1/todolists/${todolistId}/tasks`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch tasks');
        }

        const data = await response.json();
        setTasks(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  return { tasks, loading, error };
};
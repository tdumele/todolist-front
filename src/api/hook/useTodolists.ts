import { useState, useEffect } from 'react';
import { TodoList } from '@/api/dto/TodoList';

export const useTodolists = () => {
  const [todolists, setTodolists] = useState<TodoList[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean | null>(null);

  useEffect(() => {
    const fetchTodolists = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_TODOLIST_MS_BASEURL}/api/v1/todolists`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch todolists');
        }

        const data = await response.json();
        setTodolists(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchTodolists();
  }, []);

  return { todolists, loading, error };
};
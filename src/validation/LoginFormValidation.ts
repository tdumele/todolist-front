import { z } from 'zod';

export const LoginSchema = z.object({
  password: z
    .string()
    .min(3)
    .max(20),
  username: z
    .string()
    .min(3)
    .max(20),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;
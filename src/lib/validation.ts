import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Please share your name.'),
  email: z.string().email('A valid email is required.'),
  goals: z.string().min(10, 'Tell us about your goals.'),
  preferredTime: z.string().min(2, 'Share your preferred time.'),
});

export type ContactSchema = z.infer<typeof contactSchema>;

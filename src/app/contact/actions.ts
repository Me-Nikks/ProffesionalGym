'use server';

import { contactSchema, type ContactSchema } from '@/lib/validation';

export async function submitContact(payload: ContactSchema) {
  const data = contactSchema.parse(payload);

  // TODO: Integrate with email provider or CRM.
  console.info('New concierge request', data);

  return { success: true };
}

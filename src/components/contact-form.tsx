'use client';

import { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, type ContactSchema } from '@/lib/validation';
import { Button } from '@/components/button';
import { submitContact } from '@/app/contact/actions';

export function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactSchema) => {
    startTransition(async () => {
      await submitContact(data);
      reset();
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.3em] text-white/60" htmlFor="name">
            Full name
          </label>
          <input
            id="name"
            {...register('name')}
            className="w-full rounded-2xl border border-white/10 bg-surface px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-accent/70 focus:outline-none"
            placeholder="Jordan Blake"
          />
          {errors.name ? <p className="text-xs text-accent">{errors.name.message}</p> : null}
        </div>
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.3em] text-white/60" htmlFor="email">
            Email address
          </label>
          <input
            id="email"
            type="email"
            {...register('email')}
            className="w-full rounded-2xl border border-white/10 bg-surface px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-accent/70 focus:outline-none"
            placeholder="jordan@domain.com"
          />
          {errors.email ? <p className="text-xs text-accent">{errors.email.message}</p> : null}
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-xs uppercase tracking-[0.3em] text-white/60" htmlFor="goals">
          Training goals
        </label>
        <textarea
          id="goals"
          rows={4}
          {...register('goals')}
          className="w-full rounded-2xl border border-white/10 bg-surface px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-accent/70 focus:outline-none"
          placeholder="Share the performance outcomes you want to achieve."
        />
        {errors.goals ? <p className="text-xs text-accent">{errors.goals.message}</p> : null}
      </div>
      <div className="space-y-2">
        <label
          className="text-xs uppercase tracking-[0.3em] text-white/60"
          htmlFor="preferredTime"
        >
          Preferred tour time
        </label>
        <input
          id="preferredTime"
          {...register('preferredTime')}
          className="w-full rounded-2xl border border-white/10 bg-surface px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-accent/70 focus:outline-none"
          placeholder="Weekday evenings or Saturday morning"
        />
        {errors.preferredTime ? (
          <p className="text-xs text-accent">{errors.preferredTime.message}</p>
        ) : null}
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" disabled={isPending}>
          {isPending ? 'Sending' : 'Send invitation request'}
        </Button>
        {isSubmitSuccessful ? (
          <p className="text-xs uppercase tracking-[0.3em] text-accent">
            Request received. Concierge will reply shortly.
          </p>
        ) : null}
      </div>
    </form>
  );
}

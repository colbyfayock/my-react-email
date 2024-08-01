'use client';

import { FormEvent } from "react";

export default function Home() {
  async function handleOnSubmit(event: React.SyntheticEvent) {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      email: { value: string };
    };
    
    const results = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({
        email: target.email.value,
        validationCode: `efgh5678`
      })
    }).then(r => r.json());
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <form onSubmit={handleOnSubmit}>
          <input type="email" name="email" />
          <button type="submit">Send Email</button>
        </form>
      </div>
    </main>
  );
}

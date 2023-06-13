"use client";

import { useState } from 'react';

import { buttonVariants } from "@/src/components/ui/button"
import { Label } from "@/src/components/ui/label"
import { Input } from "@/src/components/ui/input"

const SignupForm = () => {
  const [state, setState] = useState<string>();

  async function handleOnSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    setState('loading');
    setTimeout(() => {
      setState('ready');
    }, 1500);
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleOnSubmit}>
      <Label htmlFor="name">Name</Label>
      <Input id="name" />
      <Label htmlFor="email">Email</Label>
      <Input id="email" />
      <button className={buttonVariants()} disabled={state === 'loading'}>
        Sign Up
      </button>
    </form>
  )
}

export default SignupForm;
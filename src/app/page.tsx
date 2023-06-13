import SignupForm from '@/src/components/signup-form';

export default function IndexPage() {
  return (
    <section className="container grid h-full items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex flex-col h-full max-w-[980px] items-center justify-center mx-auto">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl mb-5">
          Get awesome stuff to your inbox!
        </h1>
        <SignupForm />
      </div>
    </section>
  )
}

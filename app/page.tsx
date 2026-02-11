export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <main className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-16">
        <section className="max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Secure advisor access to workplace retirement accounts
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-zinc-600">
            Future Capital provides the regulated infrastructure that connects
            advisors to their clients&apos; 401(k) and 403(b) accounts.
          </p>
        </section>

        <section className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-zinc-200 bg-white px-4 py-5">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
              Advisors
            </h2>
            <p className="mt-2 text-sm text-zinc-700">
              Manage your clients&apos; workplace accounts.
            </p>
          </div>

          <div className="rounded-lg border border-zinc-200 bg-white px-4 py-5">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
              Wealth Firms
            </h2>
            <p className="mt-2 text-sm text-zinc-700">
              Scalable advisor enablement for your platform.
            </p>
          </div>

          <div className="rounded-lg border border-zinc-200 bg-white px-4 py-5">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
              Participants
            </h2>
            <p className="mt-2 text-sm text-zinc-700">
              Understand how your advisor manages your plan.
            </p>
          </div>
        </section>

        <div className="mt-10">
          <button className="inline-flex items-center rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800">
            Schedule a Demo
          </button>
        </div>
      </main>
    </div>
  );
}

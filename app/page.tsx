import Link from "next/link";
import Logo from "./components/Logo";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F7F9FC] dark:bg-[#0a0a0a] text-[#13233F] dark:text-[#F7F9FC] transition-colors">
      <div className="mx-auto max-w-5xl px-6 pt-6">
        <Logo width={150} height={63} priority />
      </div>
      <main className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-16">
        <section className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl leading-[1.2]">
            Secure advisor access to workplace retirement accounts
          </h1>
          <p className="mt-4 text-lg leading-relaxed">
            Future Capital provides the regulated infrastructure that connects
            advisors to their clients&apos; workplace retirement accounts.
          </p>
        </section>

        <section className="mt-10 grid gap-4 md:grid-cols-3">
          <Link
            href="/wealth-firms"
            className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] px-4 py-5 transition-colors hover:border-[#4CC9F0] hover:bg-white dark:hover:bg-[#1a1a1a] cursor-pointer"
          >
            <h2 className="text-sm font-bold uppercase tracking-wide">
              Wealth Firms
            </h2>
            <p className="mt-2 text-sm">
              Scalable advisor enablement for your platform.
            </p>
          </Link>

          <Link
            href="/advisors"
            className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] px-4 py-5 transition-colors hover:border-[#4CC9F0] hover:bg-white dark:hover:bg-[#1a1a1a] cursor-pointer"
          >
            <h2 className="text-sm font-bold uppercase tracking-wide">
              Advisors
            </h2>
            <p className="mt-2 text-sm">
              Manage your clients&apos; workplace accounts.
            </p>
          </Link>

          <Link
            href="/recordkeepers"
            className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] px-4 py-5 transition-colors hover:border-[#4CC9F0] hover:bg-white dark:hover:bg-[#1a1a1a] cursor-pointer"
          >
            <h2 className="text-sm font-bold uppercase tracking-wide">
              Recordkeepers
            </h2>
            <p className="mt-2 text-sm">
              Connect your platform to the advisor ecosystem.
            </p>
          </Link>

          <Link
            href="/plan-sponsors"
            className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] px-4 py-5 transition-colors hover:border-[#4CC9F0] hover:bg-white dark:hover:bg-[#1a1a1a] cursor-pointer"
          >
            <h2 className="text-sm font-bold uppercase tracking-wide">
              Plan Sponsors
            </h2>
            <p className="mt-2 text-sm">
              Enable advisor access for your plan participants.
            </p>
          </Link>

          <Link
            href="/participants"
            className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] px-4 py-5 transition-colors hover:border-[#4CC9F0] hover:bg-white dark:hover:bg-[#1a1a1a] cursor-pointer"
          >
            <h2 className="text-sm font-bold uppercase tracking-wide">
              Participants
            </h2>
            <p className="mt-2 text-sm">
              Understand how your advisor manages your plan.
            </p>
          </Link>
        </section>
      </main>
    </div>
  );
}

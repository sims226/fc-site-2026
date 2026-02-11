import Logo from "../components/Logo";

export default function AdvisorsPage() {
    return (
        <div className="min-h-screen bg-[#F7F9FC] dark:bg-[#0a0a0a] text-[#13233F] dark:text-[#F7F9FC] transition-colors">
            <div className="mx-auto max-w-5xl px-6 pt-6">
                <Logo width={150} height={63} priority />
            </div>
            <main className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-16">
                {/* Orientation */}
                <section className="max-w-3xl">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl leading-[1.2]">
                        You&apos;re in the right place if you want to manage your clients&apos;
                        workplace retirement accounts.
                    </h1>
                    <p className="mt-4 text-lg leading-relaxed">
                        Whether you manage your clients&apos; workplace accounts yourself or
                        delegate to Future Capital, this is where advisors start. We provide
                        the infrastructure and support you need to serve your clients effectively.
                    </p>
                </section>

                {/* Explanation */}
                <section className="mt-16">
                    <h2 className="text-2xl font-bold tracking-tight leading-[1.2]">How it works</h2>
                    <div className="mt-6 grid gap-6 md:grid-cols-2">
                        <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] px-6 py-5 transition-colors">
                            <h3 className="text-lg font-bold">You manage</h3>
                            <p className="mt-2 text-sm leading-relaxed">
                                Use our Open Advisor Platform to directly manage your clients&apos;
                                workplace retirement accounts. You maintain full control and
                                decision-making authority while leveraging our regulated
                                infrastructure.
                            </p>
                        </div>

                        <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] px-6 py-5 transition-colors">
                            <h3 className="text-lg font-bold">We manage</h3>
                            <p className="mt-2 text-sm leading-relaxed">
                                Future Capital acts as the fiduciary, handling day-to-day
                                management of your clients&apos; workplace accounts. You focus on
                                relationship management while we handle the operational complexity.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Validation */}
                <section className="mt-16">
                    <h2 className="text-2xl font-bold tracking-tight leading-[1.2]">Trust</h2>
                    <div className="mt-6 grid gap-4 md:grid-cols-3">
                        <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] px-4 py-5 transition-colors">
                            <h3 className="text-sm font-bold">
                                Regulated infrastructure
                            </h3>
                            <p className="mt-2 text-sm">
                                Built on compliant, regulated infrastructure that meets the highest
                                standards for financial services.
                            </p>
                        </div>

                        <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] px-4 py-5 transition-colors">
                            <h3 className="text-sm font-bold">
                                Cross-recordkeeper access
                            </h3>
                            <p className="mt-2 text-sm">
                                Access accounts across multiple recordkeepers from a single
                                platform, simplifying your workflow.
                            </p>
                        </div>

                        <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] px-4 py-5 transition-colors">
                            <h3 className="text-sm font-bold">
                                Compliance-cleared integrations
                            </h3>
                            <p className="mt-2 text-sm">
                                All integrations are pre-vetted for compliance, reducing your
                                regulatory risk and administrative burden.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Action */}
                <section className="mt-16">
                    <h2 className="text-2xl font-bold tracking-tight leading-[1.2]">
                        Ready to see how it works?
                    </h2>
                    <div className="mt-6">
                        <button className="inline-flex items-center rounded-lg bg-[#4CC9F0] text-[#13233F] px-6 py-2.5 text-sm font-bold transition-colors hover:opacity-90">
                            Request a Platform Demo
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
}

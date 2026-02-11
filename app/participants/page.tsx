import Logo from "../components/Logo";

export default function ParticipantsPage() {
    return (
        <div className="min-h-screen bg-[#F7F9FC] dark:bg-[#0a0a0a] text-[#13233F] dark:text-[#F7F9FC] transition-colors">
            <div className="mx-auto max-w-5xl px-6 pt-6">
                <Logo width={150} height={63} priority />
            </div>
            <main className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-16">
                {/* Orientation */}
                <section className="max-w-3xl">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl leading-[1.2]">
                        Understand how your advisor manages your plan.
                    </h1>
                    <p className="mt-4 text-lg leading-relaxed">
                        If you&apos;re working with a financial advisor to manage your workplace
                        retirement account, Future Capital provides the secure infrastructure that
                        enables this relationship. Learn how advisor access works and what it
                        means for your account.
                    </p>
                </section>

                {/* Explanation */}
                <section className="mt-16">
                    <h2 className="text-2xl font-bold tracking-tight leading-[1.2]">How it works</h2>
                    <div className="mt-6 grid gap-6 md:grid-cols-2">
                        <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] px-6 py-5 transition-colors">
                            <h3 className="text-lg font-bold">Your control</h3>
                            <p className="mt-2 text-sm leading-relaxed">
                                You maintain full control over your workplace retirement account.
                                You choose to work with an advisor, can change advisors at any
                                time, or manage your account independently.
                            </p>
                        </div>

                        <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] px-6 py-5 transition-colors">
                            <h3 className="text-lg font-bold">Secure access</h3>
                            <p className="mt-2 text-sm leading-relaxed">
                                Your advisor accesses your account through our regulated,
                                secure platform. All access is logged and monitored to ensure
                                your account remains protected and compliant.
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
                                Regulated platform
                            </h3>
                            <p className="mt-2 text-sm">
                                All advisor access is managed through our regulated infrastructure,
                                ensuring compliance with ERISA and other retirement plan regulations.
                            </p>
                        </div>

                        <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] px-4 py-5 transition-colors">
                            <h3 className="text-sm font-bold">
                                Transparent access
                            </h3>
                            <p className="mt-2 text-sm">
                                You can see when and how your advisor accesses your account, with
                                full transparency into all account activities and decisions.
                            </p>
                        </div>

                        <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] px-4 py-5 transition-colors">
                            <h3 className="text-sm font-bold">
                                Your choice
                            </h3>
                            <p className="mt-2 text-sm">
                                You decide whether to work with an advisor, which advisor to work
                                with, and can change or end the relationship at any time.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Action */}
                <section className="mt-16">
                    <h2 className="text-2xl font-bold tracking-tight leading-[1.2]">
                        Have questions about advisor access?
                    </h2>
                    <div className="mt-6">
                        <button className="inline-flex items-center rounded-lg bg-[#4CC9F0] text-[#13233F] px-6 py-2.5 text-sm font-bold transition-colors hover:opacity-90">
                            Learn More
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
}

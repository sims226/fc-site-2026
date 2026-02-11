import Logo from "../components/Logo";

export default function PlanSponsorsPage() {
    return (
        <div className="min-h-screen bg-[#F7F9FC] dark:bg-[#0a0a0a] text-[#13233F] dark:text-[#F7F9FC] transition-colors">
            <div className="mx-auto max-w-5xl px-6 pt-6">
                <Logo width={150} height={63} priority />
            </div>
            <main className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-16">
                {/* Orientation */}
                <section className="max-w-3xl">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl leading-[1.2]">
                        Enable advisor access for your plan participants.
                    </h1>
                    <p className="mt-4 text-lg leading-relaxed">
                        Future Capital provides the infrastructure that allows plan sponsors to
                        offer participants the option to work with their own financial advisors
                        for workplace retirement account management. Give your participants more
                        choice while maintaining plan compliance and security.
                    </p>
                </section>

                {/* Explanation */}
                <section className="mt-16">
                    <h2 className="text-2xl font-bold tracking-tight leading-[1.2]">How it works</h2>
                    <div className="mt-6 grid gap-6 md:grid-cols-2">
                        <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] px-6 py-5 transition-colors">
                            <h3 className="text-lg font-bold">Participant choice</h3>
                            <p className="mt-2 text-sm leading-relaxed">
                                Enable participants to connect with their own financial advisors
                                through our regulated platform. Participants maintain control over
                                their accounts while gaining access to professional advice.
                            </p>
                        </div>

                        <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] px-6 py-5 transition-colors">
                            <h3 className="text-lg font-bold">Plan compliance</h3>
                            <p className="mt-2 text-sm leading-relaxed">
                                All advisor access is managed through our compliance framework,
                                ensuring your plan meets all regulatory requirements while
                                providing participants with additional service options.
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
                                Regulatory compliance
                            </h3>
                            <p className="mt-2 text-sm">
                                All advisor access is managed through our regulated infrastructure,
                                ensuring your plan remains compliant with ERISA and other
                                applicable regulations.
                            </p>
                        </div>

                        <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] px-4 py-5 transition-colors">
                            <h3 className="text-sm font-bold">
                                Participant control
                            </h3>
                            <p className="mt-2 text-sm">
                                Participants maintain full control over their accounts and can
                                choose whether to work with an advisor, change advisors, or
                                manage accounts independently.
                            </p>
                        </div>

                        <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] px-4 py-5 transition-colors">
                            <h3 className="text-sm font-bold">
                                Seamless integration
                            </h3>
                            <p className="mt-2 text-sm">
                                Works with your existing recordkeeper and plan administration,
                                requiring minimal changes to your current processes.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Action */}
                <section className="mt-16">
                    <h2 className="text-2xl font-bold tracking-tight leading-[1.2]">
                        Ready to offer more choice?
                    </h2>
                    <div className="mt-6">
                        <button className="inline-flex items-center rounded-lg bg-[#4CC9F0] text-[#13233F] px-6 py-2.5 text-sm font-bold transition-colors hover:opacity-90">
                            Explore Managed Account Solutions
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
}

import Logo from "../components/Logo";

export default function RecordkeepersPage() {
    return (
        <div className="min-h-screen bg-[#F7F9FC] dark:bg-[#0a0a0a] text-[#13233F] dark:text-[#F7F9FC] transition-colors">
            <div className="mx-auto max-w-5xl px-6 pt-6">
                <Logo width={150} height={63} priority />
            </div>
            <main className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-16">
                {/* Orientation */}
                <section className="max-w-3xl">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl leading-[1.2]">
                        Connect your platform to the advisor ecosystem.
                    </h1>
                    <p className="mt-4 text-lg leading-relaxed">
                        Future Capital provides the infrastructure that connects recordkeepers to
                        the growing network of advisors managing workplace retirement accounts.
                        Expand your reach and enable advisor access to your plans through our
                        regulated, compliance-cleared platform.
                    </p>
                </section>

                {/* Explanation */}
                <section className="mt-16">
                    <h2 className="text-2xl font-bold tracking-tight leading-[1.2]">How it works</h2>
                    <div className="mt-6 grid gap-6 md:grid-cols-2">
                        <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] px-6 py-5 transition-colors">
                            <h3 className="text-lg font-bold">API integration</h3>
                            <p className="mt-2 text-sm leading-relaxed">
                                Connect your recordkeeping platform to our infrastructure through
                                secure, standardized APIs. Enable advisor access while maintaining
                                full control over your data and user experience.
                            </p>
                        </div>

                        <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] px-6 py-5 transition-colors">
                            <h3 className="text-lg font-bold">Compliance framework</h3>
                            <p className="mt-2 text-sm leading-relaxed">
                                All advisor access is managed through our compliance-cleared
                                framework, ensuring regulatory requirements are met while
                                simplifying your integration and ongoing maintenance.
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
                                Secure connectivity
                            </h3>
                            <p className="mt-2 text-sm">
                                All connections are secured with industry-standard encryption and
                                authentication protocols, protecting participant data and plan
                                information.
                            </p>
                        </div>

                        <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] px-4 py-5 transition-colors">
                            <h3 className="text-sm font-bold">
                                Standardized integration
                            </h3>
                            <p className="mt-2 text-sm">
                                Use our standardized APIs and integration patterns to connect
                                quickly and efficiently, reducing development time and complexity.
                            </p>
                        </div>

                        <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] px-4 py-5 transition-colors">
                            <h3 className="text-sm font-bold">
                                Ongoing support
                            </h3>
                            <p className="mt-2 text-sm">
                                Receive dedicated support throughout integration and beyond, ensuring
                                smooth operations and quick resolution of any issues.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Action */}
                <section className="mt-16">
                    <h2 className="text-2xl font-bold tracking-tight leading-[1.2]">
                        Ready to connect?
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

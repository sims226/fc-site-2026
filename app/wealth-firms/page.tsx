import Image from "next/image";
import Link from "next/link";

export default function WealthFirmsPage() {
    return (
        <div className="min-h-screen bg-[#F7F9FC] text-[#13233F]">
            <div className="mx-auto max-w-5xl px-6 pt-6">
                <Link href="/">
                    <Image
                        src="/logo-light.svg"
                        alt="Future Capital"
                        width={150}
                        height={63}
                        priority
                    />
                </Link>
            </div>
            <main className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-16">
                {/* Orientation */}
                <section className="max-w-3xl">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl leading-[1.2]">
                        Enable your advisors to manage workplace retirement accounts at scale.
                    </h1>
                    <p className="mt-4 text-lg leading-relaxed text-[#13233F]">
                        Future Capital provides the infrastructure and compliance framework that
                        allows wealth firms to offer workplace retirement account management as a
                        scalable service. Whether you&apos;re building a new capability or enhancing
                        an existing platform, we provide the foundation you need.
                    </p>
                </section>

                {/* Explanation */}
                <section className="mt-16">
                    <h2 className="text-2xl font-bold tracking-tight leading-[1.2]">How it works</h2>
                    <div className="mt-6 grid gap-6 md:grid-cols-2">
                        <div className="rounded-lg border border-gray-200 bg-white px-6 py-5">
                            <h3 className="text-lg font-bold text-[#13233F]">Platform integration</h3>
                            <p className="mt-2 text-sm leading-relaxed text-[#13233F]">
                                Integrate our infrastructure directly into your existing platform.
                                Your advisors access workplace retirement accounts through your
                                familiar interface, with all compliance and regulatory requirements
                                handled behind the scenes.
                            </p>
                        </div>

                        <div className="rounded-lg border border-gray-200 bg-white px-6 py-5">
                            <h3 className="text-lg font-bold text-[#13233F]">White-label solution</h3>
                            <p className="mt-2 text-sm leading-relaxed text-[#13233F]">
                                Deploy a fully-branded workplace retirement account management
                                solution for your advisors. We provide the technology and
                                compliance framework while you maintain your brand and client
                                relationships.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Validation */}
                <section className="mt-16">
                    <h2 className="text-2xl font-bold tracking-tight leading-[1.2]">Trust</h2>
                    <div className="mt-6 grid gap-4 md:grid-cols-3">
                        <div className="rounded-lg border border-gray-200 bg-white px-4 py-5">
                            <h3 className="text-sm font-bold text-[#13233F]">
                                Scalable infrastructure
                            </h3>
                            <p className="mt-2 text-sm text-[#13233F]">
                                Built to support firms of all sizes, from boutique practices to
                                large enterprises with thousands of advisors.
                            </p>
                        </div>

                        <div className="rounded-lg border border-gray-200 bg-white px-4 py-5">
                            <h3 className="text-sm font-bold text-[#13233F]">
                                Compliance-first design
                            </h3>
                            <p className="mt-2 text-sm text-[#13233F]">
                                All integrations and workflows are designed with compliance in mind,
                                reducing your regulatory risk and administrative overhead.
                            </p>
                        </div>

                        <div className="rounded-lg border border-gray-200 bg-white px-4 py-5">
                            <h3 className="text-sm font-bold text-[#13233F]">
                                Flexible deployment
                            </h3>
                            <p className="mt-2 text-sm text-[#13233F]">
                                Choose the integration approach that works best for your platform,
                                from API-level integration to fully managed solutions.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Action */}
                <section className="mt-16">
                    <h2 className="text-2xl font-bold tracking-tight leading-[1.2]">
                        Ready to enable your advisors?
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

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="mb-8">
          <Link href="/">
            <Image
              src="/logo-light.svg"
              alt="Future Capital"
              width={150}
              height={63}
            />
          </Link>
        </div>

        <div className="mb-8">
          <nav className="flex flex-wrap gap-6 text-sm">
            <Link
              href="#"
              className="text-[#13233F] hover:text-[#4CC9F0] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-[#13233F] hover:text-[#4CC9F0] transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-[#13233F] hover:text-[#4CC9F0] transition-colors"
            >
              Disclosure
            </Link>
            <Link
              href="#"
              className="text-[#13233F] hover:text-[#4CC9F0] transition-colors"
            >
              Legal
            </Link>
          </nav>
        </div>

        <div className="text-xs text-[#13233F] leading-relaxed">
          <p>
            The information provided herein is for informational and educational
            purposes only and is intended for use by financial professionals.
            Financial professionals are responsible for compliance with
            applicable law and regulation. The information provided does not take
            into account the specific objectives, financial situation, or
            particular needs of any specific person or firm. The views and
            strategies described may not be suitable for all financial
            professionals. Future Capital does not provide tax or legal advice,
            and the information provided does not address individual
            circumstances. Financial professionals should consult with their
            clients, legal counsel, and tax advisors as applicable. It is the
            responsibility of each financial professional to ensure that their
            conduct and use of any Future Capital product or service adheres to
            applicable laws and regulations. This material has been prepared based
            on information believed to be accurate at the time of publication.
            Future Capital makes no representation or warranty as to the
            accuracy, reliability, or completeness of the information.
          </p>
        </div>
      </div>
    </footer>
  );
}

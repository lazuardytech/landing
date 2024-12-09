import Link from "next/link";
import { CompanyData } from "@/lib/config";

export default function CompanyInformation({ className }) {
  return (
    <div className={`w-full grid lg:grid-cols-2 gap-4 ${className}`}>
      <div className="flex flex-col space-y-2">
        <span className="font-semibold">Company Trade Name</span>
        <span className="font-mono text-sm text-left">
          {CompanyData.tradeName}
        </span>
      </div>
      <div className="flex flex-col space-y-2">
        <span className="font-semibold">Company Legal Name</span>
        <span className="font-mono text-sm text-left">
          {CompanyData.legalName}
        </span>
      </div>
      <div className="flex flex-col space-y-2">
        <span className="font-semibold">Company Email Address</span>
        <Link
          href={CompanyData.email.link}
          target={CompanyData.email.target}
          className="underline font-mono text-sm text-left transition-color duration-300 hover:text-white"
        >
          {CompanyData.email.label}
        </Link>
      </div>
      <div className="flex flex-col space-y-2">
        <span className="font-semibold">Company Phone Number</span>
        <Link
          href={CompanyData.phone.link}
          target={CompanyData.phone.target}
          className="underline font-mono text-sm text-left transition-color duration-300 hover:text-white"
        >
          {CompanyData.phone.label}
        </Link>
      </div>
      <div className="flex flex-col space-y-2">
        <span className="font-semibold">Company Address</span>
        <Link
          href={CompanyData.business.link}
          target={CompanyData.business.target}
          className="underline font-mono text-sm text-left transition-color duration-300 hover:text-white"
        >
          {CompanyData.business.label}
        </Link>
      </div>
      <div className="flex flex-col space-y-2">
        <span className="font-semibold">Company VAT No.</span>
        <span className="font-mono text-sm text-left">{CompanyData.vat}</span>
      </div>
    </div>
  );
}

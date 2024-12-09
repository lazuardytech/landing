export function isMaintenanceMode() {
  return JSON.parse(process.env.NEXT_PUBLIC_MAINTENANCE_MODE);
}

export const CompanyData = {
  // company name
  tradeName: "Lazuardy",

  // company legal name
  legalName: "PT Inovasi Kolektif Digital",

  // company vat number
  vat: "12.655.463.3-503.000",

  // company employee size number
  size: "11 - 50",

  // company type
  type: "LLC, Self-Owned",

  // company sector
  sector: "Information and Technology",

  // company year founded
  yearFounded: 2024,

  // company description
  description: "We help businesses grow bigger through technology.",

  // company phone number
  phone: {
    label: "+6287777437000",
    link: "https://wa.me/%2B6287777437000",
    target: "_blank",
  },

  // company email address
  email: {
    label: "contact@lazuardy.tech",
    link: "mailto:contact@lazuardy.tech",
    target: "_blank",
  },

  // company business address
  business: {
    label:
      "SIM Square, Jl. KH. Ahmad Dahlan, Semarang, Central Java, Indonesia 50134",
    link: "https://maps.app.goo.gl/9p28RqNKNQJ3reYL8",
    target: "_blank",
    html: (
      <>
        <span>
          SIM Square,
          <br />
          Jl. KH. Ahmad Dahlan, Semarang,
          <br />
          Central Java, Indonesia 50134
        </span>
      </>
    ),
  },

  // company copyright
  copyright: {
    label: "© Lazuardy 2024. All rights reserved.",
    html: (
      <span>
        VAT No. 12.655.463.3-503.000
        <br />
        Registered in The Republic of Indonesia
      </span>
    ),
  },

  // company document
  document: {
    profile:
      "https://drive.google.com/file/d/1S1762XVZzO72JZjAWj3MEverZaWh7Gv2/view?usp=drivesdk",
    serviceOffering:
      "https://drive.google.com/file/d/1kvgnBRssCH4LmaqOkC4u6Cz-aSBdhzgv/view?usp=drivesdk",
  },
};

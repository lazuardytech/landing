"use client";

import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";

export default function CrispProvider() {
  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID) return;
    Crisp.configure(process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID, {
      cookieExpire: 31536000,
    });
  }, []);

  return null;
}

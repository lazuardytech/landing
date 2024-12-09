"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure(process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID ?? "", {
      cookieExpire: 31536000,
    });
  });

  return null;
};

export default CrispChat;

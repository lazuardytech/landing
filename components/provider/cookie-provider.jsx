"use client";

import { useEffect } from "react";
import * as CookieConsent from "vanilla-cookieconsent";
import "./cookie-provider.css";

export default function CookieProvider() {
  useEffect(() => {
    CookieConsent.run({
      mode: "opt-in",
      revision: 1,

      guiOptions: {
        consentModal: {
          layout: "box inline",
          position: "bottom left",
          equalWeightButtons: true,
          flipButtons: false,
        },
        preferencesModal: {
          layout: "box",
          equalWeightButtons: true,
          flipButtons: false,
        },
      },

      categories: {
        necessary: {
          enabled: true,
          readOnly: true,
        },
        analytics: {
          autoClear: {
            cookies: [
              {
                name: /^_ga/,
              },
              {
                name: "_gid",
              },
            ],
          },
          services: {
            ga: {
              label: "Google Analytics",
              onAccept: () => {
                if (typeof window !== "undefined" && window.gtag) {
                  window.gtag("consent", "update", {
                    ad_storage: "granted",
                    analytics_storage: "granted",
                  });
                }
              },
              onReject: () => {
                if (typeof window !== "undefined" && window.gtag) {
                  window.gtag("consent", "update", {
                    ad_storage: "denied",
                    analytics_storage: "denied",
                  });
                }
              },
            },
            youtube: {
              label: "YouTube Embed",
              onAccept: () => {},
              onReject: () => {},
            },
          },
        },
        ads: {
          services: {
            googleAds: {
              label: "Google Ads",
              onAccept: () => {},
              onReject: () => {},
            },
          },
        },
      },

      language: {
        default: "en",
        translations: {
          en: {
            consentModal: {
              title: "🍪 We use cookies",
              description:
                "We use cookies to enhance your browsing experience, serve personalized ads, and analyze our traffic. You can choose to accept or reject non-essential cookies.",
              acceptAllBtn: "Accept All",
              acceptNecessaryBtn: "Reject All",
              showPreferencesBtn: "Manage Preferences",
              footer: `
                  <a href="/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                  <a href="/legal/terms-and-conditions" target="_blank" rel="noopener noreferrer">Terms and Conditions</a>
              `,
            },
            preferencesModal: {
              title: "Manage cookie preferences",
              acceptAllBtn: "Accept All",
              acceptNecessaryBtn: "Reject All",
              savePreferencesBtn: "Save Preferences",
              closeIconLabel: "Close Modal",
              serviceCounterLabel: "Service|Services",
              sections: [
                {
                  title: "Your Privacy Choices",
                  description: `You can manage your preferences regarding the processing of your personal information. You can change your choices at any time by reopening this panel. To deny consent for specific processing activities, toggle the switches or use the “Reject all” button.`,
                },
                {
                  title: "Strictly Necessary",
                  description:
                    "These cookies are essential for the website to function properly and cannot be disabled.",
                  linkedCategory: "necessary",
                },
                {
                  title: "Performance and Analytics",
                  description:
                    "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.",
                  linkedCategory: "analytics",
                  cookieTable: {
                    caption: "Cookie table",
                    headers: {
                      name: "Cookie",
                      domain: "Domain",
                      desc: "Description",
                    },
                    body: [
                      {
                        name: "_ga",
                        domain: location.hostname,
                        desc: "Used to distinguish users.",
                      },
                      {
                        name: "_gid",
                        domain: location.hostname,
                        desc: "Used to distinguish users.",
                      },
                    ],
                  },
                },
                {
                  title: "Targeting and Advertising",
                  description:
                    "These cookies are used to deliver advertisements that are relevant to you and your interests. They also help us measure the effectiveness of advertising campaigns.",
                  linkedCategory: "ads",
                },
                {
                  title: "More information",
                  description:
                    'For any questions regarding our cookie policy and your choices, please <a href="/sales">contact us</a>.',
                },
              ],
            },
          },
        },
      },
    });
  }, []);

  return null;
}

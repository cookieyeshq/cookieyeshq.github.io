window.CYAppConsent = {
  activeLaw: "gdpr",
  categories: {
    necessary: true,
    functional: true,
    analytics: true,
    performance: true,
    advertisement: true,
  },
  isUserActionCompleted: true,
  consentID: "MXZvREd0a3Rjb1hIV1RGREtmTlpwVGdzTG9NQXM3V3I",
  languageCode: "en",
};

(function () {
  function cy_override_cookie(value) {
    const date = new Date();
    const toSetTime = date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000);
    const expiry = new Date(toSetTime).toUTCString();
    document.cookie = `cookieyes-consent=${value}; expires=${expiry}; path=/; domain=.cookieyeshq.github.io; SameSite=Strict; secure`;
  }

  // Read CYAppConsent and set cookie
  if (!window.CYAppConsent) return;

  const { consentID, categories } = window.CYAppConsent;

  const cookieValue = [
    `consentid:${consentID}`,
    `consent:yes`,
    `action:yes`,
    `necessary:${categories.necessary ? "yes" : "no"}`,
    `functional:${categories.functional ? "yes" : "no"}`,
    `analytics:${categories.analytics ? "yes" : "no"}`,
    `performance:${categories.performance ? "yes" : "no"}`,
    `advertisement:${categories.advertisement ? "yes" : "no"}`,
  ].join(",");

  cy_override_cookie(cookieValue);
})();

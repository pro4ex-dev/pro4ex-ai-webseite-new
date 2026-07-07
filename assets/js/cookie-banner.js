// Cookie-Banner für DSGVO-Konformität
(function() {
  const CONSENT_KEY = 'gdpr_consent';
  const CONSENT_EXPIRY = 365 * 24 * 60 * 60 * 1000; // 1 Jahr

  // Prüfe ob Einwilligung schon gegeben wurde
  function hasConsent() {
    return localStorage.getItem(CONSENT_KEY) === 'true';
  }

  // Speichere Einwilligung
  function setConsent(value) {
    localStorage.setItem(CONSENT_KEY, value ? 'true' : 'false');
    // Entferne Banner
    const banner = document.getElementById('gdpr-banner');
    if (banner) banner.style.display = 'none';
    // Wenn akzeptiert: lade GA4 nach
    if (value) loadGA4();
  }

  // Lade GA4 nach (falls nicht schon geladen)
  function loadGA4() {
    if (window.gtag) return; // GA4 lädt bereits
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-X86B8JTDRR';
    document.head.appendChild(script);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function(){dataLayer.push(arguments);};
    window.gtag('js', new Date());
    window.gtag('config', 'G-X86B8JTDRR');
  }

  // Banner anzeigen, wenn noch keine Entscheidung
  function showBannerIfNeeded() {
    const banner = document.getElementById('gdpr-banner');
    if (!banner) return;
    if (hasConsent() || localStorage.getItem(CONSENT_KEY) === 'false') {
      banner.style.display = 'none';
    } else {
      banner.style.display = 'block';
    }
  }

  // Wenn Seite geladen und Einwilligung da: lade GA4
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      if (hasConsent()) loadGA4();
      showBannerIfNeeded();
    });
  } else {
    if (hasConsent()) loadGA4();
    showBannerIfNeeded();
  }

  // Event-Listener für Banner-Buttons
  window.gdprAccept = function() {
    setConsent(true);
  };
  window.gdprReject = function() {
    setConsent(false);
  };
})();

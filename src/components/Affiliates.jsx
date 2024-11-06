'use client';

import Script from 'next/script';

export function Affiliates() {
  return (
    <Script
      src='https://lmsqueezy.com/affiliate.js'
      onLoad={() =>
        (window.lemonSqueezyAffiliateConfig = { store: 'deschutesdesigngroup' })
      }
    />
  );
}

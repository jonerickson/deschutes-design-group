'use client';

import { default as TurnstilePackage, useTurnstile } from 'react-turnstile';

export function Turnstile({ siteKey, onVerify }) {
  return (
    <TurnstilePackage
      sitekey={siteKey}
      onError={(error) => console.error('Cloudflare turnstile error: ' + error)}
      onVerify={onVerify}
    ></TurnstilePackage>
  );
}

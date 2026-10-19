import Script from 'next/script';

// Our own maker's mark, shipped to every client site as public/ddg-credit.js.
export function DdgCredit(props) {
  return (
    <>
      <Script src='/ddg-credit.js' strategy='lazyOnload' />
      <ddg-credit {...props}>
        <a href='https://deschutesdesigngroup.com'>
          Site by Deschutes Design Group
        </a>
      </ddg-credit>
    </>
  );
}

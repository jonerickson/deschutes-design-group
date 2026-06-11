import { ImageResponse } from 'next/og';

export const alt = 'Deschutes Design Group LLC — We build software on the web';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
          padding: '96px',
        }}
      >
        <div
          style={{
            fontSize: 76,
            fontWeight: 600,
            letterSpacing: '-0.02em',
            color: '#ffffff',
            lineHeight: 1.1,
          }}
        >
          Deschutes Design Group
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: '32px',
            fontSize: 30,
            fontFamily: 'monospace',
            letterSpacing: '0.04em',
            color: '#a1a1aa',
          }}
        >
          <span style={{ color: '#3b82f6' }}>//</span>
          <span style={{ marginLeft: '12px' }}>
            WE BUILD SOFTWARE ON THE WEB
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

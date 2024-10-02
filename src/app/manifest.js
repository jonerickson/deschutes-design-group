export default function manifest() {
  return {
    name: 'Deschutes Design Group LLC',
    short_name: 'DDG',
    description:
      'A premier web development firm located in the picturesque city of Bend, Oregon. Our expertise lies in crafting exceptional web applications and revolutionary web design concepts.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
  };
}

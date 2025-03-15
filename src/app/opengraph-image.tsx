import { ImageResponse } from 'next/og';

export const alt = 'How to Behave with Others';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

export default function Image() {
  return new ImageResponse(
    (
      <div
        className={roboto.className}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'white',
          width: '100%',
          height: '100%',
          textAlign: 'center',
        }}
      >
        <img
          src="https://i.ibb.co/xqH1sRWd/icon.png"
          alt="Website Icon"
          style={{
            width: '200px',
            height: '200px', // Adjust height as needed
            borderRadius: '50%',
            marginBottom: '20px', // Space between image and text
          }}
        />
        <div
          style={{
            fontSize: 100,
            color: '#000',
          }}
        >
          How to Behave with Others
        </div>
        <p style={{ fontSize: 42, maxWidth: '80%' }}>
          Bible-Based Guidance for Every Situation
        </p>
      </div>
    ),
    {
      ...size,
    }
  );
}



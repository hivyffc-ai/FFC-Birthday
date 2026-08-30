import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Friends Factory Cafe - Best Birthday Celebration Venue in Vadodara';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #ec4899, #8b5cf6, #3b82f6)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px',
        }}
      >
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.15)',
            borderRadius: '24px',
            padding: '48px 64px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid rgba(255, 255, 255, 0.3)',
          }}
        >
          <div style={{ fontSize: 64, fontWeight: 'bold', color: 'white', textAlign: 'center', lineHeight: 1.2 }}>
            🎂 Friends Factory Cafe
          </div>
          <div style={{ fontSize: 32, color: 'rgba(255, 255, 255, 0.9)', textAlign: 'center', marginTop: 16 }}>
            Best Birthday Celebration Venue in Vadodara
          </div>
          <div style={{ fontSize: 22, color: 'rgba(255, 255, 255, 0.8)', textAlign: 'center', marginTop: 24 }}>
            🎈 Premium Rooftop Surprises • Balloon Decorations • Private Parties
          </div>
          <div style={{ fontSize: 20, color: '#fbbf24', textAlign: 'center', marginTop: 16, fontWeight: 'bold' }}>
            Starting ₹6,900 • Call +91 7487888730
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

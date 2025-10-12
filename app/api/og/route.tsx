import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#060608',
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255, 140, 41, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(91, 180, 255, 0.15) 0%, transparent 50%)',
        }}
      >
        {/* Logo y título */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '40px',
          }}
        >
          {/* Sol/Eclipse SVG */}
          <div
            style={{
              width: '180px',
              height: '180px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #f3cf1b 0%, #ffd500 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 25px 60px rgba(255, 140, 41, 0.4)',
            }}
          >
            <div
              style={{
                width: '50px',
                height: '180px',
                background: '#060608',
                borderRadius: '50%',
                marginLeft: '90px',
              }}
            />
          </div>

          {/* Texto principal */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '20px',
            }}
          >
            <h1
              style={{
                fontSize: '80px',
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #ffffff 0%, #FF8C29 50%, #FFC65D 100%)',
                backgroundClip: 'text',
                color: 'transparent',
                margin: 0,
                letterSpacing: '-2px',
              }}
            >
              SolaraSites
            </h1>
            <p
              style={{
                fontSize: '36px',
                color: 'rgba(255, 255, 255, 0.9)',
                margin: 0,
                textAlign: 'center',
                maxWidth: '900px',
              }}
            >
              Webs que eclipsan a las demás ✨
            </p>
          </div>

          {/* Badges */}
          <div
            style={{
              display: 'flex',
              gap: '30px',
              marginTop: '20px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '15px 30px',
                background: 'rgba(255, 140, 41, 0.15)',
                border: '2px solid rgba(255, 140, 41, 0.3)',
                borderRadius: '50px',
              }}
            >
              <span style={{ fontSize: '32px' }}>⚡</span>
              <span style={{ fontSize: '24px', color: '#FFC65D', fontWeight: '600' }}>
                Entrega 7 días
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '15px 30px',
                background: 'rgba(91, 180, 255, 0.15)',
                border: '2px solid rgba(91, 180, 255, 0.3)',
                borderRadius: '50px',
              }}
            >
              <span style={{ fontSize: '32px' }}>⭐</span>
              <span style={{ fontSize: '24px', color: '#5FB4FF', fontWeight: '600' }}>
                4.9/5 rating
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '15px 30px',
                background: 'rgba(168, 85, 247, 0.15)',
                border: '2px solid rgba(168, 85, 247, 0.3)',
                borderRadius: '50px',
              }}
            >
              <span style={{ fontSize: '32px' }}>🚀</span>
              <span style={{ fontSize: '24px', color: '#A855F7', fontWeight: '600' }}>
                20+ proyectos
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}

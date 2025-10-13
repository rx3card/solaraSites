import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  // Cargar el logo PNG optimizado para OG
  const logoUrl = new URL('/logo-og.png', request.url);
  const logoData = await fetch(logoUrl).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          position: 'relative',
          background: '#000000',
          overflow: 'hidden',
        }}
      >
        {/* Background con glows espectaculares */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at 20% 30%, rgba(0, 113, 227, 0.25) 0%, transparent 50%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at 80% 70%, rgba(124, 58, 237, 0.2) 0%, transparent 50%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 60%)',
          }}
        />
        
        {/* Grid pattern sutil */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            opacity: 0.3,
          }}
        />

        {/* Contenedor principal */}
        <div
          style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            padding: '0',
            position: 'relative',
          }}
        >
          {/* Barra lateral izquierda con gradiente */}
          <div
            style={{
              width: '12px',
              background: 'linear-gradient(180deg, #0071e3 0%, #7C3AED 50%, #06B6D4 100%)',
              boxShadow: '0 0 40px rgba(0, 113, 227, 0.6)',
            }}
          />

          {/* Contenido principal */}
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              padding: '50px 60px',
              gap: '0',
            }}
          >
            {/* Header con logo y badge */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '35px',
              }}
            >
              {/* Logo */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                }}
              >
                <img
                  // @ts-ignore
                  src={logoData}
                  width="70"
                  height="70"
                  alt="SolaraSites"
                  style={{
                    filter: 'drop-shadow(0 0 30px rgba(255, 215, 0, 0.5))',
                  }}
                />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <span
                    style={{
                      fontSize: '32px',
                      fontWeight: '900',
                      background: 'linear-gradient(135deg, #FFD700 0%, #0071e3 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      color: 'transparent',
                      letterSpacing: '-1px',
                    }}
                  >
                    SolaraSites
                  </span>
                  <span
                    style={{
                      fontSize: '11px',
                      color: 'rgba(255, 255, 255, 0.5)',
                      fontWeight: '500',
                      letterSpacing: '2px',
                    }}
                  >
                    WEB DESIGN AGENCY
                  </span>
                </div>
              </div>

              {/* Badge premium */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 20px',
                  background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.15) 0%, rgba(0, 113, 227, 0.15) 100%)',
                  border: '2px solid rgba(255, 215, 0, 0.4)',
                  borderRadius: '50px',
                  boxShadow: '0 0 30px rgba(255, 215, 0, 0.2)',
                }}
              >
                <span style={{ fontSize: '20px' }}>⭐</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                  <span style={{ fontSize: '20px', fontWeight: '800', color: '#FFD700', lineHeight: 1 }}>
                    5.0/5.0
                  </span>
                  <span style={{ fontSize: '9px', color: 'rgba(255, 255, 255, 0.6)', fontWeight: '600' }}>
                    +20 CLIENTES
                  </span>
                </div>
              </div>
            </div>

            {/* Hero Title */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '15px',
                marginBottom: '30px',
              }}
            >
              <h1
                style={{
                  fontSize: '56px',
                  fontWeight: '900',
                  color: '#ffffff',
                  margin: 0,
                  lineHeight: 1.15,
                  letterSpacing: '-2px',
                }}
              >
                Sitios web que {' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #0071e3 0%, #06B6D4 50%, #7C3AED 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                   convierten
                </span>
              </h1>
              
              <p
                style={{
                  fontSize: '22px',
                  color: 'rgba(255, 255, 255, 0.75)',
                  margin: 0,
                  lineHeight: 1.4,
                  fontWeight: '500',
                }}
              >
                Diseño profesional • Desarrollo ágil • Resultados garantizados
              </p>
            </div>

            {/* Stats grid horizontal */}
            <div
              style={{
                display: 'flex',
                gap: '20px',
                width: '100%',
              }}
            >
              {/* Stat 1 - Velocidad */}
              <div
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '22px 18px',
                  background: 'linear-gradient(135deg, rgba(0, 113, 227, 0.15) 0%, rgba(0, 113, 227, 0.05) 100%)',
                  border: '2px solid rgba(0, 113, 227, 0.4)',
                  borderRadius: '20px',
                  boxShadow: '0 8px 32px rgba(0, 113, 227, 0.2)',
                  gap: '6px',
                }}
              >
                <span style={{ fontSize: '36px', lineHeight: 1 }}>⚡</span>
                <span
                  style={{
                    fontSize: '34px',
                    fontWeight: '900',
                    background: 'linear-gradient(135deg, #0071e3 0%, #2196F3 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    lineHeight: 1,
                  }}
                >
                  7 días
                </span>
                <span
                  style={{
                    fontSize: '13px',
                    color: 'rgba(255, 255, 255, 0.6)',
                    fontWeight: '600',
                    textAlign: 'center',
                  }}
                >
                  Entrega rápida
                </span>
              </div>

              {/* Stat 2 - Precio */}
              <div
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '22px 18px',
                  background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.15) 0%, rgba(236, 72, 153, 0.1) 100%)',
                  border: '2px solid rgba(124, 58, 237, 0.5)',
                  borderRadius: '20px',
                  boxShadow: '0 8px 32px rgba(124, 58, 237, 0.25)',
                  gap: '6px',
                }}
              >
                <span style={{ fontSize: '36px', lineHeight: 1 }}>💎</span>
                <span
                  style={{
                    fontSize: '34px',
                    fontWeight: '900',
                    background: 'linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    lineHeight: 1,
                  }}
                >
                  $200k
                </span>
                <span
                  style={{
                    fontSize: '13px',
                    color: 'rgba(255, 255, 255, 0.6)',
                    fontWeight: '600',
                    textAlign: 'center',
                  }}
                >
                  Desde COP
                </span>
              </div>

              {/* Stat 3 - Proyectos */}
              <div
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '22px 18px',
                  background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(16, 185, 129, 0.1) 100%)',
                  border: '2px solid rgba(6, 182, 212, 0.4)',
                  borderRadius: '20px',
                  boxShadow: '0 8px 32px rgba(6, 182, 212, 0.2)',
                  gap: '6px',
                }}
              >
                <span style={{ fontSize: '36px', lineHeight: 1 }}>🚀</span>
                <span
                  style={{
                    fontSize: '34px',
                    fontWeight: '900',
                    background: 'linear-gradient(135deg, #06B6D4 0%, #10B981 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    lineHeight: 1,
                  }}
                >
                  +20
                </span>
                <span
                  style={{
                    fontSize: '13px',
                    color: 'rgba(255, 255, 255, 0.6)',
                    fontWeight: '600',
                    textAlign: 'center',
                  }}
                >
                  Proyectos
                </span>
              </div>
            </div>

            {/* CTA Footer */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 'auto',
                paddingTop: '30px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#10B981',
                    boxShadow: '0 0 20px rgba(16, 185, 129, 0.8)',
                  }}
                />
                <span
                  style={{
                    fontSize: '14px',
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontWeight: '600',
                  }}
                >
                  • Pago seguro  • Soporte 24/7  • Garantía de satisfacción
                </span>
              </div>
              
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 28px',
                  background: 'linear-gradient(135deg, #0071e3 0%, #06B6D4 100%)',
                  borderRadius: '50px',
                  boxShadow: '0 10px 40px rgba(0, 113, 227, 0.4)',
                }}
              >
                <span
                  style={{
                    fontSize: '18px',
                    fontWeight: '800',
                    color: '#ffffff',
                    letterSpacing: '0.5px',
                  }}
                >
                  COTIZA TU PROYECTO
                </span>
                <span style={{ fontSize: '20px', fontWeight: '800' }}>&gt;&gt;</span>
              </div>
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

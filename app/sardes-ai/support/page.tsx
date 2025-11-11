export default function SardesAISupport() {
  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        color: '#fff',
        fontFamily:
          'Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
        padding: '48px 16px',
      }}
    >
      <article
        style={{
          maxWidth: 680,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: 24,
          lineHeight: 1.7,
        }}
      >
        <header style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <h1 style={{ fontSize: 36, margin: 0 }}>Sardes AI - Support</h1>
          <p style={{ margin: 0 }}>Thank you for using Sardes AI.</p>
        </header>
        <section
          style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 18 }}
        >
          <p style={{ margin: 0 }}>
            For any questions, feedback, or support requests, please contact us
            at the following email address:
          </p>
          <a
            href='mailto:denizayjs@gmail.com'
            style={{
              color: '#fff',
              fontWeight: 600,
              textDecoration: 'underline',
              textUnderlineOffset: 4,
            }}
          >
            denizayjs@gmail.com
          </a>
        </section>
      </article>
    </div>
  );
}


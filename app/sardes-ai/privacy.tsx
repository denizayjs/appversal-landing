export default function SardesAIPrivacy() {
  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        backgroundColor: '#000',
        color: '#fff',
        fontFamily:
          'Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
        padding: '48px 16px',
      }}
    >
      <div
        style={{
          maxWidth: 960,
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: 32,
          lineHeight: 1.7,
        }}
      >
        <header style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <span
            style={{
              textTransform: 'uppercase',
              letterSpacing: 2,
              fontSize: 12,
            }}
          >
            Sardes AI
          </span>
          <h1 style={{ fontSize: 36, margin: 0 }}>Privacy Policy</h1>
          <p style={{ margin: 0, color: 'rgba(255, 255, 255, 0.7)' }}>
            Last Updated: 9.3.2025
          </p>
          <p style={{ margin: 0 }}>
            Sardes AI (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is
            committed to protecting your privacy. This Privacy Policy explains
            how your personal information is collected, used, and disclosed by
            Sardes AI.
          </p>
        </header>

        <section style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <h2 style={{ fontSize: 24, margin: 0 }}>Information We Collect</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div>
              <h3 style={{ fontSize: 18, marginBottom: 8 }}>
                Personal Information
              </h3>
              <p style={{ margin: 0 }}>
                During the onboarding process, we may ask for your name, trading
                experience, and market preferences. This information is used
                solely within the app to personalize your user experience and is
                not collected or stored for any other purpose.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: 18, marginBottom: 8 }}>Chart Images</h3>
              <p style={{ margin: 0 }}>
                Sardes AI allows you to upload images of stock or cryptocurrency
                charts to generate trading insights. These images are processed
                temporarily to provide analysis and are not stored or shared.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: 18, marginBottom: 8 }}>Usage Data</h3>
              <p style={{ margin: 0 }}>
                We may collect information about your use of the app, such as
                the frequency and duration of your sessions, the features you
                use, and related analytics data. This information is used to
                improve the app and enhance your user experience.
              </p>
            </div>
          </div>
        </section>

        <section style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <h2 style={{ fontSize: 24, margin: 0 }}>Your Choices</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div>
              <h3 style={{ fontSize: 18, marginBottom: 8 }}>
                Personal Information
              </h3>
              <p style={{ margin: 0 }}>
                Providing your trading preferences during onboarding is
                optional. However, skipping this step may limit the
                personalization of insights.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: 18, marginBottom: 8 }}>Chart Images</h3>
              <p style={{ margin: 0 }}>
                You retain full control over the images you upload. These are
                processed temporarily and are not stored on our servers.
              </p>
            </div>
          </div>
        </section>

        <section style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <h2 style={{ fontSize: 24, margin: 0 }}>Age</h2>
          <p style={{ margin: 0 }}>
            Sardes AI is not intended for anyone under 13. By downloading and
            using the app, you confirm that you meet this age requirement. If
            you are under 18, you may only use Sardes AI with parental consent
            as required by your country&apos;s laws. Sardes AI is not
            responsible for the use of the app by minors.
          </p>
        </section>

        <section style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <h2 style={{ fontSize: 24, margin: 0 }}>
            Changes to This Privacy Policy
          </h2>
          <p style={{ margin: 0 }}>
            We may update this Privacy Policy from time to time. If we make
            changes, we will notify you by revising the date at the top of this
            policy.
          </p>
        </section>

        <section style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <h2 style={{ fontSize: 24, margin: 0 }}>Contact Us</h2>
          <p style={{ margin: 0 }}>
            If you have any questions about this Privacy Policy, please contact
            us at{' '}
            <a
              href='mailto:denizayjs@gmail.com'
              style={{
                color: '#fff',
                textDecoration: 'underline',
                textUnderlineOffset: 4,
              }}
            >
              denizayjs@gmail.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}

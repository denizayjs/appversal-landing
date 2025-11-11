import { getTranslations } from "next-intl/server";

const brandName = "Sardes AI";
const contactEmail = "denizayjs@gmail.com";

export default async function SardesAISupport() {
  const t = await getTranslations("support");

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000",
        color: "#fff",
        fontFamily:
          "Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        padding: "48px 16px",
      }}
    >
      <article
        style={{
          maxWidth: 680,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 24,
          lineHeight: 1.7,
        }}
      >
        <header style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <h1 style={{ fontSize: 36, margin: 0 }}>
            {t("title", { brand: brandName })}
          </h1>
          <p style={{ margin: 0 }}>
            {t("thankYou", { brand: brandName })}
          </p>
        </header>
        <section
          style={{ display: "flex", flexDirection: "column", gap: 12, fontSize: 18 }}
        >
          <p style={{ margin: 0 }}>{t("contactIntro")}</p>
          <a
            href={`mailto:${contactEmail}`}
            style={{
              color: "#fff",
              fontWeight: 600,
              textDecoration: "underline",
              textUnderlineOffset: 4,
            }}
          >
            {contactEmail}
          </a>
        </section>
      </article>
    </div>
  );
}


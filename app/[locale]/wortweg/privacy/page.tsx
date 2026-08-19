import { getTranslations, setRequestLocale } from "next-intl/server";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const brandName = "Wortweg";
const contactEmail = "info@appversal.co";
const lastUpdated = "19.8.2026";

export default async function WortwegPrivacy({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("wortwegPrivacy");

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#000",
        color: "#fff",
        fontFamily:
          "Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        padding: "48px 16px",
      }}
    >
      <div
        style={{
          maxWidth: 960,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: 32,
          lineHeight: 1.7,
        }}
      >
        <header style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <span
            style={{
              textTransform: "uppercase",
              letterSpacing: 2,
              fontSize: 12,
            }}
          >
            {brandName}
          </span>
          <h1 style={{ fontSize: 36, margin: 0 }}>{t("title")}</h1>
          <p style={{ margin: 0, color: "rgba(255, 255, 255, 0.7)" }}>
            {t("lastUpdated", { date: lastUpdated })}
          </p>
          <p style={{ margin: 0 }}>
            {t("intro", {
              brand: brandName,
            })}
          </p>
        </header>

        <section style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <h2 style={{ fontSize: 24, margin: 0 }}>
            {t("sections.informationWeCollect.title")}
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div>
              <h3 style={{ fontSize: 18, marginBottom: 8 }}>
                {t("sections.informationWeCollect.personalInfo.title")}
              </h3>
              <p style={{ margin: 0 }}>
                {t("sections.informationWeCollect.personalInfo.body")}
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: 18, marginBottom: 8 }}>
                {t("sections.informationWeCollect.voiceRecordings.title")}
              </h3>
              <p style={{ margin: 0 }}>
                {t("sections.informationWeCollect.voiceRecordings.body", {
                  brand: brandName,
                })}
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: 18, marginBottom: 8 }}>
                {t("sections.informationWeCollect.usageData.title")}
              </h3>
              <p style={{ margin: 0 }}>
                {t("sections.informationWeCollect.usageData.body")}
              </p>
            </div>
          </div>
        </section>

        <section style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <h2 style={{ fontSize: 24, margin: 0 }}>
            {t("sections.yourChoices.title")}
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div>
              <h3 style={{ fontSize: 18, marginBottom: 8 }}>
                {t("sections.yourChoices.personalInfo.title")}
              </h3>
              <p style={{ margin: 0 }}>
                {t("sections.yourChoices.personalInfo.body")}
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: 18, marginBottom: 8 }}>
                {t("sections.yourChoices.microphoneAccess.title")}
              </h3>
              <p style={{ margin: 0 }}>
                {t("sections.yourChoices.microphoneAccess.body")}
              </p>
            </div>
          </div>
        </section>

        <section style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <h2 style={{ fontSize: 24, margin: 0 }}>
            {t("sections.age.title")}
          </h2>
          <p style={{ margin: 0 }}>
            {t("sections.age.body", { brand: brandName })}
          </p>
        </section>

        <section style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <h2 style={{ fontSize: 24, margin: 0 }}>
            {t("sections.changes.title")}
          </h2>
          <p style={{ margin: 0 }}>{t("sections.changes.body")}</p>
        </section>

        <section style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <h2 style={{ fontSize: 24, margin: 0 }}>
            {t("sections.contact.title")}
          </h2>
          <p style={{ margin: 0 }}>
            {t.rich("sections.contact.body", {
              email: (chunks) => (
                <a
                  href={`mailto:${contactEmail}`}
                  style={{
                    color: "#fff",
                    textDecoration: "underline",
                    textUnderlineOffset: 4,
                  }}
                >
                  {chunks}
                </a>
              ),
              address: contactEmail,
            })}
          </p>
        </section>
      </div>
    </div>
  );
}

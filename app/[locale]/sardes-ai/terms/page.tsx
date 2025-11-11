import { getTranslations } from "next-intl/server";

const brandName = "Sardes AI";
const contactEmail = "denizayjs@gmail.com";

export default async function SardesAITerms() {
  const t = await getTranslations("terms");

  const userConductItems = t.raw(
    "sections.use.userConduct.items"
  ) as string[];
  const intellectualRestrictions = t.raw(
    "sections.intellectualProperty.restrictions.items"
  ) as string[];
  const ageRequirements = (t.raw("sections.age.items") as string[]).map(
    (item) => item.replace("{brand}", brandName)
  );
  const liabilityItems = (t.raw("sections.liability.items") as string[]).map(
    (item) => item.replace("{brand}", brandName)
  );

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
            {t("intro", { brand: brandName })}
          </p>
        </header>

        <section style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <h2 style={{ fontSize: 24, margin: 0 }}>
            {t("sections.acceptance.title")}
          </h2>
          <p style={{ margin: 0 }}>{t("sections.acceptance.body")}</p>
        </section>

        <section style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <h2 style={{ fontSize: 24, margin: 0 }}>
            {t("sections.use.title")}
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div>
              <h3 style={{ fontSize: 18, marginBottom: 8 }}>
                {t("sections.use.eligibility.title")}
              </h3>
              <p style={{ margin: 0 }}>
                {t("sections.use.eligibility.body")}
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: 18, marginBottom: 8 }}>
                {t("sections.use.personalUse.title")}
              </h3>
              <p style={{ margin: 0 }}>
                {t("sections.use.personalUse.body")}
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: 18, marginBottom: 8 }}>
                {t("sections.use.userConduct.title")}
              </h3>
              <p style={{ marginBottom: 12 }}>
                {t("sections.use.userConduct.intro")}
              </p>
              <ul
                style={{
                  margin: 0,
                  paddingLeft: 20,
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                {userConductItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <h2 style={{ fontSize: 24, margin: 0 }}>
            {t("sections.userContent.title")}
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div>
              <h3 style={{ fontSize: 18, marginBottom: 8 }}>
                {t("sections.userContent.chartImages.title")}
              </h3>
              <p style={{ margin: 0 }}>
                {t("sections.userContent.chartImages.body")}
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: 18, marginBottom: 8 }}>
                {t("sections.userContent.responsibility.title")}
              </h3>
              <p style={{ margin: 0 }}>
                {t("sections.userContent.responsibility.body")}
              </p>
            </div>
          </div>
        </section>

        <section style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <h2 style={{ fontSize: 24, margin: 0 }}>
            {t("sections.intellectualProperty.title")}
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div>
              <h3 style={{ fontSize: 18, marginBottom: 8 }}>
                {t("sections.intellectualProperty.ownership.title")}
              </h3>
              <p style={{ margin: 0 }}>
                {t("sections.intellectualProperty.ownership.body", {
                  brand: brandName,
                })}
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: 18, marginBottom: 8 }}>
                {t("sections.intellectualProperty.restrictions.title")}
              </h3>
              <p style={{ marginBottom: 12 }}>
                {t("sections.intellectualProperty.restrictions.intro")}
              </p>
              <ul
                style={{
                  margin: 0,
                  paddingLeft: 20,
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                {intellectualRestrictions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <h2 style={{ fontSize: 24, margin: 0 }}>
            {t("sections.privacy.title")}
          </h2>
          <p style={{ margin: 0 }}>{t("sections.privacy.body")}</p>
        </section>

        <section style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <h2 style={{ fontSize: 24, margin: 0 }}>
            {t("sections.age.title")}
          </h2>
          <p style={{ marginBottom: 12 }}>
            {t("sections.age.intro", { brand: brandName })}
          </p>
          <ul
            style={{
              margin: 0,
              paddingLeft: 20,
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            {ageRequirements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <h2 style={{ fontSize: 24, margin: 0 }}>
            {t("sections.noFinancialAdvice.title")}
          </h2>
          <p style={{ margin: 0 }}>
            {t("sections.noFinancialAdvice.body1", { brand: brandName })}
          </p>
          <p style={{ margin: 0 }}>
            {t("sections.noFinancialAdvice.body2", { brand: brandName })}
          </p>
        </section>

        <section style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <h2 style={{ fontSize: 24, margin: 0 }}>
            {t("sections.disclaimer.title")}
          </h2>
          <p style={{ margin: 0 }}>{t("sections.disclaimer.body")}</p>
        </section>

        <section style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <h2 style={{ fontSize: 24, margin: 0 }}>
            {t("sections.liability.title")}
          </h2>
          <p style={{ margin: 0 }}>
            {t("sections.liability.body", { brand: brandName })}
          </p>
          <ul
            style={{
              margin: 0,
              paddingLeft: 20,
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            {liabilityItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <h2 style={{ fontSize: 24, margin: 0 }}>
            {t("sections.governingLaw.title")}
          </h2>
          <p style={{ margin: 0 }}>{t("sections.governingLaw.body")}</p>
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


import { getTranslations } from "next-intl/server";

const brandName = "Wortweg";

export default async function Wortweg() {
  const t = await getTranslations("wortweg");

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
        background: "#f9f9f9",
      }}
    >
      <h1 style={{ color: "#222", fontSize: 36 }}>
        {t("welcomeHeading", { brand: brandName })}
      </h1>
    </div>
  );
}

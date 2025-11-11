import { getTranslations } from "next-intl/server";

const brandName = "Sardes AI";

export default async function SardesAI() {
  const t = await getTranslations("sardesAi");

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


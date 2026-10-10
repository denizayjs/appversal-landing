import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Gallery from "./Gallery";
import QrCode from "./QrCode";
import "./landing.css";

const APP_STORE_URL = "https://apps.apple.com/tr/app/id6754612517";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.sardesai.app";
const TICKERS = [
  "AAPL", "NVDA", "BTC", "TSLA", "ETH", "MSFT", "THYAO", "AMZN", "SOL",
  "GARAN", "GOOGL", "XRP", "ASELS", "META", "BNB", "FROTO", "NFLX", "KCHOL",
];

type Props = { params: Promise<{ locale: string }> };
type Step = { n: string; title: string; body: string };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "sardesAi.landing.meta" });
  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      images: ["/sardes-ai/en/1.jpg"],
    },
    icons: { icon: "/sardes-ai/logo.png" },
  };
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3.6 1.9v20.2c0 .5.5.8.9.5L21 12 4.5 1.4c-.4-.3-.9 0-.9.5z" fill="#34d399" />
      <path d="M3.6 1.9 14 12 3.6 22.1" fill="none" />
      <path d="M14 12 17.2 8.8 4.5 1.4c-.4-.3-.9 0-.9.5z" fill="#60a5fa" />
      <path d="M14 12 17.2 15.2 4.5 22.6c-.4.3-.9 0-.9-.5z" fill="#f87171" />
      <path d="M17.2 8.8 21 12l-3.8 3.2L14 12z" fill="#fbbf24" />
    </svg>
  );
}

export default async function SardesAI({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("sardesAi.landing");
  const steps = t.raw("steps.items") as Step[];
  const points = t.raw("trust.points") as string[];
  const shots = [1, 2, 3, 4, 5, 6, 7];
  const base = `/${locale}/sardes-ai`;

  const StoreButtons = ({ id }: { id: string }) => (
    <div className="sa-cta">
      <a className="sa-store" href={APP_STORE_URL} id={`${id}-ios`}>
        <AppleIcon />
        <span>
          <small>{t("hero.appStore")}</small>
          <b>{t("hero.appStoreName")}</b>
        </span>
      </a>
      <a className="sa-store dark" href={PLAY_STORE_URL} id={`${id}-android`}>
        <PlayIcon />
        <span>
          <small>{t("hero.playStore")}</small>
          <b>{t("hero.playStoreName")}</b>
        </span>
      </a>
    </div>
  );

  return (
    <main className="sa">
      <header className="sa-nav">
        <div className="sa-wrap sa-nav-in">
          <a className="sa-brand" href={base}>
            <img src="/sardes-ai/logo.png" alt="" width={30} height={30} />
            Sardes AI
          </a>
          {/* Route handler (redirect), needs a full document navigation. */}
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a className="sa-btn-sm" href="/sardes-ai/download">
            {t("nav.cta")}
          </a>
        </div>
      </header>

      <section className="sa-hero">
        <div className="sa-wrap sa-hero-grid">
          <div>
            <span className="sa-eyebrow">
              <i />
              {t("hero.eyebrow")}
            </span>
            <h1>
              {t("hero.titleA")}
              <span>{t("hero.titleB")}</span>
            </h1>
            <p className="sa-sub">{t("hero.sub")}</p>
            <StoreButtons id="hero" />
            <p className="sa-note">{t("hero.note")}</p>
          </div>

          <div className="sa-stage" aria-hidden="true">
            <div className="sa-phone">
              <img
                src={`/sardes-ai/${locale}/2.jpg`}
                alt=""
                width={620}
                height={1342}
              />
            </div>
            <div className="sa-chip c1">
              <small>{t("hero.chipScore")}</small>
              <b className="a">72/100</b>
            </div>
            <div className="sa-chip c2">
              <small>{t("hero.chipSignal")}</small>
              <b className="g">{t("hero.chipPositive")}</b>
            </div>
            <div className="sa-chip c3">
              <small>{t("hero.chipStop")}</small>
              <b className="r">$265.00</b>
            </div>
          </div>
        </div>
      </section>

      <section className="sa-ticker" aria-label={t("ticker.label")}>
        <p>{t("ticker.label")}</p>
        <div className="sa-track" aria-hidden="true">
          {[...TICKERS, ...TICKERS].map((s, i) => (
            <img key={i} src={`/sardes-ai/logos/${s}.png`} alt="" width={48} height={48} loading="lazy" />
          ))}
        </div>
      </section>

      <section className="sa-sec">
        <div className="sa-wrap">
          <h2 className="sa-h2">{t("steps.title")}</h2>
          <div className="sa-steps">
            {steps.map((s) => (
              <article className="sa-step" key={s.n}>
                <em>{s.n}</em>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sa-sec" style={{ paddingTop: 0 }}>
        <div className="sa-wrap">
          <h2 className="sa-h2">{t("features.title")}</h2>
          <p className="sa-lead">{t("features.sub")}</p>
          <div className="sa-bento">
            <div className="sa-card b-score">
              <h3>{t("features.score.title")}</h3>
              <div className="sa-score3">
                <div><small>{t("features.score.fundamental")}</small><b className="g">6.5</b></div>
                <div><small>{t("features.score.technical")}</small><b className="i">7.5</b></div>
                <div><small>{t("features.score.sentiment")}</small><b className="a">6.8</b></div>
              </div>
              <div className="sa-row" style={{ marginTop: 14 }}>
                <span>RSI (14)</span>
                <b>75.2 <span className="sa-pill a">{t("features.indicators.neutral")}</span></b>
              </div>
              <div className="sa-row">
                <span>MACD</span>
                <span className="sa-pill g">{t("features.indicators.bullish")}</span>
              </div>
            </div>

            <div className="sa-card b-strategy">
              <h3>{t("features.strategy.title")}</h3>
              <div className="sa-row"><span>{t("features.strategy.entry")}</span><b>$270.00</b></div>
              <div className="sa-row"><span>{t("features.strategy.stop")}</span><b className="r">$265.00</b></div>
              <div className="sa-row"><span>{t("features.strategy.profit")}</span><b className="g">$285.00</b></div>
              <div className="sa-row"><span>{t("features.strategy.rr")}</span><b className="i">1:3</b></div>
              <div className="sa-row"><span>{t("features.strategy.horizon")}</span><span className="sa-pill p">{t("features.strategy.horizonValue")}</span></div>
            </div>

            <div className="sa-card b-match">
              <h3>{t("features.match.title")}</h3>
              <div className="sa-ring" role="img" aria-label="72/100">
                <svg viewBox="0 0 150 150" width="150" height="150" aria-hidden="true">
                  <circle className="bg" cx="75" cy="75" r="64" />
                  <circle className="fg" cx="75" cy="75" r="64" />
                </svg>
                <div><b>72</b><span>/100</span></div>
              </div>
              <p className="a" style={{ textAlign: "center", fontWeight: 600, margin: "0 0 6px" }}>{t("features.match.label")}</p>
              <p style={{ textAlign: "center", color: "var(--muted)", fontSize: 14, margin: 0 }}>{t("features.match.body")}</p>
            </div>

            <div className="sa-card b-risks">
              <h3>{t("features.risks.title")}</h3>
              <div className="sa-item">{t("features.risks.risk")}</div>
              <div className="sa-item ok">{t("features.risks.insight")}</div>
            </div>

            <div className="sa-card b-news">
              <h3>{t("features.news.title")}</h3>
              <div style={{ background: "var(--card-2)", borderRadius: 16, padding: 16 }}>
                <span className="sa-pill g">{t("features.news.tag")}</span>
                <p style={{ margin: "10px 0 0", lineHeight: 1.5 }}>{t("features.news.item")}</p>
                <div className="sa-bar"><i /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sa-sec" style={{ paddingTop: 0, paddingInline: 0 }}>
        <div className="sa-wrap">
          <h2 className="sa-h2">{t("gallery.title")}</h2>
          <p className="sa-lead">{t("gallery.sub")}</p>
        </div>
        <Gallery
          shots={shots.map((n) => `/sardes-ai/${locale}/${n}.jpg`)}
          prev={t("gallery.prev")}
          next={t("gallery.next")}
        />
      </section>

      <section className="sa-sec" style={{ paddingTop: 0 }}>
        <div className="sa-wrap sa-trust">
          <div>
            <h2 className="sa-h2" style={{ fontSize: "clamp(26px,4vw,38px)" }}>{t("trust.title")}</h2>
            <div className="sa-points">
              {points.map((p) => (
                <span key={p}>{p}</span>
              ))}
            </div>
          </div>
          <p>{t("trust.body")}</p>
        </div>
      </section>

      <section className="sa-wrap">
        <div className="sa-final">
          <h2 className="sa-h2">{t("final.title")}</h2>
          <p className="sa-lead">{t("final.sub")}</p>
          <StoreButtons id="final" />
          <div className="sa-qrbox">
            <QrCode path="/sardes-ai/download" label={t("qr.title")} />
            <div>
              <b>{t("qr.title")}</b>
              <span>{t("qr.body")}</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="sa-foot">
        <div className="sa-wrap sa-foot-in">
          <span>{t("footer.rights", { year: new Date().getFullYear() })}</span>
          <nav>
            <a href={`${base}/privacy`}>{t("nav.privacy")}</a>
            <a href={`${base}/terms`}>{t("nav.terms")}</a>
            <a href={`${base}/support`}>{t("nav.support")}</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}

import Script from "next/script";

export default function Home() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: 25,
          left: "50%",
          transform: "translateX(-50%)",
          width: 200,
          height: 50,
          backgroundColor: "black",
          zIndex: 999999999,
        }}
      ></div>
      <div
        data-us-project="HHG9v7xJsIreaBpY8QZO"
        style={{ width: "100vw", height: "100vh" }}
      ></div>
      <Script
        id="unicorn-studio"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(){
              if(!window.UnicornStudio){
                window.UnicornStudio={isInitialized:!1};
                var i=document.createElement("script");
                i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.34/dist/unicornStudio.umd.js",
                i.onload=function(){
                  window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)
                },
                (document.head || document.body).appendChild(i)
              }
            }();
          `,
        }}
      />
    </div>
  );
}


import AppLayout from "@/components/AppLayout";
import { SmoothScrollProvider } from "@/context/SmoothScroll.context";
import "@/styles/globals.css";
import "locomotive-scroll/dist/locomotive-scroll.css";

export default function App({ Component, pageProps }) {
  return (
    <SmoothScrollProvider
      options={{
        smooth: true,
        table: {
          smooth: true,
        },
        smartphone: {
          smooth: true,
        },
      }}
    >
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </SmoothScrollProvider>
  );
}

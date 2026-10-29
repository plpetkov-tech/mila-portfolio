import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { Hind } from "next/font/google";

const hind = Hind({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-hind",
});

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <div className={hind.variable}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
};

export default App;

import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { Libre_Baskerville, Open_Sans } from "next/font/google";

// Headings: Libre Baskerville (free Baskerville). Body text: Open Sans.
const heading = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-heading",
});

const body = Open_Sans({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
});

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className={`${heading.variable} ${body.variable} font-body`}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
};

export default App;

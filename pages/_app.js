import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { Cormorant_Garamond, Montserrat } from "next/font/google";

// Headings: Cormorant Garamond. Body text: Montserrat Regular.
const heading = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
});

const body = Montserrat({
  subsets: ["latin"],
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

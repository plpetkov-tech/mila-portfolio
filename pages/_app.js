import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { EB_Garamond, Manrope } from "next/font/google";

// Headings: Manrope. Body text: EB Garamond.
const heading = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
});

const body = EB_Garamond({
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

import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { Bodoni_Moda, Montserrat } from "next/font/google";

// Headings: Bodoni Moda Black. Body text: Montserrat Regular.
const heading = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["900"],
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

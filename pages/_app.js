import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { Gilda_Display, Montserrat } from "next/font/google";

// Headings: Gilda Display (comes in one weight). Body text: Montserrat Regular.
const heading = Gilda_Display({
  subsets: ["latin"],
  weight: ["400"],
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

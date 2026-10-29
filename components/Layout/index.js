import React, { useEffect, useState } from "react";
import Head from "next/head";
import Header from "../Header";
import Footer from "../Footer";
import Cursor from "../Cursor";
import data from "../../data/portfolio.json";

const Layout = ({ title, description, image, children, footer = true }) => {
  const [fineCursor, setFineCursor] = useState(false);

  useEffect(() => {
    setFineCursor(window.matchMedia("(pointer: fine)").matches);
  }, []);

  const showCursor = data.showCursor && fineCursor;
  const pageTitle = title ? `${title} - ${data.siteTitle}` : data.siteTitle;
  const pageDescription = description || data.siteDescription;

  return (
    <div className={`relative ${showCursor ? "cursor-none" : ""}`}>
      {showCursor && <Cursor />}
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={data.fullName} />
        {/* Share previews need an absolute URL; LinkedIn/Facebook don't like WebP */}
        <meta
          property="og:image"
          content={data.siteUrl + (image || data.about.banner)}
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="gradient-circle"></div>

      <div className="container mx-auto mb-10 px-2 laptop:px-0">
        <Header />
        {children}
        {footer && <Footer />}
      </div>
    </div>
  );
};

export default Layout;

import React from "react";
import Logo from "./images/logo.svg";
import LogoNoColor from "./public/logo/logo.svg";
import Youtube from "./public/logo/youtube.svg";

import { DocsThemeConfig, useConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <>
      <Logo />
    </>
  ),
  banner: {
    key: "Welcome to Redbrick Wiki",
    content: (
      <div data-nosnippet>
        Welcome to Redbrick Wiki 📚, here you can find all the information you
        need to get started with Redbrick Engine
      </div>
    ),
  },
  head: function useHead() {
    const config = useConfig();
    const title = (config.title || "Redbrick Wiki Guide") + " | Redbrick";
    const description =
      config.frontMatter.description ||
      "Explore the comprehensive guide to Redbrick's tools and services";
    return (
      <>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </>
    );
  },
  logoLink: true,
  chat: {
    link: "https://discord.com/invite/redbrick-create",
  },
  project: {
    link: "https://www.youtube.com/channel/UC8copJ0_PZWEVQ1GK9LwPpQ",
    icon: <Youtube />,
  },
  feedback: {
    content: "",
  },
  footer: {
    content: (
      <span>
        <a href="https://redbrick.land" target="_blank">
          <LogoNoColor />
        </a>
        Copyright © {new Date().getFullYear()} Redbrick Inc. All rights reserved
      </span>
    ),
  },
  editLink: {
    content: "",
  },
  search: {
    placeholder: () => "Search here ...",
  },
  color: {
    hue: 360,
    saturation: 60,
  },
  i18n: [
    { locale: "en", name: "English" },
    { locale: "kr", name: "한국어" },
  ],
  nextThemes: {
    defaultTheme: "dark",
  },
};

export default config;

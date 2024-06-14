import React from "react";
import Logo from "./images/logo.svg";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <>
      <Logo />
    </>
  ),
  head: (
    <>
      <title>Redbrick Wiki</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Redbrick Wiki" />
      <meta
        property="og:description"
        content="Create your own game and metaverse"
      />
    </>
  ),
  logoLink: true,
  chat: {
    link: "https://discord.com/invite/redbrick-create",
  },
  feedback: {
    content: "",
    // useLink: () => "https://discord.com/invite/redbrick-create",
  },
  footer: {
    content: "Copyright © 2024 Redbrick Inc. All rights reserved",
  },
  editLink: {
    content: "",
  },
  search: {
    placeholder: () => "Search here ...",
  },
  i18n: [
    { locale: "en", name: "English" },
    { locale: "kr", name: "한국어" },
  ],
};

export default config;

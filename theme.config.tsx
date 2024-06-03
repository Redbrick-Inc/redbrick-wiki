import React from "react";
import Logo from "./images/logo.svg";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <>
      <Logo />
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
  head: (
    <>
      <title>Redbrick Wiki</title>
      <link rel="icon" href="/favicon.ico" />
    </>
  ),
};

export default config;

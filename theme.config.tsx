import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Redbrick Engine</span>,
  logoLink: false,
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
    placeholder: () => "Search here ...", // need  to fix search issue
  },
  i18n: [
    { locale: "en", name: "English" },
    { locale: "kr", name: "한국어" },
  ],
};

export default config;

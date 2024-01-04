import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Redbrick Engine</span>,
  chat: {
    link: "https://discord.com/invite/redbrick-create",
  },
  feedback: {
    content: "",
    // useLink: () => "https://discord.com/invite/redbrick-create",
  },
  footer: {
    text: "Copyright © 2024 Redbrick Inc. All rights reserved",
  },
  editLink: {
    text: "",
  },
  search: {
    placeholder: () => "Search here ...", // need  to fix search issue
  },
  i18n: [
    { locale: "en", text: "English" },
    { locale: "kr", text: "한국어" },
    { locale: "my", text: "Malay" },
  ],
};

export default config;

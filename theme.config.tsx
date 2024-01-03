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
};

export default config;

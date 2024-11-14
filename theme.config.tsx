import React from "react";
import Logo from "./images/logo.svg";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <>
      <Logo />
    </>
  ),
  banner: {
    key: "Join message",
    content: "Create, Compete & Win at Redbrick Connect 2024! 🎉",
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
  feedback: {
    content: "",
  },
  footer: {
    content: `Copyright © ${new Date().getFullYear()} Redbrick Inc. All rights reserved`,
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
import React from "react";
import { useRouter } from "next/router";
import Logo from "./images/logo.svg";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <>
      <Logo />
    </>
  ),
  banner: {
    key: "Enjoy message",
    content: "Enjoy building new games with the brand new WIKI 🎉",
  },
  head: function useHead() {
    const config = useConfig();
    const { route } = useRouter();
    const title = config.title + (route === "/" ? "" : " - Redbrick");
    const description =
      config.frontMatter.description ||
      "Create your favorite games by using Redbrick Engine";

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
    // useLink: () => "https://discord.com/invite/redbrick-create",
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

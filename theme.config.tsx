import React from "react";
import Logo from "./images/logo.svg";
import LogoNoColor from "./public/logo/logo.svg";
import Youtube from "./public/logo/youtube.svg";
import Medium from "./public/logo/medium.svg";
import Instagram from "./public/logo/instagram.svg";

import { DocsThemeConfig, useConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <>
      <Logo />
    </>
  ), 
  banner: {
    key: "snippets",
    content: (
      <div data-nosnippet>
        📢
        <a
          className=" hover:underline"
          href="https://wiki.redbrick.land/en/snippet"
        >
          To Learn More Checkout Our Snippets!
        </a>
        📢
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
  navbar: {
    extraContent: (
      <div className="flex items-center gap-4">
        <a
          target="_blank"
          href="https://www.instagram.com/redbrick.official"
          title="redbrick instagram"
          rel="nofollow noreferrer"
        >
          <Instagram />
        </a>
        <a
          target="_blank"
          href="https://medium.com/redbrick-official"
          title="redbrick medium"
          rel="nofollow noreferrer"
        >
          <Medium />
        </a>
      </div>
    ),
  },
  footer: {
    content: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <div>
          <a
            className="nextra-focus flex items-center gap-1 text-current"
            target="_blank"
            rel="noreferrer"
            title="redbrick.land homepage"
            href="https://redbrick.land"
          >
            <LogoNoColor />
          </a>
        </div>
        <p className="mt-6 text-xs">
          Copyright © {new Date().getFullYear()} Redbrick Inc. All rights
          reserved. reserved.
        </p>
      </div>
    ),
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
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  docsRepositoryBase: "https://github.com/Redbrick-Inc/redbrick-wiki/tree/main",
  editLink: {
    content: "Edit this page on GitHub →",
  },
  feedback: {
    content: "Question? Give us feedback →",
    labels: "feedback",
    useLink: () =>
      "https://github.com/Redbrick-Inc/redbrick-wiki/discussions/new?category=q-a",
  },
};

export default config;

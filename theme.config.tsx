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
    key: "ssafy-13",
    content: (
      <div data-nosnippet>
        📢
        <a
          className=" hover:underline"
          href="https://wiki.redbrick.land/kr/ssafy13"
        >
          싸피 참가자 분들을 위한 싸피 가이드 여기에 있습니다.
        </a>
        📚
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
  feedback: {
    content: "",
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
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
};

export default config;

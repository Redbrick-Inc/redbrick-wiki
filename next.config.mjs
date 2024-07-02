import nextra from "nextra";
// import { useRouter } from 'next/hooks';

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",

  // ... your Nextra config
});

export default withNextra({
  i18n: {
    locales: ["en", "kr"],
    defaultLocale: "kr",
  },
  redirects: () => [
    {
      source: "/",
      destination: "/kr",
      permanent: true,
    },
  ],
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
});

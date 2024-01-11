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
    defaultLocale: "en",
  },
  redirects: () => [
    {
      source: "/",
      destination: "/en",
      permanent: true,
    },
  ],
  reactStrictMode: true,
});

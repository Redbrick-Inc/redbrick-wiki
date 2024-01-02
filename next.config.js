const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});
i18n: [
  { locale: "en", text: "English" },
  { locale: "kr", text: "한국어" },
  { locale: "my", text: "Malay" },
];
module.exports = withNextra({
  i18n: {
    locales: ["en", "kr", "my"],
    defaultLocale: "en",
  },
});

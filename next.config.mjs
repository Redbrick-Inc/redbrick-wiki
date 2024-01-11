import nextra from 'nextra'

const withNextra = nextra({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.tsx'
    // ... your Nextra config
})

export default withNextra({
    i18n: {
        locales: ["en", "kr"],
        defaultLocale: "en"
    },
});

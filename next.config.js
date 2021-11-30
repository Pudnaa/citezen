module.exports = {
  reactStrictMode: true,
  images: {
    loader: "imgix",
    domains: ["dev.veritech.mn"],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
    disableStaticImages: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  i18n: {
    defaultLocale: "mn",
    locales: ["mn"],
  },
  webpack(config) {
    const rules = config.module.rules
      .find((rule) => typeof rule.oneOf === "object")
      .oneOf.filter((rule) => Array.isArray(rule.use));

    rules.forEach((rule) => {
      rule.use.forEach((moduleLoader) => {
        if (moduleLoader.loader.includes("resolve-url-loader"))
          moduleLoader.options.sourceMap = false;
      });
    });

    return config;
  },
};

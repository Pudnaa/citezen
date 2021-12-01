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
  async redirects() {
    return [
      // 307 temporary redirect
      {
        source: "/",
        destination: "/under-construction",
        permanent: false,
      },
      // 308 permanent redirect
      {
        source: "/posts",
        destination: "/blog",
        permanent: true, // permanent redirect
      },
      // With parameter and custom status code
      {
        source: "/photos/:id",
        destination: "/photo/:id",
        statusCode: 303, // see other
      },
    ];
  },
  async headers() {
    return [
      { source: "/user/:id", headers: [{ key: "x-path", value: "hi" }] },

      {
        source: "/:lang(en|es)?/about",
        headers: [
          { key: "x-path", value: "hi" },
          { key: "x-another", value: "hi-again" },
        ],
      },
    ];
  },
};

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["localhost:3000", "res.cloudinary.com"],
  },  
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack(config) {
    const rules = config.module.rules
      .find((rule) => typeof rule.oneOf === 'object')
      .oneOf.filter((rule) => Array.isArray(rule.use));

    rules.forEach((rule) => {
      rule.use.forEach((moduleLoader) => {
        if (moduleLoader.loader.includes('resolve-url-loader'))
          moduleLoader.options.sourceMap = false;
      });
    });

    return config;
  }
};

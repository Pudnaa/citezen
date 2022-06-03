module.exports = {
	reactStrictMode: true,
	images: {
		// loader: "imgix",
		domains: [
			"veritech.mn",
			"dev.veritech.mn",
			"res.cloudinary.com",
			"cloud.veritech.mn",
			"https:/process.veritech.mn",
		],
		swcMinify: true,
		formats: ["image/avif", "image/webp"],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
		minimumCacheTTL: 60,
		disableStaticImages: true,
	},
	typescript: {
		ignoreBuildErrors: false,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	experimental: {
		runtime: "nodejs",
		serverComponents: true,
	},

	i18n: {
		localeDetection: false,
		defaultLocale: "mn",
		locales: ["mn", "en"],
	},
	// compress: false,
	// webpack(config) {
	//   const rules = config.module.rules
	//     .find((rule) => typeof rule.oneOf === "object")
	//     .oneOf.filter((rule) => Array.isArray(rule.use));

	//   rules.forEach((rule) => {
	//     rule.use.forEach((moduleLoader) => {
	//       if (moduleLoader.loader.includes("resolve-url-loader"))
	//         moduleLoader.options.sourceMap = false;
	//     });
	//   });

	//   return config;
	// },
};

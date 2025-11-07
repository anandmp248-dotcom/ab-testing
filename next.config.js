/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  basePath: "",
  assetPrefix: "",
  env: {
    NEXT_PUBLIC_GA_ID: "G-0SHRDQ0X4E",
    basePath: "",
    demoEnabled: "N",
    previewEnabled: "N",
    marketplaceKey: "219fe95d32AXR",
    platformKey: "62c9979AC00001cd2SKARTIO",
    dataTag: "PRIMARY",
    channel: "web",
    currency: "$",
    SKIP_BUILD_STATIC_GENERATION: true,
    urls: {
      themeId: "#THEMEID#",
      contentSetId: "#CONTENTSETID#",
    },
    siteIdentity: {
      siteName: "",
      siteDescription: "",
      siteLogo: "",
      favIcon: "",
      headerLogo: "",
      footerLogo: "",
    },
    profileConfig: {
      emailEnabled: true,
      mobileEnabled: true,
      mobileCountryCode: ["in"],
      defaultMobileCountryCode: "in",
      mobileValidation: {
        in: { minValue: 10, maxValue: 10 },
        bh: { minValue: 8, maxValue: 8 },
      },

      GTAG_ID: "G-G-0SHRDQ0X4E",
    },
  },
  images: {
    domains: [
      "skartiocloud.sgp1.cdn.digitaloceanspaces.com",
      "skartiocloud.sgp1.digitaloceanspaces.com",
      "skartio.ams3.digitaloceanspaces.com",
      "theminimalist.in"
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }

    return config;
  },
};

nextConfig.env.basePath = nextConfig.basePath ? nextConfig.basePath : "";
module.exports = nextConfig;

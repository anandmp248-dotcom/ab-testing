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
      platformDevelop:
        "https://fplatformdeveloper.skartio.app/platformdeveloperframe/api/110",
      experienceUrl:
        "https://experienceadmin.skartio.app/experiencemanagerframe/api/110/",
      leadUrl: "https://flead.skartio.app/leadframe/api/110",
      careerUrl: "https://fcareer.skartio.app/careerframe/api/110",
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
      GOOGLE_CLIENT_ID:
        "520147050501-ir980i68rsdtr088l6fo6g4n3pe01imk.apps.googleusercontent.com",
      facebookAppId: "165111935489533",
      GTAG_ID: "G-G-0SHRDQ0X4E",
      PIXEL_ID: "1275218956778093",
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

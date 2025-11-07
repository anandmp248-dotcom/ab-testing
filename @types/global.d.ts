declare namespace NodeJS {
  interface ProcessEnv {
    demoEnabled: string;
    previewEnabled: string;
    marketplaceKey: string;
    basePath: string;
    dataTag: string;
    channel: string;
    currency: string;
    currencyDecimalPoint: string;
    profileConfig: {
      emailEnabled: boolean;
      mobileEnabled: boolean;
      mobileCountryCode: string[];
      defaultMobileCountryCode: string;
      mobileValidation: {
        [key: string]: {
          minValue: number;
          maxValue: number;
        };
      };
      GTAG_ID: string;
      GOOGLE_CLIENT_ID: string;
      facebookAppId: string;
    };
    siteIdentity: {
      siteName: string;
      siteDescription: string;
      siteLogo: string;
      favIcon: string;
      headerLogo: string;
      footerLogo: string;
    };
    base_url_checkout: string;
    SKIP_BUILD_STATIC_GENERATION: boolean;
    GOOGLE_CLIENT_ID: string;
    GOOGLE_CLIENT_SECRET: string;
    urls: {
      themeId: string;
      contentSetId: string;
      experienceUrl: string;
      leadUrl: string;
    };
  }
}

declare global {
  interface Window {
    Razorpay: any; // Replace `any` with the appropriate type if you have it.
  }
}

declare module "cookie-cutter" {
  const cookieCutter: {
    set(name: string, value: string): void;
    get(name: string): string | undefined;
  };
  export = cookieCutter;
}

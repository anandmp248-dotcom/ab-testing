// import Layout from "@/layout/Layout";
// import { MapBlock } from "@/blocks/blockMap"
// import { NextSeo } from "next-seo";
// import { PageProps } from "@/@types/pageTypes";


// export default function Home(props: PageProps) {

//   const userSettings = props?.uiSettings;
//   const mainContent = props?.uiSettings?.TH00201P01?.blocks?.map((block) => {
//     if (block?.isBlockEnabled === true) {
//       return MapBlock(block.blockId, block);
//     }
//   });

//   const seoValues = userSettings?.TH00183P01?.seo;
//   const siteName = process.env.siteIdentity.siteName || "Instigo";
//   const siteDescription = process.env.siteIdentity.siteDescription || "";
//   const siteLogo = process.env.siteIdentity.siteLogo || "";
//   const canonicalUrl = `${process.env.basePath}${typeof window !== 'undefined' ? window.location.pathname : ''}`;
//   const title = seoValues?.title || siteName;
//   const description = seoValues?.description || siteDescription;
//   const keywords = seoValues?.keywords?.join(", ") || "default, keywords";


//   return (
//     <>
//       <NextSeo
//         title={title}
//         description={description}
//         canonical={canonicalUrl}
//         openGraph={{
//           title,
//           description,
//           images: [
//             {
//               url: siteLogo,
//               width: 800,
//               height: 600,
//               alt: "Logo",
//             },
//           ],
//         }}
//         additionalMetaTags={[
//           { name: "viewport", content: "width=device-width, initial-scale=1.0" },
//           { name: "keywords", content: keywords },
//           { name: "charset", content: "UTF-8" },
//         ]}
//       />

//       <Layout userSettings={userSettings}>
//         {mainContent}
//       </Layout>

//     </>

//   );
// }



"use client";
import { useEffect } from "react";
import { pageview, event } from "@/lib/ga";
import styles from "./Variant.module.scss";

export default function VariantA() {
  useEffect(() => {
    pageview("/variantA");
  }, []);

  return (
    <div className={styles.container}>
      <h1>Variant A</h1>
      <p>This is the A version of the landing page.</p>
      <button
        onClick={() => event({ action: "click_button", params: { variant: "A" } })}
      >
        Click Me (A)
      </button>
    </div>
  );
}


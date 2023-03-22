import { getContentItemAPI, getContentItemSlugs } from "@/API/contentItemAPI";
import { BottomSection } from "@/components/BottomSection/BottomSection";
import CustomPage from "@/components/CustomPage/CustomPage";
import { Footer } from "@/components/Footer/Footer";
import Page from "@/components/Page/Page";
import { services } from "@/MockData/services";
import { TContentItem } from "@/types/main";
import { AxiosResponse } from "axios";
import Head from "next/head";
import Link from "next/link";
import styles from "./styles/ServicePage.module.css";

export default function ServicePage({ service }: { service: TContentItem }) {
  return (
    <>
      <Head>
        <title>{service?.metaTitle}</title>
        <meta name="description" content={service?.metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page className={styles.Main}>
        <div className={styles.TopControlsContainer}>
          <Link href="/services">
            <div
              className={styles.TopControlBack}
              onClick={(e) => e.stopPropagation()}
            >
              {"< Back to Services"}
            </div>
          </Link>
        </div>
        <CustomPage item={service} />
      </Page>
      <BottomSection />
      <Footer />
    </>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const slug = params.slug;

  let pageContentResult: AxiosResponse<any, any> | null = null;
  let pageContent: TContentItem | null = null;

  try {
    pageContentResult = await getContentItemAPI(slug);
    if (pageContentResult?.data) {
      pageContent = pageContentResult.data?.contentItem;
    }
  } catch (error) {
    console.error(
      "Services page [slug]: getStaticProps - Error getting page details",
      error
    );
  }

  return {
    props: {
      service: pageContent,
    },
  };
}

export async function getStaticPaths() {
  let result = null;
  try {
    result = await getContentItemSlugs("service-item");
    return {
      paths: result?.data?.slugs?.map((el: string) => ({
        params: { slug: el },
      })),
      fallback: true,
    };
  } catch (error) {
    console.error(
      "NicoPro error getStaticPaths - Service page [slug] ERROR",
      error
    );
    return {
      paths: [],
      fallback: false,
    };
  }
}

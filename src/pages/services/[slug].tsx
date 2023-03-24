import { getContentItemAPI, getContentItemSlugs } from "@/API/contentItemAPI";
import { BottomSection } from "@/components/BottomSection/BottomSection";
import CustomPage from "@/components/CustomPage/CustomPage";
import { Footer } from "@/components/Footer/Footer";
import Page from "@/components/Page/Page";
import { services } from "@/MockData/services";
import { TContentItem } from "@/types/main";
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

  const service = services.find((el) => el.slug === slug);

  return {
    props: {
      service,
    },
  };
}

export async function getStaticPaths() {
  const paths = services.map((el) => ({
    params: { slug: el.slug },
  }));

  return { paths, fallback: false };
}

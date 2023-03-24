import { getContentItemAPI, getContentItemSlugs } from "@/API/contentItemAPI";
import { BottomSection } from "@/components/BottomSection/BottomSection";
import CustomPage from "@/components/CustomPage/CustomPage";
import { Footer } from "@/components/Footer/Footer";
import Page from "@/components/Page/Page";
import { projects } from "@/MockData/portfolio";
import { TContentItem } from "@/types/main";
import Head from "next/head";
import Link from "next/link";
import styles from "./styles/PortfolioPage.module.css";

export default function PortfolioPage({ project }: { project: TContentItem }) {
  return (
    <>
      <Head>
        <title>{project?.metaTitle}</title>
        <meta name="description" content={project?.metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page className={styles.Main}>
        <div className={styles.TopControlsContainer}>
          <Link href="/portfolio">
            <div
              className={styles.TopControlBack}
              onClick={(e) => e.stopPropagation()}
            >
              {"< Back to Portfolio"}
            </div>
          </Link>
        </div>
        <CustomPage item={project} />
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

  const project = projects.find((el) => el.slug === slug);

  return {
    props: {
      project,
    },
  };
}

export async function getStaticPaths() {
  const paths = projects.map((el) => ({
    params: { slug: el.slug },
  }));

  return { paths, fallback: false };
}

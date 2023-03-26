import { BottomSection } from "@/components/BottomSection/BottomSection";
import CustomPage from "@/components/CustomPage/CustomPage";
import { Footer } from "@/components/Footer/Footer";
import Page from "@/components/Page/Page";
import { blogItems } from "@/MockData/blog";
import { TContentItem } from "@/types/main";
import Head from "next/head";
import Link from "next/link";
import styles from "./styles/BlogPage.module.css";

export default function BlogPage({ blog }: { blog: TContentItem }) {
  return (
    <>
      <Head>
        <title>{blog?.metaTitle}</title>
        <meta name="description" content={blog?.metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page className={styles.Main}>
        <div className={styles.TopControlsContainer}>
          <Link href="/blog">
            <div
              className={styles.TopControlBack}
              onClick={(e) => e.stopPropagation()}
            >
              {"< Back to Blog"}
            </div>
          </Link>
        </div>
        <CustomPage item={blog} />
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

  const blog = blogItems.find((el) => el.slug === slug);

  return {
    props: {
      blog,
    },
  };
}

export async function getStaticPaths() {
  const paths = blogItems.map((el) => ({
    params: { slug: el.slug },
  }));

  return { paths, fallback: false };
}

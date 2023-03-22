import { getContentItemAPI, getContentItemSlugs } from "@/API/contentItemAPI";
import { BottomSection } from "@/components/BottomSection/BottomSection";
import CustomPage from "@/components/CustomPage/CustomPage";
import { Footer } from "@/components/Footer/Footer";
import Page from "@/components/Page/Page";
import { blogItems } from "@/MockData/blog";
import { TContentItem } from "@/types/main";
import { AxiosResponse } from "axios";
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

  let pageContentResult: AxiosResponse<any, any> | null = null;
  let pageContent: TContentItem | null = null;

  try {
    pageContentResult = await getContentItemAPI(slug);
    if (pageContentResult?.data) {
      pageContent = pageContentResult.data?.contentItem;
    }
  } catch (error) {
    console.error(
      "Blog page [slug]: getStaticProps - Error getting page details",
      error
    );
  }

  return {
    props: {
      blog: pageContent,
    },
  };
}

export async function getStaticPaths() {
  let result = null;
  try {
    result = await getContentItemSlugs("blog-item");
    return {
      paths: result?.data?.slugs?.map((el: string) => ({
        params: { slug: el },
      })),
      fallback: true,
    };
  } catch (error) {
    console.error(
      "NicoPro error getStaticPaths - Blog page [slug] ERROR",
      error
    );
    return {
      paths: [],
      fallback: false,
    };
  }
}

// export async function getStaticProps({ params }: Params) {
//   const slug = params.slug;
//   const blog = blogItems.find((el: TContentItem) => el.slug === slug);

//   return {
//     props: {
//       blog,
//     },
//   };
// }

// export async function getStaticPaths() {
//   return {
//     paths: blogItems.map((el: TContentItem) => {
//       return {
//         params: {
//           slug: el.slug,
//         },
//       };
//     }),
//     fallback: false,
//   };
// }

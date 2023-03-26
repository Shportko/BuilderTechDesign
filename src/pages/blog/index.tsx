import Head from "next/head";
import styles from "./styles/Blog.module.css";
import { BottomSection } from "@/components/BottomSection/BottomSection";
import { Footer } from "@/components/Footer/Footer";
import {
  blogItems as blogItemsMock,
  blogPageContent as blogPageContentMock,
} from "@/MockData/blog";
import { TContentItem } from "@/types/main";
import Link from "next/link";
import SmallMediaCard from "@/components/SmallMediaCard/SmallMediaCard";
import MediumMediaCard from "@/components/MediumMediaCard/MediumMediaCard";
import Page from "@/components/Page/Page";

export default function Blog({
  pageContent,
  blogPosts,
}: {
  pageContent: TContentItem;
  blogPosts: TContentItem[];
}) {
  return (
    <>
      <Head>
        <title>Blog | Nico Pro Construction</title>
        <meta
          name="description"
          content="Everything You Need to Know About our Construction Company's Services "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page>
        <h1 style={{ fontSize: "1.6em" }}>{pageContent?.title}</h1>
        <div className={styles.BlogWorkArea}>
          <div className={styles.BlogLeft}>
            {/* <div className={styles.BlogSearchInput}>
              <CustomTextInput placeholder="Search" />
            </div> */}
            <div className={styles.BlogListContainer}>
              {blogPosts?.map((proj: TContentItem, i: number) => {
                return (
                  <Link key={i} as={`/blog/${proj.slug}`} href="/blog/[slug]">
                    <div style={{ margin: "15px 0" }}>
                      <SmallMediaCard item={proj} />
                    </div>
                  </Link>
                );
              })}
            </div>
            {/* <div className={styles.BlogPaginatorContainer}>
              <Pagination count={10} page={2} />
            </div> */}
          </div>
          <div className={styles.BlogRight}>
            <h3>Favorite posts</h3>
            <div className={styles.BlogFavoritesContainer}>
              {blogPosts?.map((proj: TContentItem, i: number) => {
                return (
                  <div key={i} style={{ margin: "20px 0" }}>
                    <MediumMediaCard item={proj} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div>
          {pageContent?.description &&
            pageContent.description.length > 0 &&
            pageContent.description?.map((elem: string, ind: number) => {
              return (
                <div className={styles.BlogTextItem} key={ind}>
                  {elem}
                </div>
              );
            })}
          {pageContent?.subItems?.map((el: TContentItem, i: number) => {
            return (
              <div key={i}>
                {el?.description &&
                  el.description.length > 0 &&
                  el.description?.map((elem: string, ind: number) => {
                    return (
                      <div className={styles.BlogTextItem} key={ind}>
                        {elem}
                      </div>
                    );
                  })}
              </div>
            );
          })}
        </div>
      </Page>
      <BottomSection />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      blogPosts: blogItemsMock,
      pageContent: blogPageContentMock,
    },
  };
}

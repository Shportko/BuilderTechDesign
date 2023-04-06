import Head from "next/head";
import styles from "./styles/Portfolio.module.css";
import { BottomSection } from "@/components/BottomSection/BottomSection";
import { Footer } from "@/components/Footer/Footer";
import { TContentItem } from "@/types/main";
import {
  portfolioPageContent as portfolioPageContentMock,
  projects as projectsMock,
} from "@/MockData/portfolio";
import { CustomTextInput } from "@/components/CustomTextInput";
import Link from "next/link";
import SmallMediaCard from "@/components/SmallMediaCard/SmallMediaCard";
import MediumMediaCard from "@/components/MediumMediaCard/MediumMediaCard";
import Page from "@/components/Page/Page";

export default function Portfolio({
  pageContent,
  projects,
}: {
  pageContent: TContentItem;
  projects: TContentItem[];
}) {
  return (
    <>
      <Head>
        <title>{pageContent?.metaTitle}</title>
        <meta name="description" content={pageContent?.metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page>
        <h1 style={{ fontSize: "1.6em" }}>{pageContent?.title}</h1>
        <div className={styles.PortfolioWorkArea}>
          <div className={styles.PortfolioLeft}>
            <div className={styles.PortfolioListContainer}>
              {projects?.map((proj: TContentItem, i: number) => {
                return (
                  <Link
                    key={i}
                    as={`/portfolio/${proj.slug}`}
                    href="/portfolio/[slug]"
                  >
                    <div style={{ margin: "15px 0" }}>
                      <SmallMediaCard item={proj} key={i}/>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className={styles.PortfolioRight}>
            <h3>Latest projects</h3>
            <div className={styles.PortfolioLatestProjectsContainer}>
              {projects?.slice(0,3).map((proj: TContentItem, i: number) => {
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
                <div className={styles.PortfolioTextItem}>
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
                      <div className={styles.PortfolioTextItem} key={ind}>
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
      projects: projectsMock,
      pageContent: portfolioPageContentMock,
    },
  };
}

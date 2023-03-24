import Head from "next/head";
import styles from "./styles/Services.module.css";
import {
  servicesPageContent as servicesPageDetailsMock,
  services as servicesMock,
} from "@/MockData/services";
import { TContentItem } from "@/types/main";
import { BottomSection } from "@/components/BottomSection/BottomSection";
import { Footer } from "@/components/Footer/Footer";
import Link from "next/link";
import {
  getContentItemAPI,
  getPublishedContentItems,
} from "../../API/contentItemAPI";
import { AxiosResponse } from "axios";
import { useSelector } from "react-redux";
import { mainSelector } from "@/store/selectors";
import MobileMediaCard from "@/components/MobileMediaCard/MobileMediaCard";
import Page from "@/components/Page/Page";

export default function Services({
  pageContent,
  services,
}: {
  pageContent: TContentItem;
  services: TContentItem[];
}) {
  const { screenWidth } = useSelector(mainSelector).MainReducer;
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
        {services && services.length > 0 && (
          <div className={styles.ServicesContainer}>
            {services?.map((el: TContentItem, i: number) => {
              return (
                <Link
                  key={i}
                  as={`/services/${el.slug}`}
                  href="/services/[slug]"
                >
                  {screenWidth > 850 ? (
                    <div
                      className={styles.ServiceItem}
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <div className={styles.ServiceItemLeft}>
                        {el?.images && el.images.length > 0 ? (
                          <img
                            src={el.images[0]?.src}
                            alt={el.images[0]?.alt}
                          />
                        ) : (
                          <img src={el?.image} alt={el?.alt} />
                        )}
                      </div>
                      <div className={styles.ServiceItemRight}>
                        <h3>{el.shortTitle}</h3>
                        <div className={styles.ServiceItemRightDescription}>
                          {el.description}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div style={{ margin: "20px 0" }}>
                      <MobileMediaCard item={el} />
                    </div>
                  )}
                </Link>
              );
            })}
          </div>
        )}
        {pageContent?.description &&
          pageContent.description.length > 0 &&
          pageContent.description?.map((elem: string, ind: number) => {
            return (
              <div className={styles.ServicesTextItem} key={ind}>
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
                    <div className={styles.ServicesTextItem} key={ind}>
                      {elem}
                    </div>
                  );
                })}
            </div>
          );
        })}
      </Page>
      <BottomSection />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      services: servicesMock,
      pageContent: servicesPageDetailsMock,
    },
  };
}

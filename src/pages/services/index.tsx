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
import { useSelector } from "react-redux";
import { mainSelector } from "@/store/selectors";
import MediumMediaCardService from "@/components/MediumMediaCardService/MediumMediaCardService";
import Page from "@/components/Page/Page";
import DoneIcon from '@mui/icons-material/Done';

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
        <h1 style={{ fontSize: "1.5em" }}>{pageContent?.title}</h1>
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
                      <div style={{ margin: "0" }}>
                      <MediumMediaCardService item={el} />
                    </div>
                    </div>
                  ) : (
                    <div style={{ margin: "20px 0" }}>
                      <MediumMediaCardService item={el} />
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
                <DoneIcon /> {elem}
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

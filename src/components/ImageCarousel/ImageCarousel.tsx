import { mainSelector } from "@/store/selectors";
import { TContentItem } from "@/types/main";
import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";
import CustomButton from "../CustomButton/CustomButton";
import styles from "./styles/ImageCarousel.module.css";
import Image from "next/image";

export type TImageCarousel = {
  showLeftArrow?: boolean;
  onClick?: (id: string) => void;
  services: TContentItem[];
};

export default function ImageCarousel({
  showLeftArrow = false,
  services,
}: // onClick,
TImageCarousel): JSX.Element {
  const [serviceIndex, setServiceIndex] = useState(0);
  const { screenWidth } = useSelector(mainSelector).MainReducer;
  return (
    <section className={styles.ImageCarousel}>
      {services?.map((el: TContentItem, i: number) => {
        return (
          <div
            className={styles.ServiceContainer}
            key={i}
            style={{
              display:
                i !== serviceIndex
                  ? "none"
                  : screenWidth > 800
                  ? "flex"
                  : "block",
            }}
          >
            <div className={styles.ServiceContainerHead}>
              <div className={styles.ServiceNameContainer}>
                <div className={styles.ServiceName}>{el.shortTitle}</div>
                <div className={styles.Dots}>
                  {services.map((_, i: number) => {
                    return (
                      <div
                        key={i}
                        className={styles.Dot}
                        style={{
                          boxShadow: i === serviceIndex ? "0 0 4px white" : "",
                          transition: "0.5s",
                          backgroundColor:
                            i === serviceIndex
                              ? "rgba(255, 255, 255, 0.9)"
                              : "rgba(255, 255, 255, 0.228)",
                        }}
                      >
                        .
                      </div>
                    );
                  })}
                </div>
              </div>
              {showLeftArrow && (
                <div
                  className={styles.ArrowLeft}
                  onClick={() => {
                    const index =
                      serviceIndex === 0
                        ? services.length - 1
                        : serviceIndex - 1;
                    setServiceIndex(index);
                  }}
                >
                  {"<"}
                </div>
              )}
              {el?.images && el.images.length > 0 ? (
                <img src={el.images[0]?.src} alt={el.images[0]?.alt} />
              ) : (
                <img src={el?.image} alt={el?.alt} />
              )}
              <div
                className={styles.ArrowRight}
                onClick={() => {
                  const index =
                    serviceIndex === services.length - 1 ? 0 : serviceIndex + 1;
                  setServiceIndex(index);
                }}
              >
                {">"}
              </div>
            </div>
            <div className={styles.ServiceContainerTail}>
              <div>{el.description}</div>
              <div>
                <Link as={`/services/${el.slug}`} href="/services/[slug]">
                  <CustomButton
                    type="white-stroke"
                    style={{
                      width: "fit-content",
                      fontSize: "0.7em",
                      padding: "2px 10px 3px 10px",
                      marginTop: "10px",
                    }}
                    // onClick={() => onClick && onClick(el?.ancorId || "")}
                  >
                    Read more
                  </CustomButton>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

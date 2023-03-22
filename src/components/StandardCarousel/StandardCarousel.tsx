import { TImageItem } from "@/types/main";
import { useRef, useState } from "react";

import styles from "./styles/StandardCarousel.module.css";

export type TStandardCarousel = {
  images?: { src: string; alt: string; title?: string }[];
  style?: React.CSSProperties;
};

export const StandardCarousel: React.FC<TStandardCarousel> = ({
  images,
  style,
}) => {
  const scrl = useRef(null) as any;
  const [scrollX, setscrollX] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setscrolEnd] = useState(false);
  const [selectedImageId, setSelectedImageId] = useState(0);

  const slide = (shift: number) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  const handleClickPreviousImage = () => {
    if (images && images.length > 1) {
      const index =
        selectedImageId > 0 ? selectedImageId - 1 : images?.length - 1;
      setSelectedImageId(index);

      if (index === images?.length - 1) {
        setscrollX(scrl.current.scrollWidth);
        scrl.current.scrollLeft = scrl.current.scrollWidth;
      } else {
        slide(-69);
      }
    }
  };

  const handleClickNextImage = () => {
    if (images && images.length > 1) {
      const index =
        selectedImageId < images?.length - 1 ? selectedImageId + 1 : 0;
      setSelectedImageId(index);

      if (index === 0) {
        setscrollX(0);
        scrl.current.scrollLeft = 0;
      } else {
        slide(69);
      }
    }
  };

  return (
    <section className={styles.StandardCarousel} style={style}>
      {images && (
        <>
          <div className={styles.StandardCarouselMainBlock}>
            <div
              className={styles.StandardCarouselArrow}
              onClick={handleClickPreviousImage}
            >
              <div>{"<"}</div>
            </div>
            <div className={styles.StandardCarouselImageExternalContainer}>
              <div
                className={styles.StandardCarouselImageInternalContainer}
                style={{ transform: `translateX(-${selectedImageId * 100}%)` }}
              >
                {images?.map((el: TImageItem, i: number) => {
                  return (
                    <div key={i} className={styles.StandardCarouselImage}>
                      <img src={el?.src} alt={el?.alt} />
                    </div>
                  );
                })}
              </div>
            </div>
            <div
              className={styles.StandardCarouselArrow}
              onClick={handleClickNextImage}
              style={{ right: "0" }}
            >
              <div>{">"}</div>
            </div>
          </div>
          <>
            {images?.length > 1 && (
              <div
                className={styles.StandardCarouselSetExternalContainer}
                ref={scrl}
                onScroll={scrollCheck}
              >
                <div className={styles.StandardCarouselSet}>
                  {images?.map((el: TImageItem, i: number) => {
                    let elClassName = `${styles.StandardCarouselSetItem}`;
                    if (i === selectedImageId) {
                      elClassName = `${styles.StandardCarouselSetItem} ${styles.StandardCarouselSetItemSelected}`;
                    }
                    return (
                      <div
                        key={i}
                        className={elClassName}
                        onClick={() => setSelectedImageId(i)}
                      >
                        <img src={el.src} alt={el.alt} />
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </>
        </>
      )}
    </section>
  );
};

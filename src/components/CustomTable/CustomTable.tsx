import { Checkbox } from "@mui/material";
import clsx from "clsx";
import {
  CSSProperties,
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from "react";

import styles from "./styles/CustomTable.module.css";
import { TablePagination, TRowsPerPage } from "./TablePagination";

export type TCustomTableHeaders = {
  // title: React.ReactNode;
  width: number;
  height?: number;
  renderItem: (item: any, renderProps?: any) => React.ReactNode;
  renderHeader: (renderProps?: any) => React.ReactNode;
  contentCellPadding?: number;
  align?: "left" | "center" | "right";
  clickCell?: (item: any, renderProps?: any) => void;
  className?: string;
  onHoverCell?: "highlight" | "underline";
};

export type TCustomTable = {
  headers: TCustomTableHeaders[];
  items: any[];
  showCheckBoxes?: boolean;
  notShowPagination?: boolean;
  noPadding?: boolean;
  cellProps?: {
    noCellPaddingLeft?: boolean;
  };
  rowProps?: {
    doubledBottomBorder?: boolean;
  };
  defaultPagesCount?: TRowsPerPage;
  hasInputRow?: boolean;
  renderProps?: any;
  style?: CSSProperties | undefined;
  className?: string;
};

export const CustomTable: React.FC<TCustomTable> = ({
  headers,
  items,
  // showCheckBoxes = false,
  notShowPagination = false,
  noPadding = false,
  defaultPagesCount = 14,
  hasInputRow,
  renderProps,
  style,
}) => {
  const [rowsPerPage, setRowsPerPage] = useState<TRowsPerPage>(
    notShowPagination ? 50 : defaultPagesCount
  );
  const [currentPageNumber, setCurrentPageNumber] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  // calculate total pages
  useEffect(() => {
    const pagesCount: number =
      (items.length / rowsPerPage) % 1 > 0
        ? Math.floor(items.length / rowsPerPage) + 1
        : Math.floor(items.length / rowsPerPage);
    if (pagesCount !== totalPages) {
      setTotalPages(pagesCount);
    }
    if (currentPageNumber > pagesCount) {
      setCurrentPageNumber(pagesCount);
    }
  }, [rowsPerPage, items.length]);

  const mappedItemsToPage = useMemo(() => {
    const startSliceIndex = (currentPageNumber - 1) * rowsPerPage;
    const secondSliceValue =
      currentPageNumber === totalPages
        ? undefined
        : startSliceIndex + rowsPerPage;
    return items.length > rowsPerPage
      ? items.slice(startSliceIndex, secondSliceValue)
      : items;
  }, [rowsPerPage, totalPages, currentPageNumber, items]);

  const mapHead = useMemo(() => {
    return (
      <div className={styles.CustomTableHeadRow} style={{ display: "flex" }}>
        {/* {showCheckBoxes && (
          <div className={styles.CustomTableCheckboxCell}>
            <Checkbox size="small" />
          </div>
        )} */}
        {headers.map((column: TCustomTableHeaders, index: number) => {
          return (
            <div
              key={index}
              className={styles.CustomTableHeadCell}
              style={{ width: column.width }}
            >
              <div>{column.renderHeader(renderProps)}</div>
            </div>
          );
        })}
      </div>
    );
  }, [headers]);

  // in progress
  const mapInputRow = useMemo(() => {
    return <div>Input row</div>;
  }, [headers]);

  const mapRows = useMemo(() => {
    return (
      <>
        {mappedItemsToPage?.map((item: any, index: number) => {
          let className = styles.CustomTableRow;
          if (index === mappedItemsToPage?.length - 1) {
            className = `${styles.CustomTableRow} ${styles.CustomTableRowIsLastRow}`;
          }
          return (
            <div key={index} className={className}>
              {headers.map((el: TCustomTableHeaders, ind: number) => {
                return (
                  <div
                    key={ind}
                    style={{
                      width: el.width,
                      // maxWidth: el.width,
                      height: el.height ? `${el.height}px` : "45px",
                    }}
                    className={clsx(styles.CustomTableContentCell, {
                      [styles.CustomTableContentCellHovered]: el.onHoverCell,
                    })} // TODO: handle classnames with few conditions options
                    // className={clsx(
                    //   el.className,
                    //   "custom-table--content-cell",
                    //   `custom-table--on-hover-cell-${el.onHoverCell}`,
                    //   {
                    //     "custom-table--content-cell--no-padding-left":
                    //       cellProps?.noCellPaddingLeft,
                    //     "custom-table--content-cell--doubled-bottom":
                    //       rowProps?.doubledBottomBorder,
                    //   }
                    // )}
                    onClick={() =>
                      el.clickCell && el.clickCell(item, renderProps)
                    }
                  >
                    {el.renderItem(item, renderProps)}
                  </div>
                );
              })}
            </div>
          );
        })}
      </>
    );
  }, [mappedItemsToPage, headers]);

  let clsN = `${styles.CustomTable}`;
  if (noPadding) {
    clsN = `${styles.CustomTable} ${styles.CustomTableNoPadding}`;
  }
  return (
    <section className={clsN} style={style}>
      {mapHead}
      {hasInputRow && mapInputRow}
      {items.length > 0 ? (
        mapRows
      ) : (
        <div className={styles.CustomTableNoItemsRow}>No Items</div>
      )}
      {/* {!notShowPagination && (
        <TablePagination
          itemsCount={items?.length}
          totalPages={totalPages}
          currentPageNumber={currentPageNumber}
          setCurrentPageNumber={setCurrentPageNumber}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
        />
      )} */}
    </section>
  );
};

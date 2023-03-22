import clsx from "clsx";
import { useCallback, useMemo } from "react";

import styles from "./styles/TablePagination.module.css";

export type TTablePagination = {
  itemsCount: number;
  totalPages: number;
  currentPageNumber: number;
  setCurrentPageNumber: (arg: number) => void;
  rowsPerPage: number;
  setRowsPerPage: (arg: TRowsPerPage) => void;
};

export type TRowsPerPage = 7 | 14 | 30 | 50;

const CountSelectorArray: TRowsPerPage[] = [7, 14, 30, 50];

export const TablePagination: React.FC<TTablePagination> = ({
  itemsCount,
  totalPages,
  currentPageNumber,
  setCurrentPageNumber,
  rowsPerPage,
  setRowsPerPage,
}) => {
  const startSliceIndex = (currentPageNumber - 1) * rowsPerPage;
  const secondSliceIndex =
    currentPageNumber === totalPages
      ? undefined
      : startSliceIndex + rowsPerPage;

  const pageSelectorItems = useMemo(() => {
    const basicPattern: number[] = [];
    if (totalPages <= 7) {
      for (let i = 0; i < totalPages; i++) {
        basicPattern.push(i + 1);
      }
    } else {
      basicPattern.push(1);
      if (currentPageNumber < 5) {
        for (let i = 1; i < 5; i++) {
          basicPattern.push(i + 1);
        }
        basicPattern.push(-1);
      } else if (currentPageNumber > totalPages - 4) {
        basicPattern.push(-1);
        for (let i = totalPages - 5; i < totalPages - 1; i++) {
          basicPattern.push(i + 1);
        }
      } else if (
        currentPageNumber >= 5 &&
        currentPageNumber <= totalPages - 4
      ) {
        basicPattern.push(-1);
        basicPattern.push(currentPageNumber - 1);
        basicPattern.push(currentPageNumber);
        basicPattern.push(currentPageNumber + 1);
        basicPattern.push(-1);
      }
      basicPattern.push(totalPages);
    }
    return basicPattern.length > 0 ? basicPattern : [-1];
  }, [totalPages, currentPageNumber]);

  const goToNextPage = useCallback(() => {
    if (currentPageNumber < totalPages) {
      const nextpageNumber = currentPageNumber + 1;
      setCurrentPageNumber(nextpageNumber);
    }
  }, [currentPageNumber, setCurrentPageNumber, totalPages]);

  const goToPreviousPage = useCallback(() => {
    if (currentPageNumber > 1) {
      const nextpageNumber = currentPageNumber - 1;
      setCurrentPageNumber(nextpageNumber);
    }
  }, [currentPageNumber, setCurrentPageNumber, totalPages]);

  return (
    <div className="table-pagination">
      <div>Rows per page</div>
      <div className="table-pagination--count-selector">
        {CountSelectorArray.map((item: TRowsPerPage) => {
          const isItemSelected: boolean = item === rowsPerPage;
          return (
            <div
              key={item}
              className={clsx("table-pagination--count-selector--item", {
                "table-pagination--count-selector--item--selected":
                  isItemSelected,
              })}
              onClick={() => setRowsPerPage(item)}
            >
              {item}
            </div>
          );
        })}
      </div>
      <div className="table-pagination--page-descriptor">
        <div>
          <b>{`${startSliceIndex + 1}-${
            secondSliceIndex ? secondSliceIndex : itemsCount
          } `}</b>
          of<b>{` ${itemsCount}`}</b>
        </div>
      </div>
      <div className="table-pagination--page-selector">
        <div
          className="table-pagination--page-selector--button"
          onClick={() => goToPreviousPage()}
        >
          &#x3c;
        </div>
        {pageSelectorItems.map((item: number) => {
          const isItemSelected: boolean = item === currentPageNumber;
          const pageNumberItem = (
            <div
              key={Math.random()}
              className={clsx("table-pagination--page-selector--item", {
                "table-pagination--page-selector--item--selected":
                  isItemSelected,
              })}
              onClick={() => setCurrentPageNumber(item)}
            >
              {item}
            </div>
          );
          if (item === -1) {
            return (
              <div
                key={Math.random()}
                className="table-pagination--page-selector--blank"
              >
                ...
              </div>
            );
          }
          return pageNumberItem;
        })}
        <div
          className="table-pagination--page-selector--button"
          onClick={() => goToNextPage()}
        >
          &#x3e;
        </div>
      </div>
    </div>
  );
};

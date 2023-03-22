import CustomButton from "@/components/CustomButton/CustomButton";
import { CustomTable } from "@/components/CustomTable/CustomTable";
import { TableTopControls } from "@/components/CustomTable/TableTopControls";
import { WithTitle } from "@/components/WithTitle";
import {
  TContentItem,
  TContentItemStatus,
  TCustomerReviewItem,
} from "@/types/main";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import {
  PagesToContentItemsMap,
  PagesToPagesDetailsMap,
  TPagesTypes,
} from "../../global-constants/constants";
import addContentItemDialog from "../../components/dialogs/AddContentItemDialog/AddContentItemDialogAction";
import deleteContentItemDialog from "../../components/dialogs/DeleteItemDialog/DeleteItemDialogAction";
import styles from "./styles/Admin.module.css";
import pagePreviewDialog from "@/components/dialogs/PagePreviewDialog/PagePreviewDialogAction";
import { addToast } from "@/store/toast/actions";
import { getContentItems, publishContentItem } from "@/API/contentItemAPI";
import Tag, { TTagTypes } from "@/components/Tag/Tag";
import { createHeaderWithCheckbox } from "@/components/CustomTable/CustomTableCheckboxHeader";
import { getDateTimeShort } from "@/utils/DateTimeHelper";
import { StarsRate } from "@/components/StartsRate/StartsRate";
import {
  approveContentItem,
  deleteCustomerReview,
  getCustomerReviews,
} from "@/API/reviewAPI";

export type TAdminPageState = {
  selectedPageValue: TPagesTypes;
};

export default function Admin() {
  const router = useRouter();

  const [checkedMap, setCheckedMap] = useState<Map<string, boolean>>();
  const [selectedPage, setSelectedPage] = useState<TPagesTypes>();

  useEffect(() => {
    const accessToken = localStorage.getItem("nico-pro-access-token");
    const asPath = router.asPath;
    if (!accessToken) {
      router.push(`/login?next=${asPath}`);
    }
  }, []);

  const dispatch = useDispatch();
  const [state, setState] = useState<TAdminPageState>({
    selectedPageValue: (router.query?.page as TPagesTypes) || "services",
  });
  const [articles, setArticles] = useState<TContentItem[]>([]);
  const [pageDetails, setPageDetails] = useState<TContentItem[]>([]);
  const [customerReviews, setCustomerReviews] = useState<TCustomerReviewItem[]>(
    []
  );
  useEffect(() => {
    if (articles && articles.length > 0) {
      const mappedArray = articles.map(
        (el: TContentItem): [string, boolean] => [el._id || "", false]
      );
      setCheckedMap && setCheckedMap(new Map(mappedArray));
    }
  }, [articles]);

  useEffect(() => {
    if (router.query?.page) {
      setSelectedPage(router.query?.page as TPagesTypes);
      getData();
    }
  }, [router.query]);

  const getDataPageDetailsHelper = useCallback((page: TPagesTypes) => {
    const type = PagesToPagesDetailsMap[page];
    getContentItems(type)
      .then((result) => {
        if (result?.data?.contentItems) {
          setPageDetails(result.data.contentItems);
        }
      })
      .catch(() => {
        dispatch(
          addToast({
            message: "Error getting page details. Try later",
            statusCode: "400",
          })
        );
      });
  }, []);

  const getDataArticlesHelper = useCallback((page: TPagesTypes) => {
    const type = PagesToContentItemsMap[page];
    getContentItems(type)
      .then((result) => {
        if (result?.data?.contentItems) {
          setArticles(result.data.contentItems);
        }
      })
      .catch(() => {
        dispatch(
          addToast({
            message: "Error getting articles. Try later",
            statusCode: "400",
          })
        );
      });
  }, []);

  const getDataReviewsHelper = useCallback(() => {
    getCustomerReviews()
      .then((result) => {
        if (result?.data?.customerReviewItems) {
          setCustomerReviews(result.data.customerReviewItems);
        }
      })
      .catch(() => {
        dispatch(
          addToast({
            message: "Error getting customer reviews. Try later",
            statusCode: "400",
          })
        );
      });
  }, []);

  const getData = useCallback(() => {
    const page = router.query.page as TPagesTypes;
    setState((prevState: TAdminPageState) => ({
      ...prevState,
      selectedPageValue: page,
    }));

    getDataPageDetailsHelper(page);
    getDataArticlesHelper(page);
    getDataReviewsHelper();
  }, [
    router.query?.page,
    getDataPageDetailsHelper,
    getDataArticlesHelper,
    getDataReviewsHelper,
  ]);

  const handlePublishContentItem = useCallback(
    (item: TContentItem) => {
      if (item?._id) {
        publishContentItem(item._id)
          .then(() => {
            getData();
            dispatch(addToast({ message: "Published!", statusCode: "200" }));
          })
          .catch((error) => {
            console.error("Publish content item error", error);
            dispatch(
              addToast({
                message: "Error publishing content item. Try later",
                statusCode: "500",
              })
            );
          });
      }
    },
    [getData]
  );

  const handleDeleteCustomerReview = useCallback(
    (id: string) => {
      deleteCustomerReview(id)
        .then(() => {
          dispatch(addToast({ message: "Deleted", statusCode: "400" }));
          getDataReviewsHelper();
        })
        .catch(() =>
          dispatch(
            addToast({
              message: "Error deleting customer review, try later",
              statusCode: "400",
            })
          )
        );
    },
    [getData]
  );

  const handleApproveCustomerReview = useCallback(
    (id: string) => {
      approveContentItem(id)
        .then(() => {
          dispatch(addToast({ message: "Approved", statusCode: "200" }));
          getDataReviewsHelper();
        })
        .catch(() =>
          dispatch(
            addToast({
              message: "Error approving customer review, try later",
              statusCode: "400",
            })
          )
        );
    },
    [getData]
  );

  const handleUpdateCheckedMap = (data: any) => {
    const newMap = new Map(checkedMap).set(data._id, data.checked);
    setCheckedMap(newMap);
  };

  const handleCheckedAllRows = (checked: boolean) => {
    if (articles && articles.length > 0) {
      const mappedArray = articles.map(
        (el: TContentItem): [string, boolean] => [el._id || "", checked]
      );
      setCheckedMap && setCheckedMap(new Map(mappedArray));
    }
  };

  const isAllRowsChecked = useMemo(() => {
    const arr = checkedMap && Array.from(checkedMap, ([k, v]) => v);
    return arr?.every((el: boolean) => el === true);
  }, [checkedMap]);

  const isOneRowChecked = useMemo(() => {
    const arr = checkedMap && Array.from(checkedMap, ([k, v]) => v);
    return arr?.some((el: boolean) => el === true);
  }, [checkedMap]);

  const deleteButtonDisabled = useMemo(() => {
    if (checkedMap && articles) {
      const checkedIds = Array.from(checkedMap, ([k, v]) => {
        return {
          k,
          v,
        };
      })
        ?.filter((el) => el.v)
        ?.map((el) => el.k);
      const checkedArticlesStatuses = articles
        .filter((el: TContentItem) => checkedIds.some((id) => id === el._id))
        ?.map((el: TContentItem) => el.status) as TContentItemStatus[];

      return (
        !checkedArticlesStatuses ||
        (checkedArticlesStatuses &&
          checkedArticlesStatuses?.some(
            (el: TContentItemStatus) => el === "published"
          ))
      );
    }
    return true;
  }, [checkedMap, articles]);

  const renderProps = {
    setCheckedMap: handleUpdateCheckedMap,
    checkedMap,
    checkedAllRows: handleCheckedAllRows,
    allRowsChecked: isAllRowsChecked,
  };

  const addContentItemDialogProps = {
    type: state.selectedPageValue,
    onSubmitCreateNewContentItem: getData,
    existingItemsCount: articles?.length,
  };

  const pageSelector = useMemo(() => {
    return (
      <div className={styles.AdminPageTopControls}>
        <div className={styles.AdminPageTopControlsInternal}>
          <CustomButton
            onClick={() => router.push({ query: { page: "services" } })}
            type={selectedPage === "services" ? "blue-filled" : "cancel"}
          >
            Services
          </CustomButton>
          <CustomButton
            onClick={() => router.push({ query: { page: "portfolio" } })}
            type={selectedPage === "portfolio" ? "blue-filled" : "cancel"}
          >
            Portfolio
          </CustomButton>
          <CustomButton
            onClick={() => router.push({ query: { page: "blog" } })}
            type={selectedPage === "blog" ? "blue-filled" : "cancel"}
          >
            Blog
          </CustomButton>
          <CustomButton
            onClick={() => router.push({ query: { page: "reviews" } })}
            type={selectedPage === "reviews" ? "blue-filled" : "cancel"}
          >
            Reviews
          </CustomButton>
        </div>
      </div>
    );
  }, [selectedPage]);

  return (
    <>
      <Head>
        <title>Admin | Nico Pro Construction</title>
        <meta
          name="description"
          content="Everything You Need to Know About our Construction Company's Services "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.Main}>
        <WithTitle noStyling title="Select Page">
          <div style={{ display: "flex", width: "100%", margin: "20px 0" }}>
            {pageSelector}
          </div>
        </WithTitle>

        {/* Page Details table */}
        <WithTitle title="Page details" noStyling style={{ marginTop: "40px" }}>
          {" "}
          <CustomTable
            noPadding
            headers={[
              {
                renderHeader: () => "Title",
                width: 350,
                renderItem: (item: TContentItem, renderProps?: any) => (
                  <>{item?.title}</>
                ),
              },
              {
                renderHeader: () => "Created At",
                width: 250,
                renderItem: (item: TContentItem, renderProps?: any) => (
                  <div style={{ fontSize: "0.9em" }}>
                    {item?.created_at && getDateTimeShort(item.created_at)}
                  </div>
                ),
              },
              {
                renderHeader: () => "Updated At",
                width: 150,
                renderItem: (item: TContentItem, renderProps?: any) => (
                  <div style={{ fontSize: "0.9em" }}>
                    {item?.updated_at && getDateTimeShort(item.updated_at)}
                  </div>
                ),
              },
              {
                renderHeader: () => "Status",
                width: 100,
                renderItem: (item: TContentItem, renderProps?: any) => (
                  <Tag type={item.status as TTagTypes}>
                    {item?.status || "draft"}
                  </Tag>
                ),
              },
              {
                renderHeader: () => "Last Published",
                width: 150,
                renderItem: (item: TContentItem, renderProps?: any) => (
                  <div style={{ fontSize: "0.9em" }}>
                    {item?.last_published_at ? (
                      getDateTimeShort(item.last_published_at)
                    ) : (
                      <div>No data</div>
                    )}
                  </div>
                ),
              },
              {
                renderHeader: () => "Published At",
                width: 150,
                renderItem: (item: TContentItem, renderProps?: any) => (
                  <div style={{ fontSize: "0.9em" }}>
                    {item?.published_at ? (
                      getDateTimeShort(item.published_at)
                    ) : (
                      <div style={{ color: "orange" }}>Not published</div>
                    )}
                  </div>
                ),
              },
              {
                renderHeader: () => "",
                width: 100,
                renderItem: (item: TContentItem, renderProps?: any) => (
                  <Link
                    as={`/admin/${item.slug}`}
                    href={{
                      pathname: `/admin/[slug]`,
                      query: `page=${state.selectedPageValue}`,
                    }}
                  >
                    <CustomButton size="medium" type="main-stroke">
                      Edit
                    </CustomButton>
                  </Link>
                ),
              },
              {
                renderHeader: () => "",
                width: 100,
                renderItem: (item: TContentItem, renderProps?: any) => (
                  <CustomButton
                    size="medium"
                    type="purple-stroke"
                    onClick={() => dispatch(pagePreviewDialog({ item }))}
                  >
                    Preview
                  </CustomButton>
                ),
              },
              {
                renderHeader: () => "",
                width: 200,
                renderItem: (item: TContentItem, renderProps?: any) => (
                  <CustomButton
                    size="medium"
                    type="save"
                    onClick={() => handlePublishContentItem(item)}
                    disabled={item?.status === "published"}
                  >
                    Publish changes
                  </CustomButton>
                ),
              },
            ]}
            items={pageDetails || []}
          />
        </WithTitle>

        <WithTitle
          title={selectedPage === "reviews" ? "Reviews" : "Articles"}
          noStyling
          style={{ marginTop: "30px" }}
        >
          {isOneRowChecked ? (
            <div style={{ display: "flex", marginTop: "31px" }}>
              <div style={{ marginRight: "20px" }}>
                <CustomButton
                  size="medium"
                  type="delete"
                  disabled={deleteButtonDisabled}
                  onClick={() => {
                    checkedMap &&
                      dispatch(
                        deleteContentItemDialog({
                          ids: Array.from(checkedMap, ([k, v]) => {
                            return {
                              k,
                              v,
                            };
                          })
                            ?.filter((el) => el.v)
                            ?.map((el) => el.k),
                          getData,
                        })
                      );
                  }}
                >
                  Delete
                </CustomButton>
              </div>
            </div>
          ) : (
            <TableTopControls
              searchInputProps={{
                placeholder:
                  selectedPage === "reviews"
                    ? "Search by name, email, title or text"
                    : "Search by title or slug",
              }}
              showRightControls
              rightControls={
                selectedPage !== "reviews" && (
                  <CustomButton
                    onClick={() => {
                      dispatch(addContentItemDialog(addContentItemDialogProps));
                    }}
                    disabled={!selectedPage}
                  >
                    Create New Item
                  </CustomButton>
                )
              }
            />
          )}
          {/* Articles || Reviews table */}
          <CustomTable
            noPadding
            renderProps={renderProps}
            headers={
              selectedPage === "reviews"
                ? [
                    {
                      renderHeader: () => "Name",
                      width: 220,
                      renderItem: (
                        item: TCustomerReviewItem,
                        renderProps?: any
                      ) => <>{item?.name}</>,
                    },
                    {
                      renderHeader: () => "Email",
                      width: 220,
                      renderItem: (
                        item: TCustomerReviewItem,
                        renderProps?: any
                      ) => <>{item?.email}</>,
                    },
                    {
                      renderHeader: () => "Created At",
                      width: 120,
                      renderItem: (item: TContentItem, renderProps?: any) => (
                        <div style={{ fontSize: "0.9em" }}>
                          {item?.created_at &&
                            getDateTimeShort(item?.created_at)}
                        </div>
                      ),
                    },
                    {
                      renderHeader: () => "Title",
                      width: 220,
                      renderItem: (
                        item: TCustomerReviewItem,
                        renderProps?: any
                      ) => <>{item?.title}</>,
                    },
                    {
                      renderHeader: () => "Text",
                      width: 320,
                      renderItem: (
                        item: TCustomerReviewItem,
                        renderProps?: any
                      ) => (
                        <div
                          style={{
                            display: "flex",
                            overflowY: "scroll",
                            height: "40px",
                            fontSize: "0.8em",
                          }}
                        >
                          {item?.text}
                        </div>
                      ),
                    },
                    {
                      renderHeader: () => "Rate",
                      width: 120,
                      renderItem: (
                        item: TCustomerReviewItem,
                        renderProps?: any
                      ) => <StarsRate size="small" rate={item?.rate} />,
                    },
                    {
                      renderHeader: () => "Status",
                      width: 100,
                      renderItem: (
                        item: TCustomerReviewItem,
                        renderProps?: any
                      ) => (
                        <>
                          {item?.is_approved ? (
                            <div style={{ color: "green" }}>Approved</div>
                          ) : (
                            <div style={{ color: "orange" }}>For Review</div>
                          )}
                        </>
                      ),
                    },
                    {
                      renderHeader: () => "",
                      width: 80,
                      renderItem: (
                        item: TCustomerReviewItem,
                        renderProps?: any
                      ) => (
                        <CustomButton
                          type="main-stroke"
                          size="small"
                          disabled={item?.is_approved}
                          onClick={() =>
                            item?._id && handleApproveCustomerReview(item._id)
                          }
                        >
                          Approve
                        </CustomButton>
                      ),
                    },
                    {
                      renderHeader: () => "",
                      width: 80,
                      renderItem: (
                        item: TCustomerReviewItem,
                        renderProps?: any
                      ) => (
                        <CustomButton
                          type="delete-stroke"
                          size="small"
                          onClick={() =>
                            item?._id && handleDeleteCustomerReview(item._id)
                          }
                        >
                          Delete
                        </CustomButton>
                      ),
                    },
                  ]
                : [
                    createHeaderWithCheckbox(),
                    {
                      renderHeader: () => "Title",
                      width: 320,
                      renderItem: (item: TContentItem, renderProps?: any) => (
                        <>{item?.title}</>
                      ),
                    },
                    {
                      renderHeader: () => "Slug",
                      width: 200,
                      renderItem: (item: TContentItem, renderProps?: any) => (
                        <>{item?.slug}</>
                      ),
                    },
                    {
                      renderHeader: () => "Updated At",
                      width: 150,
                      renderItem: (item: TContentItem, renderProps?: any) => (
                        <div style={{ fontSize: "0.9em" }}>
                          {item?.updated_at &&
                            getDateTimeShort(item.updated_at)}
                        </div>
                      ),
                    },
                    {
                      renderHeader: () => "Status",
                      width: 100,
                      renderItem: (item: TContentItem, renderProps?: any) => (
                        <Tag type={item.status as TTagTypes}>
                          {item?.status || "draft"}
                        </Tag>
                      ),
                    },
                    {
                      renderHeader: () => "Created By",
                      width: 220,
                      renderItem: (item: TContentItem, renderProps?: any) => (
                        <>{item?.authorName}</>
                      ),
                    },
                    {
                      renderHeader: () => "Last Published At",
                      width: 150,
                      renderItem: (item: TContentItem, renderProps?: any) => (
                        <div style={{ fontSize: "0.9em" }}>
                          {item?.last_published_at ? (
                            getDateTimeShort(item.last_published_at)
                          ) : (
                            <div>No data</div>
                          )}
                        </div>
                      ),
                    },
                    {
                      renderHeader: () => "Published At",
                      width: 150,
                      renderItem: (item: TContentItem, renderProps?: any) => (
                        <div style={{ fontSize: "0.9em" }}>
                          {item?.published_at ? (
                            getDateTimeShort(item.published_at)
                          ) : (
                            <div style={{ color: "red" }}>Not published</div>
                          )}
                        </div>
                      ),
                    },
                    {
                      renderHeader: () => "",
                      width: 50,
                      renderItem: (item: TContentItem, renderProps?: any) => (
                        <Link
                          as={`/admin/${item.slug}`}
                          href={{
                            pathname: `/admin/[slug]`,
                            query: `page=${state.selectedPageValue}`,
                          }}
                        >
                          <CustomButton size="medium" type="main-stroke">
                            Edit
                          </CustomButton>
                        </Link>
                      ),
                    },
                    {
                      renderHeader: () => "",
                      width: 50,
                      renderItem: (item: TContentItem, renderProps?: any) => (
                        <CustomButton
                          size="medium"
                          type="purple-stroke"
                          onClick={() => dispatch(pagePreviewDialog({ item }))}
                        >
                          Preview
                        </CustomButton>
                      ),
                    },
                  ]
            }
            items={
              selectedPage === "reviews" ? customerReviews : articles || []
            }
          />
        </WithTitle>
      </main>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}

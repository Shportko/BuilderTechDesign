import CustomButton from "@/components/CustomButton/CustomButton";
import CustomPage from "@/components/CustomPage/CustomPage";
import { Dialog } from "@/components/Dialog";
import { TContentItem } from "@/types/main";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import styles from "./styles/PagePreviewDialog.module.css";

export type TPagePreviewDialog = {
  selfClose: (dialogKey: string) => void;
  dialogKey: string;
  props?: { item: TContentItem };
};

export const pagePreviewDialogKey = "pagePreviewDialogKey";

export default function PagePreviewDialog({
  selfClose,
  dialogKey,
  props,
}: TPagePreviewDialog) {
  const [item, setItem] = useState<TContentItem>();
  const [isSelectedMobileVersion, setIsSelectedMobileVersion] =
    useState<boolean>(false);


  return (
    <Dialog
      title="Page Preview"
      className={styles.PagePreviewDialog}
      onClickMainAction={() => selfClose(dialogKey)}
      selfClose={selfClose}
      dialogKey={dialogKey}
      showBottomControls={false}
      style={{ top: "5%" }}
    >
      <div style={{ display: "flex", margin: "0 0 10px 0" }}>
        <div>
          <CustomButton
            size="medium"
            type={isSelectedMobileVersion ? "main-stroke" : "blue-filled"}
            style={{ marginRight: "10px" }}
            onClick={() => setIsSelectedMobileVersion(false)}
          >
            Desktop
          </CustomButton>
        </div>

        <div>
          <CustomButton
            size="medium"
            type={isSelectedMobileVersion ? "blue-filled" : "main-stroke"}
            onClick={() => setIsSelectedMobileVersion(true)}
          >
            Mobile
          </CustomButton>
        </div>
      </div>
      <div
        className={styles.PagePreviewDialogInternal}
        style={{ height: `${Math.floor(window.innerHeight * 0.8)}px` }}
      >
        {item && (
          <CustomPage
            item={item}
            manualScreenSize={isSelectedMobileVersion ? 380 : undefined}
          />
        )}
      </div>
    </Dialog>
  );
}

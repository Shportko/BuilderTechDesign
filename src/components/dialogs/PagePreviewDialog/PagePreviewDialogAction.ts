import { openDialog } from "@/store/dialog/actions";
import { TContentItem } from "@/types/main";
import { pagePreviewDialogKey } from "./PagePreviewDialog";

export default function pagePreviewDialog(props: { item: TContentItem }) {
  return openDialog(pagePreviewDialogKey, props);
}

import { openDialog } from "@/store/dialog/actions";
import { deleteContentItemDialogKey } from "./DeleteItemDialog";

export default function deleteContentItemDialog(props: any) {
  return openDialog(deleteContentItemDialogKey, props);
}

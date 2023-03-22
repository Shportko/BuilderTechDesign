import { openDialog } from "@/store/dialog/actions";
import { addContentItemDialogKey } from "./AddContentItemDialog";

export default function addContentItemDialog(props: any) {
  return openDialog(addContentItemDialogKey, props);
}

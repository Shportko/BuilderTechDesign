import { TContentItem } from "@/types/main";
import { TCustomTableHeaders } from "./CustomTable";

export const createHeaderWithCheckbox = (): TCustomTableHeaders => {
  return {
    renderHeader: (renderProps?: any) => (
      <input
        type="checkbox"
        checked={renderProps.allRowsChecked}
        onClick={() => renderProps?.checkedAllRows(!renderProps.allRowsChecked)}
        style={{ cursor: "pointer" }}
      />
    ),
    width: 20,
    renderItem: (item: TContentItem, renderProps?: any) => {
      const checked = renderProps.checkedMap?.get(item._id) as boolean;
      return (
        <input
          type="checkbox"
          checked={renderProps.checkedMap?.get(item._id)}
          onClick={() =>
            renderProps?.setCheckedMap({
              _id: item._id,
              checked: !checked,
            })
          }
          style={{ cursor: "pointer" }}
        />
      );
    },
  };
};

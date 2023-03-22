import styles from "./styles/SpeedDialMenu.module.css";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import EditIcon from "@mui/icons-material/Edit";
import TitleIcon from "@mui/icons-material/Title";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import ListAltIcon from "@mui/icons-material/ListAlt";
import DialpadIcon from "@mui/icons-material/Dialpad";
import { TContentSubitemSubtype } from "@/global-constants/constants";

// export type TContentSubitemType =
//   | "title"
//   | "description"
//   | "images"
//   | "list"
//   | "action";

const actions = [
  { icon: <TitleIcon />, name: "Title", actionSubtype: "title" },
  {
    icon: <DescriptionIcon />,
    name: "Description",
    actionSubtype: "description",
  },
  { icon: <ImageSearchIcon />, name: "Images", actionSubtype: "images" },
  { icon: <ListAltIcon />, name: "List", actionSubtype: "list" },
  // { icon: <DialpadIcon />, name: "Action", actionSubtype: "action" },
];

export default function SpeedDialMenu({
  onSelect,
}: {
  onSelect: (sybtype: TContentSubitemSubtype) => void;
}) {
  return (
    <div>
      <Box
        sx={{
          height: 50,
          transform: "translateZ(0px)",
          flexGrow: 1,
          marginRight: -7,
        }}
      >
        <SpeedDial
          sx={{
            "& .MuiFab-primary": {
              width: 40,
              height: 40,
              boxShadow: "0 0 4px lightgrey",
              //   position: "absolute",
              //   bottom: 16,
              //   right: -46,
            },
          }}
          ariaLabel="SpeedDial openIcon example"
          direction="down"
          icon={<SpeedDialIcon openIcon={<EditIcon />} />}
        >
          {actions.map((action) => (
            <SpeedDialAction
              sx={{
                width: 35,
                height: 35,
                boxShadow: "0 0 4px lightgrey",
              }}
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={() =>
                onSelect(action.actionSubtype as TContentSubitemSubtype)
              }
            />
          ))}
        </SpeedDial>
      </Box>
    </div>
  );
}

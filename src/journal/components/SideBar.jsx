import {
  Avatar,
  Box,
  Divider,
  Drawer,
  List,
  Toolbar,
  Typography,
} from "@mui/material";

import { useSelector } from "react-redux";
import { SidebarItem } from "./";
import { blueGrey } from "@mui/material/colors";

export const SideBar = ({ draweWidth = 240 }) => {
  const { displayName } = useSelector((state) => state.auth);
  const { notes } = useSelector((state) => state.journal);
  const { photoURL } = useSelector((state) => state.auth);

  return (
    <Box
      component="nav"
      sx={{ width: { sm: draweWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: draweWidth },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            <Avatar alt="google avatar" sx={{ bgcolor: blueGrey[500] }}>
              {photoURL ? (
                <img
                  src={photoURL}
                  alt={displayName}
                  style={{ width: 50, height: 50, marginTop: "0.5rem"}}
                />
              ) : (
                displayName
                  ?.split(" ")
                  .slice(0, 2)
                  .map((name) => name.charAt(0))
                  .join("")
              )}
            </Avatar>
            {displayName}
          </Typography>
        </Toolbar>
        <Divider />

        {/* List */}
        <List>
          {notes.map((note) => (
            <SidebarItem key={note.id} {...note} />
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

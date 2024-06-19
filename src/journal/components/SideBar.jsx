import { Box, Divider, Drawer, List, Toolbar, Typography } from "@mui/material";

import { useSelector } from "react-redux";
import { SidebarItem } from "./SidebarItem";

export const SideBar = ({ draweWidth = 240 }) => {
  const { displayName } = useSelector((state) => state.auth);
  const { notes } = useSelector((state) => state.journal);

  return (
    <Box
      component="nav"
      sx={{ width: { sm: draweWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent"
        open={false}
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { width: draweWidth, boxSizing: "border-box" },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
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

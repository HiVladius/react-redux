import { TurnedInNot } from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  List,
  Toolbar,
  Typography,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
} from "@mui/material";

export const SideBar = ({ draweWidth = 240 }) => {
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
            Vladimir Moreno
          </Typography>
        </Toolbar>
        <Divider />

        {/* List */}
        <List>
          {["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"].map(
            (text) => (
              <ListItem key={text} disablePadding>
                <ListItemIcon>
                  <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                  <ListItemText primary={text} />
                  <ListItemText secondary={"Exercitation cillum irure elit"} />
                </Grid>
              </ListItem>
            )
          )}
        </List>


      </Drawer>
    </Box>
  );
};

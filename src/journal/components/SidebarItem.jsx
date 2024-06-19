import { ListItem, ListItemIcon, ListItemText, Grid } from "@mui/material";
import { TurnedInNot } from "@mui/icons-material";
import { useMemo } from "react";

export const SidebarItem = ({ title='', body, id }) => {

    const noteMemo = useMemo(() => {
        return title.length > 10 
        ? title.substring (0, 10) + "..." 
        : title;
    }, [title]);


  return (
    <ListItem disablePadding>
      <ListItemIcon>
        <TurnedInNot />
      </ListItemIcon>
      <Grid container>
        <ListItemText primary={noteMemo} />
        <ListItemText secondary={body} />
      </Grid>
    </ListItem>
  );
};

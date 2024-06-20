import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { ListItem, ListItemIcon, ListItemText, Grid, ListItemButton } from "@mui/material";
import { TurnedInNot } from "@mui/icons-material";
import { setActiveNote } from "../../store/journal/";



export const SidebarItem = ({ title = "", body, id, date, imageUrls = [] }) => {

    const dispatch = useDispatch();

  const onClickNote = () => {
        dispatch( setActiveNote({ title, body, id, date, imageUrls }) )
    }

  const noteMemo = useMemo(() => {
    return title.length > 17 ? title.substring(0, 17) + "..." : title;
  }, [title]);

  return (
    <ListItem disablePadding>
    <ListItemButton onClick={ onClickNote }>
        <ListItemIcon>
            <TurnedInNot />
        </ListItemIcon>
        <Grid container>
            <ListItemText primary={ noteMemo } />
            <ListItemText secondary={ body } />
        </Grid>
    </ListItemButton>
</ListItem>
  );
};

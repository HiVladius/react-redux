import { JournalLayout } from "../layout/JournalLayout";
import { NothingSelectedView } from "../views/NothingSelectedView";
import { NoteViews } from "../views/NoteViews";

import { Fab } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

export const JournalPages = () => {
  return (
    <JournalLayout>
      {/* <Typography  align="justify">
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur ut itaque inventore voluptatibus tempore delectus impedit consequuntur deserunt libero saepe, ipsa excepturi nisi illo, ea in odit reiciendis debitis dolorem.
     
      </Typography> */}

      <NothingSelectedView />

      {/* <NoteViews /> */}

      <Fab
        size="small"
        color="primary"
        aria-label="add"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.8 },
          position: "fixed",
          bottom: 50,
          right: 50,
        }}
      >
        <EditIcon />
      </Fab>
    </JournalLayout>
  );
};

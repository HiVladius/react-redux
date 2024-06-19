import { JournalLayout } from "../layout/JournalLayout";
import { NothingSelectedView } from "../views/NothingSelectedView";
import { NoteViews } from "../views/NoteViews";

import { useDispatch, useSelector } from "react-redux";
import { startNewNote } from "../../store/journal/thunks";

import { Fab } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { savingNewNote } from "../../store/journal";

export const JournalPages = () => {
  const dispatch = useDispatch();

  const { isSaving, active: note } = useSelector((state) => state.journal);

  const onClickNewNote = () => {
    dispatch(savingNewNote());
    dispatch(startNewNote());
  };

  return (
    <JournalLayout>
      
      {!!note ? <NoteViews note={note} /> : <NothingSelectedView />}

      <Fab
        onClick={onClickNewNote}
        disabled={isSaving}
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

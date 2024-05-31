import { Box, Toolbar } from "@mui/material";
import React from "react";
import { NavBar, SideBar } from "../components";

Toolbar

const drawerWhidth = 240;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>

       <NavBar drawerWhidth={drawerWhidth} />

       <SideBar drawerWhidth={drawerWhidth} />

        {/* Sidebar */}

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

        <Toolbar />

        {children}
      </Box>
    </Box>
  );
};

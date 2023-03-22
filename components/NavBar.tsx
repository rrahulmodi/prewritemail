import { Box } from "@mui/material";
import { useTheme } from "next-themes";
import React from "react";

type Props = {};

const NavBar = (props: Props) => {
  const { theme, setTheme } = useTheme();
  return (
    <Box className="flex pa3 flex-row justify-between align-items-center w-100">
      <Box className="d-block w-100 flex flex-row justify-end">
        <button
          id="nav-light"
          className="button-reset bg-transparent b--none pa0 btn-mode"
          type="button"
          aria-label="Click to toggle Dark/Light mode"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <img src="./images/dark-icon.svg" alt="" />
        </button>
      </Box>
    </Box>
  );
};

export default NavBar;

import { Box, BoxProps, Typography } from "@mui/material";
import Head from "next/head";
import React, { ComponentProps, FC, PropsWithChildren } from "react";
import NavBar from "./NavBar";

const Layout: FC<PropsWithChildren & BoxProps> = ({ children }) => {
  return (
    <main className={`h-100 flex main flex-column`}>
      <Head>
        <title>PreWrite Mail</title>
      </Head>
      <NavBar />
      <Typography className="main-text">
        Quickly and easily generate <br /> code for those annoying <br /> mailto
        links
      </Typography>
      {children}
    </main>
  );
};

export default Layout;

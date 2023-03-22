import { NextRouter } from "next/router";

export const verifyAdmin = (router: NextRouter) => {
  const token = localStorage.getItem("admin_access_token");
  if (!token) {
    router.replace("/admin");
    return false;
  }
  return true;
};

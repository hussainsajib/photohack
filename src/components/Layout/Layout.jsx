import React from "react";
import S from "./Layout.module.css";

const Layout = ({ children }) => {
    return <div className={S.layoutContainer}>{children}</div>;
};

export default Layout;

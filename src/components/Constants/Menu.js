import React from "react";
import Pool from "../Pool/Pool";
import Songs from "../Songs/Songs";
import Swap from "../Swap/Swap";

export const Paths = [
  {
    title: "Swap",
    path: "/",
    component: <Swap />,
  },
  {
    title: "Xswap",
    path: "/xswap",
    component: <Songs />,
  },
];

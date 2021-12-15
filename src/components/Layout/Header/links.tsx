import React from "react";
import { Broadcast, User, Book } from "phosphor-react";

const HEADER_LINKS = [
  {
    id: "1",
    href: "/",
    title: "Podcasts",
    icon: <Broadcast size="20" />,
  },
  {
    id: "2",
    href: "/category",
    title: "Categories",
    icon: <Book size="20" />,
  },
  {
    id: "3",
    href: "/docs",
    title: "Authors",
    icon: <User size="20" />,
  },
];

export default HEADER_LINKS;

import React from 'react';
import { Broadcast, User, Book } from "phosphor-react";
const HEADER_LINKS = [
  {
    id: "1",
    href: "/",
    title: "Podcasts",
    icon: <Broadcast />,
  },
  {
    id: "2",
    href: "/category",
    title: "Categories",
    icon: <Book />
  },
  {
    id: "3",
    href: "/docs",
    title: "Authors",
    icon: <User />,
  }
];

export default HEADER_LINKS

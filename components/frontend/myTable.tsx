"use client";

import React from "react";
import { Pagination } from "@nextui-org/react";

export default function MyTable() {
  return <Pagination total={10} initialPage={1} />;
}

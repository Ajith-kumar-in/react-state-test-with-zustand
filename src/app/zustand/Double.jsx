// app/zustand/Double.jsx
"use client";

import { useDouble } from "@/app/zustand/store";
import { Box } from "@chakra-ui/react";

export default function Double() {
  const dbl = useDouble();
  return <Box>Double: {dbl}</Box>;
}

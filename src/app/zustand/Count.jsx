// app/zustand/Count.jsx
"use client";

import { useCount } from "@/app/zustand/store";
import { Box } from "@chakra-ui/react";

export default function Count() {
  const count = useCount();
  return <Box>Count: {count}</Box>;
}

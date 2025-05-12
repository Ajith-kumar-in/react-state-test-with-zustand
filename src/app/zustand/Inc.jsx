// app/zustand/Inc.jsx
"use client";

import { useIncrement } from "@/app/zustand/store";
import { Box, Button } from "@chakra-ui/react";

export default function Inc() {
  const increment = useIncrement();
  return (
    <Box>
      <Button onClick={increment}>Increment</Button>
    </Box>
  );
}

// app/page.jsx
"use client";

import { Box, Heading } from "@chakra-ui/react";
import Count from "@/app/zustand/Count";
import Double from "@/app/zustand/Double";
import Inc from "@/app/zustand/Inc";

export default function Home() {
  return (
    <Box maxW="container.md" mx="auto" p={4}>
      <Heading as="h1" size="xl" mb={6}>
        Zustand Counter
      </Heading>
      <Count />
      <Double />
      <Inc />
    </Box>
  );
}

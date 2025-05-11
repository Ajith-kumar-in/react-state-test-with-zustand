// app/zustand/Count.jsx
"use client";

import Container from "@/app/(components)/Container";
import { useCount } from "@/app/zustand/store";

export default function Count() {
  const count = useCount();
  return <Container>Count: {count}</Container>;
}

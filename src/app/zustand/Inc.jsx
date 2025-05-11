// app/zustand/Inc.jsx
"use client";

import Container from "@/app/(components)/Container";
import Button from "@/app/(components)/Button";
import { useIncrement } from "@/app/zustand/store";

export default function Inc() {
  const increment = useIncrement();
  return (
    <Container>
      <Button onClick={increment}>Increment</Button>
    </Container>
  );
}

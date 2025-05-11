// app/zustand/Double.jsx
"use client";

import Container from "@/app/(components)/Container";
import { useDouble } from "@/app/zustand/store";

export default function Double() {
  const dbl = useDouble();
  return <Container>Double: {dbl}</Container>;
}

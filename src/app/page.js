// app/page.jsx
"use client";

import Container from "@/app/(components)/Container";
import H1 from "@/app/(components)/H1";
import Count from "@/app/zustand/Count";
import Double from "@/app/zustand/Double";
import Inc from "@/app/zustand/Inc";

export default function Home() {
  return (
    <Container>
      <H1>Zustand Counter</H1>
      <Count />
      <Double />
      <Inc />
    </Container>
  );
}

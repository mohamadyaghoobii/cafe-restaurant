"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../ui/text-reveal-card";

export function TextRevealCardPreview() {
  return (
    <div   className="flex text-primary items-center justify-center bg-[#0E0E10] h-[40rem] rounded-2xl w-full">
      <TextRevealCard
        text=" L8 روف کافه "
        revealText="L8 روف کافه  "
      >
       
      </TextRevealCard>
    </div>
  );
}

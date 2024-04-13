"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `Akanji Article, stay Updated`;

export function TextGenerate() {
  return <TextGenerateEffect words={words} />;
}

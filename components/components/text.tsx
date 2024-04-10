"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `Welcome to Akeja Blog, stay Updated`;

export function TextGenerate() {
  return <TextGenerateEffect words={words} />;
}

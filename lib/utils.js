import { clsx } from "clsx";
import Parser from "rss-parser";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function isProductionMode() {
  return process.env.NODE_ENV === "production";
}

export async function fetchRss(url) {
  const parser = new Parser();

  return await parser.parseURL(url);
}

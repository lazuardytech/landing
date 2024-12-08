import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import Parser from "rss-parser";

export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

export const fetchRss = async (url) => {
  const parser = new Parser();

  return await parser.parseURL(url);
};

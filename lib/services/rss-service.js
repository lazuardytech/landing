import { fetchRss } from "@/lib/utils";
import * as cheerio from "cheerio";
import DOMPurify from "isomorphic-dompurify";
import readingTime from "reading-time";

export function getFormattedDate(
  isoDate,
  lang = "en-US",
  format = {
    month: "short",
    day: "2-digit",
    year: "numeric",
  },
) {
  return new Intl.DateTimeFormat(lang, format).format(new Date(isoDate));
}

export async function fetchMediumRss(
  id = null,
  url = process.env.NEXT_PUBLIC_RSS_LINK,
) {
  const data = await fetchRss(url);

  data.items = data.items.map((item) => {
    item.guid = item.guid.replace("https://medium.com/p/", "");

    const $ = cheerio.load(item["content:encoded"]);

    const content = DOMPurify.sanitize(
      $("figure")
        .nextAll()
        .toArray()
        .map((el) => {
          const isAnalytics =
            el.tagName === "img" &&
            $(el).attr("src").includes("medium.com/_/stat");

          const isHr = el.tagName === "hr";

          if (isAnalytics || isHr) {
            return null;
          }

          return $.html(el);
        })
        .join(""),
    );

    const readTime = readingTime($(content).text());

    return {
      id: item.guid,
      title: item.title,
      coverImageUrl: $("img").first().attr("src"),
      coverImageAttribution: DOMPurify.sanitize($("figcaption").first().html()),
      description: $("p").first().text(),
      link: item.link,
      isoDate: item.isoDate,
      formattedDate: getFormattedDate(item.isoDate),
      content: DOMPurify.sanitize(content),
      categories: item.categories ?? [],
      creator: {
        name: item.creator,
        profile_image_url: data.image.url,
      },
      readTime: readTime,
    };
  });

  if (id) {
    return data.items.find((item) => item.id === id);
  }

  return data.items;
}

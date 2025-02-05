import * as cheerio from "cheerio";
import DOMPurify from "isomorphic-dompurify";
import readingTime from "reading-time";
import { fetchRss } from "@/lib/utils";

export async function fetchMediumRss(
  id = null,
  url = process.env.NEXT_PUBLIC_RSS_LINK,
) {
  id = id === null ? NaN : Number(id);

  let data = await fetchRss(url);

  data.items = data.items.map((item) => {
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
      guid: item.guid,
      title: item.title,
      coverImageUrl: $("img").first().attr("src"),
      coverImageAttribution: DOMPurify.sanitize($("figcaption").first().html()),
      description: $("p").first().text(),
      link: item.link,
      isoDate: item.isoDate,
      content: DOMPurify.sanitize(content),
      categories: item.categories ?? [],
      creator: {
        name: item.creator,
        profile_image_url: data.image.url,
      },
      readTime: readTime,
      getFormattedDate: (
        lang = "en-US",
        format = {
          month: "short",
          day: "2-digit",
          year: "numeric",
        },
      ) => {
        return new Intl.DateTimeFormat(lang, format).format(
          new Date(item.isoDate),
        );
      },
    };
  });

  if (!isNaN(id) && id >= 0) {
    return {
      article: data.items[id],
      next: id === 0 ? null : data.items[id - 1],
      nextId: id === 0 ? null : id - 1,
      prev: id === data.items.length - 1 ? null : data.items[id + 1],
      prevId: id === data.items.length - 1 ? null : id + 1,
    };
  }

  return data;
}

export const CACHED_ARTICLES = await fetchMediumRss();

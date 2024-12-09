import Link from "next/link";
import Image from "next/image";
import Maintenance from "@/components/ui/maintenance";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { ExternalLink } from "lucide-react";
import { isMaintenanceMode } from "@/lib/config";
import { fetchMediumRss } from "@/lib/services/rss-service";
import { socials } from "@/lib/state";

export default async function Page() {
  if (isMaintenanceMode()) return <Maintenance />;

  const data = await fetchMediumRss();

  return (
    <>
      <Header />
      <div className="container px-10 lg:px-16 mb-16 mt-16 lg:mt-40">
        <Title className="mt-0" />
        <Articles className="mt-12" data={data} />
      </div>
      <Footer />
    </>
  );
}

function Title({ className }) {
  return (
    <div className={`flex flex-col w-full ${className}`}>
      <div className="w-full max-w-xl lg:max-w-4xl text-3xl lg:text-7xl font-bold text-white">
        <h1 className="leading-none">Latest Articles.</h1>
      </div>
      <div className="w-full max-w-xl lg:max-w-4xl text-sm lg:text-lg font-light text-gray-400 mt-6">
        <div className="flex leading-relaxed">
          <span>We write everything we care about on</span>
          <span>
            <Link
              className="flex underline gap-1 ms-1 transition duration-300 hover:text-white"
              href={socials[2].link}
              target={socials[2].target}
            >
              Medium
              <ExternalLink className="w-3 lg:w-4 h-3 lg:h-4 mt-1.5 lg:mt-2" />
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

function Articles({ className, data }) {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 ${className}`}
    >
      {data.items.map((article, index) => (
        <Link href={`/articles/${index}`} key={index}>
          <div
            key={index}
            className="flex flex-col gap-2 hover:opacity-75 cursor-pointer transition-all duration-500"
          >
            <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer">
              <div className="relative w-full h-full border border-zinc-800 aspect-video mb-4">
                <Image
                  src={article.coverImageUrl}
                  alt={article.title}
                  className="object-cover w-full h-full"
                  fill
                />
              </div>
              <div className="relative w-full h-full">
                <span className="text-lg line-clamp-1 text-ellipsis">
                  {article.title}
                </span>
              </div>
              <div className="w-full h-full">
                <span className="font-light text-gray-400 text-sm line-clamp-2 text-ellipsis">
                  {article.description}
                </span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

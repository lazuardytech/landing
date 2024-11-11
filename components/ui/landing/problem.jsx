import BlurFade from "@/components/magicui/blur-fade";
import {
  Database,
  MoveDownLeft,
  MoveUpRight,
  Receipt,
  RefreshCcw,
  RefreshCw,
  Settings,
} from "lucide-react";
import Link from "next/link";

export default function Problem() {
  return (
    <div className="w-full bg-neutral-950 mt-40 py-40">
      <div className="container px-12 lg:px-16">
        <div className="flex flex-col text-center items-center">
          <div className="flex flex-col">
            <div className="text-3xl md:text-5xl font-light mb-8">
              <BlurFade key={"problem-title"} delay={0.25 + 0 * 0.05} inView>
                We know you&apos;re tired
                <br />
                to grow your business
              </BlurFade>
            </div>
            <div className="text-md font-light text-gray-400 text-center lg:max-w-4xl mx-auto mb-8 lg:mb-16">
              <BlurFade key={"problem-text-1"} delay={0.25 + 1 * 0.05} inView>
                Statistic says, 90% of startups that exist are failing, while
                18.4% business tend to fail at the first year. —{" "}
                <Link
                  href="https://luisazhou.com/blog/businesses-that-fail/"
                  target="_blank"
                  className="text-gray-200 hover:underline"
                >
                  luisazhou.com
                </Link>
                <br />
                We know your journey is tough, and growth can feel exhausting
                for now.
              </BlurFade>
            </div>
            <div className="mb-8 lg:mb-16">
              <Stat />
            </div>
            <div className="text-md font-regular text-gray-200 text-center max-w-xl mx-auto">
              <BlurFade key="problem-text-2" delay={0.25 + 6 * 0.05} inView>
                Thus, let us handle the hard work for you, so you don&apos;t
                have to.
                <br />
                You can focus on what you do best for the next step.
              </BlurFade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Stat() {
  return (
    <div className="grid text-left grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-8 lg:px-16">
      <BlurFade key={"problem-stat-1"} delay={0.25 + 2 * 0.05} inView>
        <div className="flex gap-0 flex-col justify-between p-6 border border-zinc-800">
          <Settings className="w-6 h-6 mb-10 text-primary" />
          <div className="text-2xl lg:text-3xl max-w-xl text-left font-regular text-white flex flex-row gap-4 items-end">
            74%
          </div>
          <div className="text-md text-light text-gray-300 text-left mt-2">
            Business with Operational Bottlenecks
          </div>
        </div>
      </BlurFade>
      <BlurFade key={"problem-stat-2"} delay={0.25 + 3 * 0.05} inView>
        <div className="flex gap-0 flex-col justify-between p-6 border border-zinc-800">
          <Database className="w-6 h-6 mb-10 text-primary" />

          <div className="text-2xl lg:text-3xl max-w-xl text-left font-regular text-white flex flex-row gap-4 items-end">
            68%
          </div>
          <div className="text-md text-light text-gray-300 text-left mt-2">
            Business Struggle to Use Data Effectively
          </div>
        </div>
      </BlurFade>
      <BlurFade key={"problem-stat-3"} delay={0.25 + 4 * 0.05} inView>
        <div className="flex gap-0 flex-col justify-between p-6 border border-zinc-800">
          <Receipt className="w-6 h-6 mb-10 text-primary" />

          <div className="text-2xl lg:text-3xl max-w-xl text-left font-regular text-white flex flex-row gap-4 items-end">
            60%
          </div>
          <div className="text-md text-light text-gray-300 text-left mt-2">
            Higher Cost to Performance Average Ratio
          </div>
        </div>
      </BlurFade>
      <BlurFade key={"problem-stat-4"} delay={0.25 + 5 * 0.05} inView>
        <div className="flex gap-0 flex-col justify-between p-6 border border-zinc-800">
          <RefreshCw className="w-6 h-6 mb-10 text-primary" />
          <div className="text-2xl lg:text-3xl max-w-xl text-left font-regular text-white flex flex-row gap-4 items-end">
            40%
          </div>
          <div className="text-md text-light text-gray-300 text-left mt-2">
            Hours a Week Spent Doing Repetitive Jobs
          </div>
        </div>
      </BlurFade>
    </div>
  );
}

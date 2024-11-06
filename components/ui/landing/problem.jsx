import BlurFade from "@/components/magicui/blur-fade";
import { MoveDownLeft, MoveUpRight } from "lucide-react";

export default function Problem() {
  return (
    <div className="w-full bg-neutral-950 mt-40">
      <div className="container mx-auto py-40">
        <div className="flex flex-col text-center items-center">
          <div className="flex flex-col">
            <div className="text-4xl md:text-5xl font-light mb-8">
              <BlurFade key={"problem-title"} delay={0.25 + 0 * 0.05} inView>
                We know you&apos;re tired with this.
              </BlurFade>
            </div>
            <div className="text-md font-light text-gray-400 text-center max-w-xl mx-auto mb-16">
              <BlurFade key={"problem-text-1"} delay={0.25 + 1 * 0.05} inView>
                Managing a small business today is already tough. Avoid further
                complications by ditching outdated, tedious trade methods. Our
                goal is to streamline SMB trade, making it easier and faster
                than ever.
              </BlurFade>
            </div>
            <div className="mb-20">
              <Stat />
            </div>
            <div className="text-md font-regular text-gray-200 text-center max-w-xl mx-auto">
              <BlurFade key={"problem-text-2"} delay={0.25 + 6 * 0.05} inView>
                Let us handle the hard work for you, so you don&apos;t have to.
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
    <div className="grid text-left grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-4 lg:gap-8">
      <BlurFade key={"problem-stat-1"} delay={0.25 + 2 * 0.05} inView>
        <div className="flex gap-0 flex-col justify-between p-6 border rounded-md">
          <MoveUpRight className="w-4 h-4 mb-10 text-primary" />
          <div className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end">
            500.000
            <span className="text-muted-foreground text-sm tracking-normal">
              +20.1%
            </span>
          </div>
          <div className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
            Monthly active users
          </div>
        </div>
      </BlurFade>
      <BlurFade key={"problem-stat-2"} delay={0.25 + 3 * 0.05} inView>
        <div className="flex gap-0 flex-col justify-between p-6 border rounded-md">
          <MoveDownLeft className="w-4 h-4 mb-10 text-destructive" />
          <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end">
            20.105
            <span className="text-muted-foreground text-sm tracking-normal">
              -2%
            </span>
          </h2>
          <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
            Daily active users
          </p>
        </div>
      </BlurFade>
      <BlurFade key={"problem-stat-3"} delay={0.25 + 4 * 0.05} inView>
        <div className="flex gap-0 flex-col justify-between p-6 border rounded-md">
          <MoveUpRight className="w-4 h-4 mb-10 text-success" />
          <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end">
            $523.520
            <span className="text-muted-foreground text-sm tracking-normal">
              +8%
            </span>
          </h2>
          <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
            Monthly recurring revenue
          </p>
        </div>
      </BlurFade>
      <BlurFade key={"problem-stat-4"} delay={0.25 + 5 * 0.05} inView>
        <div className="flex gap-0 flex-col justify-between p-6 border rounded-md">
          <MoveUpRight className="w-4 h-4 mb-10 text-primary" />
          <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end">
            $1052
            <span className="text-muted-foreground text-sm tracking-normal">
              +2%
            </span>
          </h2>
          <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
            Cost per acquisition
          </p>
        </div>
      </BlurFade>
    </div>
  );
}

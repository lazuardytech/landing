import { MoveDownLeft, MoveUpRight } from "lucide-react";

export default function Problem() {
  return (
    <div className="w-full bg-zinc-900 mt-32">
      <div className="container mx-auto py-40">
        <div className="flex flex-col text-center items-center">
          <div className="flex flex-col">
            <h3 className="text-4xl md:text-5xl font-light mb-8">
              We know you&apos;re tired with this.
            </h3>
            <p className="text-md font-light text-gray-400 text-center max-w-xl mx-auto mb-16">
              Managing a small business today is already tough. Avoid further
              complications by ditching outdated, tedious trade methods. Our
              goal is to streamline SMB trade, making it easier and faster than
              ever.
            </p>
            <div className="mb-20">
              <Stat />
            </div>
            <p className="text-md font-light text-gray-400 text-center max-w-xl mx-auto">
              Let us handle the hard work for you, so you don&apos;t have to.
              <br />
              You can focus on what you do best for the next step.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Stat() {
  return (
    <div className="grid text-left grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-4 lg:gap-8">
      <div className="flex gap-0 flex-col justify-between p-6 border rounded-md">
        <MoveUpRight className="w-4 h-4 mb-10 text-primary" />
        <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end">
          500.000
          <span className="text-muted-foreground text-sm tracking-normal">
            +20.1%
          </span>
        </h2>
        <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
          Monthly active users
        </p>
      </div>
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
    </div>
  );
}

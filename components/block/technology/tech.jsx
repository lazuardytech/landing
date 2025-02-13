import HorizontalBorder from "@/components/ui/horizontal-border";
import LayoutLine from "@/components/ui/layout-line";
import { Marquee } from "@/components/ui/marquee";
import Paragraph from "@/components/ui/paragraph";
import Title from "@/components/ui/title";
import Doto from "@/lib/fonts/doto";

export default function Tech() {
  return (
    <div className="flex flex-col w-full">
      <LayoutLine>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full">
          <TechItems
            className="border-r border-neutral-400 border-opacity-90"
            title="Architecture"
            description="How we assemble your software."
            items={[
              "MVC",
              "MVP",
              "MVVM",
              "Monolith",
              "Microservice",
              "MVC",
              "MVP",
              "MVVM",
              "Monolith",
              "Microservice",
            ]}
          />
          <TechItems
            title="Database"
            description="Where we store your data securely."
            items={[
              "SQLite",
              "MySQL",
              "Postgres",
              "Oracle",
              "EdgeDB",
              "RealmDB",
              "MongoDB",
              "Supabase",
              "Firebase",
              "Elasticsearch",
              "Redis",
              "SQLite",
            ]}
          />
          <TechItems
            className="border-r border-neutral-400 border-opacity-90"
            title="Frontend"
            description="The software layer that you can see and touch."
            items={[
              "React",
              "React Native",
              "Vue",
              "Svelte",
              "Next",
              "Nuxt",
              "Electron",
              "Tauri",
              "Flutter",
              "Jetpack Compose",
              "SwiftUI",
            ]}
          />
          <TechItems
            title="Backend"
            description="The internal logic that run your software perfectly."
            items={[
              "Laravel",
              "Next",
              "Nuxt",
              "Nest",
              "Django",
              "Node",
              "Deno",
              "Spring Boot",
              "FastAPI",
              "Phoenix",
              "Actix",
              "Fiber",
            ]}
          />
          <TechItems
            className="border-r border-neutral-400 border-opacity-90"
            title="Cloud Server"
            description="The traditional cloud, where your software run flawlessly."
            items={[
              "Google Cloud Platform",
              "Amazon Web Services",
              "Microsoft Azure",
              "DigitalOcean",
              "IBM Cloud",
              "Alibaba Cloud",
              "Linode",
              "Google Cloud Platform",
              "Amazon Web Services",
              "Microsoft Azure",
            ]}
          />
          <TechItems
            title="Serverless Cloud"
            description="The modern cloud, that run more efficient."
            items={[
              "Vercel",
              "Netlify",
              "Koyeb",
              "Firebase",
              "Upstash",
              "Vercel",
              "Netlify",
              "Koyeb",
              "Firebase",
              "Upstash",
            ]}
          />
          <TechItems
            className="border-r border-neutral-400 border-opacity-90"
            title="Hardware"
            description="The platform where your hardware assembled."
            items={[
              "Rasberry Pi",
              "Arduino",
              "ESP32",
              "Rasberry Pi",
              "Arduino",
              "ESP32",
              "Rasberry Pi",
              "Arduino",
              "ESP32",
              "Rasberry Pi",
            ]}
          />
          <TechItems
            title="Designer"
            description="Where your design and brand created."
            items={[
              "Figma",
              "Rive",
              "Jitter",
              "Photoshop",
              "Corel Draw",
              "Figma",
              "Rive",
              "Jitter",
              "Photoshop",
              "Corel Draw",
            ]}
          />
          <TechItems
            className="border-r border-neutral-400 border-opacity-90"
            title="Large Language Model"
            description="The artificial intelligence we work with."
            items={[
              "ChatGPT",
              "Gemini",
              "Claude",
              "Deepseek",
              "Mistral",
              "Llama",
              "DALL·E",
              "Imagen",
              "Stable Diffusion",
              "SDXL",
            ]}
          />
          <TechItems
            title="Research Platform"
            description="Where we research your data and test our algorithm."
            items={[
              "Google Collab",
              "Jupyter Notebook",
              "Kibana",
              "Prometheus",
              "Google Collab",
              "Jupyter Notebook",
              "Kibana",
              "Prometheus",
              "Google Collab",
              "Jupyter Notebook",
            ]}
          />
          <TechItems
            className="border-r border-neutral-400 border-opacity-90"
            title="Development Environment"
            description="Where our engineer play."
            items={[
              "Visual Studio Code",
              "Sublime Text",
              "Zed",
              "EasyEDA",
              "Docker",
              "Laravel Herd",
              "Laragon",
              "XAMPP",
              "Visual Studio Code",
              "Sublime Text",
            ]}
          />
          <TechItems
            title="Programming Language"
            description="The language that our engineer speaks."
            items={[
              "Swift",
              "Kotlin",
              "Java",
              "Javascript",
              "Typescript",
              "PHP",
              "Python",
              "R",
              "C#",
              "Elixir",
              "Rust",
              "Golang",
            ]}
          />
        </div>
      </LayoutLine>
    </div>
  );
}

export function TechItems({ className, title, description, items }) {
  return (
    <div className={`flex flex-col w-full ${className}`}>
      <div className="flex flex-col w-full pt-16 md:pt-20 md:transition-colors md:duration-200 md:hover:bg-neutral-400">
        <Title className="text-lg px-8">{title}</Title>
        <Paragraph className="text-sm text-justify pt-4 pb-6 px-8">
          {description}
        </Paragraph>
      </div>
      <HorizontalBorder />
      <div className="relative py-4 flex h-auto w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:30s]">
          {items.map((label, index) => (
            <TechItem key={index} label={label} />
          ))}
        </Marquee>
      </div>
      <HorizontalBorder />
    </div>
  );
}

export function TechItem({ label }) {
  return (
    <>
      <h1
        className={`font-bold text-lg md:text-xl text-black text-left leading-snug uppercase ${Doto.className}`}
      >
        {label}
      </h1>
      <h1
        className={`font-bold text-lg md:text-xl text-black text-left leading-snug uppercase ${Doto.className}`}
      >
        /
      </h1>
    </>
  );
}

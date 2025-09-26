"use client";

import HorizontalBorder from "@/components/ui/horizontal-border";
import LayoutLine from "@/components/ui/layout-line";
import Title from "@/components/ui/title";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { workDivisions } from "@/components/block/career/career-filter";
import { useSearchParams } from "next/navigation";

export default function CareerList() {
  const searchParams = useSearchParams();

  const careers = [
    {
      title: "Product Engineer (Intern)",
      requirements: ["Internship", "Remote", "3 Months"],
      location: "remote",
      type: "internship",
      division: "engineering",
    },
    {
      title: "AI Engineer (Intern)",
      requirements: ["Internship", "Remote", "3 Months"],
      location: "remote",
      type: "internship",
      division: "engineering",
    },
    {
      title: "QA Engineer (Intern)",
      requirements: ["Internship", "Remote", "3 Months"],
      location: "remote",
      type: "internship",
      division: "qa",
    },
    {
      title: "UI/UX Designer (Intern)",
      requirements: ["Internship", "Remote", "3 Months"],
      location: "remote",
      type: "internship",
      division: "creative",
    },
    {
      title: "Marketing Specialist (Intern)",
      requirements: ["Internship", "Remote", "3 Months"],
      location: "remote",
      type: "internship",
      division: "sm",
    },
  ];

  const filteredCareers = careers.filter((career) => {
    const locationFilter = searchParams.get("location");
    const typeFilter = searchParams.get("type");
    const divisionFilter = searchParams.get("division");

    return (
      (!locationFilter || career.location === locationFilter) &&
      (!typeFilter || career.type === typeFilter) &&
      (!divisionFilter || career.division === divisionFilter)
    );
  });

  return (
    <LayoutLine>
      <LayoutLine className="md:mx-8">
        <div className="flex flex-col w-full">
          <div className="grid lg:grid-cols-2">
            {filteredCareers.map((career, index) => (
              <div
                className={`flex flex-col ${index % 2 === 0 ? "lg:border-r border-neutral-400" : ""}`}
                key={index}
              >
                <HorizontalBorder className="mt-6" />
                <div
                  key={index}
                  className="relative flex flex-col p-6 transition-colors duration-500 hover:bg-neutral-300 md:hover:cursor-pointer"
                >
                  <Title className="text-xl">{career.title}</Title>
                  <div className="flex justify-between items-center mt-2">
                    <p className="font-light text-neutral-600 text-sm">
                      {career.requirements.join("  •  ")}
                    </p>
                    <p className="font-light text-neutral-600 text-sm text-right">
                      {
                        workDivisions.find(
                          (div) => div.value === career.division,
                        )?.label
                      }
                    </p>
                  </div>
                  <Link
                    href="/career/intern-w25"
                    className="hover-arrow-link flex absolute top-0 left-0 z-20 w-full h-full transition-opacity duration-200 opacity-0 hover:opacity-100"
                  >
                    <ArrowUpRight
                      className="absolute top-0 right-0 text-black w-10 h-10 m-1 opacity-60"
                      strokeWidth={0.8}
                    />
                  </Link>
                </div>
                <HorizontalBorder
                  className={`${index === filteredCareers.length - 1 ? "mb-6" : ""}`}
                />
              </div>
            ))}
          </div>
        </div>
      </LayoutLine>
      <HorizontalBorder />
    </LayoutLine>
  );
}

"use client";

import "@/components/block/contact/phone-number-input-style.css";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import HorizontalBorder from "@/components/ui/horizontal-border";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import LayoutLine from "@/components/ui/layout-line";
import Paragraph from "@/components/ui/paragraph";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Title from "@/components/ui/title";
import { CompanyData } from "@/lib/config";
import {
  AGREEMENTS,
  CLIENT_TYPES,
  PROJECT_CATEGORIES,
  PROJECT_PRICINGS,
} from "@/lib/enums";
import { useFormspark } from "@formspark/use-formspark";
import { Turnstile } from "@marsidev/react-turnstile";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Script from "next/script";
import { useState } from "react";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import { toast } from "sonner";

export default function Form() {
  const id = Math.random().toString(36).substring(2, 8);
  const router = useRouter();
  const pathname = usePathname();
  const [turnstileToken, setTurnstileToken] = useState(null);
  const [phone, setPhone] = useState("");
  const [categorySelected, setCategorySelected] = useState([]);
  const [pricingSelected, setPricingSelected] = useState("custom");
  const [agreementsAgreed, setAgreementsAgreed] = useState([]);
  const [submit, submitting] = useFormspark({
    formId: process.env.NEXT_PUBLIC_FORMSPARK_INQUIRY_FORM_ID,
  });
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: id,
      type: String(CLIENT_TYPES[0].value),
      website: "",
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      project_categories: "",
      project_title: "",
      project_description: "",
      project_pricings: String(
        PROJECT_PRICINGS[PROJECT_PRICINGS.length - 1].value,
      ),
      agreements: "",
    },
  });

  async function onSubmit(data) {
    if (!turnstileToken) {
      toast.warning("Please verify you're human.");
      return;
    }

    try {
      await submit(data);
      router.push(`/inquiry/${id}`);
    } catch (error) {
      toast.error("Failed to submit the inquiry.");
    }
  }

  function onCategoryChange(checked, value) {
    let newCategory = [...categorySelected];
    if (checked) {
      if (!newCategory.includes(value)) {
        newCategory.push(value);
      }
    } else {
      newCategory = newCategory.filter((i) => i !== value);
    }
    setValue("project_categories", JSON.stringify(newCategory));
    setCategorySelected(newCategory);
  }

  function onPricingPlanChange(checked, value) {
    if (!checked) {
      toast.warning("At least one pricing plan must be selected.");
      return;
    }
    if (pricingSelected) {
      setPricingSelected(value);
      setValue("project_pricings", value);
    }
  }

  function onAgreementsChange(checked, value) {
    let newAgreed = [...agreementsAgreed];
    if (checked) {
      if (!newAgreed.includes(value)) {
        newAgreed.push(value);
      }
    } else {
      newAgreed = newAgreed.filter((i) => i !== value);
    }
    setValue("agreements", JSON.stringify(newAgreed));
    setAgreementsAgreed(newAgreed);
  }

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
      />
      <LayoutLine className="md:pt-2">
        <HorizontalBorder className="mt-8" />
        <div className="flex justify-center items-center w-full">
          <LayoutLine className="md:max-w-xl min-h-[50vh] py-8">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col w-full space-y-6"
            >
              <div className="flex flex-col w-full pt-3 px-4 md:px-8">
                <Title className="text-md md:text-lg">Who are you?</Title>
              </div>
              <div className="grid grid-cols-2">
                <div className="flex flex-col justify-center border-t border-b border-r border-neutral-400 border-opacity-90">
                  <Select
                    className="w-full h-full md:text-sm"
                    onValueChange={(value) => setValue("type", value)}
                    defaultValue={CLIENT_TYPES[0].value}
                    {...register("type", { required: "Type is required" })}
                  >
                    <SelectTrigger className="px-4 md:px-8 transition-colors duration-200 hover:text-white hover:bg-primary/90">
                      <SelectValue placeholder="What are you?" />
                    </SelectTrigger>
                    <SelectContent className="bg-primary text-primary-foreground hover:bg-primary">
                      {CLIENT_TYPES.map((type) => (
                        <SelectItem key={type.label} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.type && (
                    <p className="text-red-500 text-sm px-8 py-2 border-t border-neutral-400 border-opacity-90">
                      {errors.type.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col justify-center border-t border-b border-neutral-400 border-opacity-90">
                  <Input
                    id="website"
                    type="url"
                    placeholder="Website"
                    className="px-4 md:px-8 py-6"
                    {...register("website", {
                      pattern: {
                        value: /^https:\/\/[\w.-]+\.[a-z]{2,}$/,
                        message: "Enter a valid URL starting with https://",
                      },
                      maxLength: {
                        value: 100,
                        message: "Website must be at most 100 characters",
                      },
                    })}
                  />
                  {errors.website && (
                    <p className="text-red-500 text-sm px-8 py-2 border-t border-neutral-400 border-opacity-90">
                      {errors.website.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="flex flex-col justify-center border-t border-b border-r border-neutral-400 border-opacity-90">
                  <Input
                    id="first_name"
                    placeholder="First Name *"
                    className="px-4 md:px-8 py-6"
                    {...register("first_name", {
                      required: "First name is required",
                      minLength: {
                        value: 1,
                        message: "First name must be at least 1 character",
                      },
                      maxLength: {
                        value: 500,
                        message: "First name must be at most 500 characters",
                      },
                    })}
                  />
                  {errors.first_name && (
                    <p className="text-red-500 text-sm px-8 py-2 border-t border-neutral-400 border-opacity-90">
                      {errors.first_name.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col justify-center border-t border-b border-neutral-400 border-opacity-90">
                  <Input
                    id="last_name"
                    placeholder="Last Name *"
                    className="px-4 md:px-8 py-6"
                    {...register("last_name", {
                      required: "Last name is required",
                      minLength: {
                        value: 1,
                        message: "Last name must be at least 1 character",
                      },
                      maxLength: {
                        value: 500,
                        message: "Last name must be at most 500 characters",
                      },
                    })}
                  />
                  {errors.last_name && (
                    <p className="text-red-500 text-sm px-8 py-2 border-t border-neutral-400 border-opacity-90">
                      {errors.last_name.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="flex flex-col justify-center border-t border-b border-r border-neutral-400 border-opacity-90">
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email *"
                    className="px-4 md:px-8 py-6"
                    {...register("email", {
                      required: "Email is required",
                      minLength: {
                        value: 1,
                        message: "Email must be at least 1 character",
                      },
                      maxLength: {
                        value: 500,
                        message: "Email must be at most 500 characters",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm px-8 py-2 border-t border-neutral-400 border-opacity-90">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col justify-center border-t border-b border-neutral-400 border-opacity-90 focus-within:border-l focus-within:border-r focus-within:border-black">
                  <PhoneInput
                    id="phone"
                    type="tel"
                    defaultCountry="ID"
                    placeholder="Phone"
                    className="px-4 md:px-8"
                    value={phone}
                    onChange={(value) => {
                      setPhone(value);
                      setValue("phone", String(value));
                    }}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm px-8 py-2 border-t border-neutral-400 border-opacity-90">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-col w-full pt-6 px-4 md:px-8">
                <Title className="text-md md:text-lg">
                  Choose your project categories
                </Title>
                <Paragraph className="text-xs mt-2">
                  Choose as many as you think it&apos;s fit for your project.
                  You may not choose anything if you&apos;re still not sure
                  about the project categories.
                </Paragraph>
              </div>
              <div className="grid grid-cols-2 gap-6 justify-start border-t border-b border-neutral-400 border-opacity-90 px-4 md:px-8 py-6">
                {PROJECT_CATEGORIES.map((category) => {
                  return (
                    <div key={category.value} className="flex items-center">
                      <Checkbox
                        id={category.value}
                        value={category.value}
                        onCheckedChange={(checked) =>
                          onCategoryChange(checked, category.value)
                        }
                        {...register("project_categories")}
                      />
                      <Label
                        htmlFor={category.value}
                        className="ml-4 text-sm text-muted-foreground font-normal hover:cursor-pointer"
                      >
                        {category.label}
                      </Label>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-col w-full pt-6 px-4 md:px-8">
                <Title className="text-md md:text-lg">
                  Tell us about your project or idea
                </Title>
                <Paragraph className="text-xs mt-2">
                  The more detail you provide, the better we can understand your
                  needs.
                </Paragraph>
              </div>
              <div className="flex flex-col justify-center border-t border-b border-neutral-400 border-opacity-90">
                <Input
                  id="project_title"
                  placeholder="Your project title *"
                  className="px-4 md:px-8 py-6"
                  {...register("project_title", {
                    required: "Project title is required",
                    minLength: {
                      value: 1,
                      message: "Project title must be at least 1 character",
                    },
                    maxLength: {
                      value: 1000,
                      message: "Project title must be at most 1000 characters",
                    },
                  })}
                />
                {errors.project_title && (
                  <p className="text-red-500 text-sm px-8 py-2 border-t border-neutral-400 border-opacity-90">
                    {errors.project_title.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col justify-center border-t border-b border-neutral-400 border-opacity-90">
                <Textarea
                  id="project_description"
                  placeholder="The description, story, budget, or detail about your project *"
                  className="px-4 md:px-8 py-6"
                  {...register("project_description", {
                    required: "Project description is required",
                    minLength: {
                      value: 1,
                      message:
                        "Project description must be at least 1 character",
                    },
                    maxLength: {
                      value: 8000,
                      message:
                        "Project description must be at most 8000 characters",
                    },
                  })}
                />
                {errors.project_description && (
                  <p className="text-red-500 text-sm px-8 py-2 border-t border-neutral-400 border-opacity-90">
                    {errors.project_description.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col w-full pt-6 px-4 md:px-8">
                <Title className="text-md md:text-lg">
                  Choose the pricing plan
                </Title>
                <Paragraph className="text-xs mt-2">
                  Choose the Custom Pricing if you not sure about the pricing
                  plan, and let us help you choose the best one later. You may
                  change this later when we set the deal.
                </Paragraph>
              </div>
              <div className="grid grid-cols-2 gap-6 justify-start border-t border-b border-neutral-400 border-opacity-90 px-4 md:px-8 py-6">
                {PROJECT_PRICINGS.map((pricing) => {
                  return (
                    <div key={pricing.value} className="flex items-start">
                      <Checkbox
                        id={pricing.value}
                        value={pricing.value}
                        checked={pricingSelected === pricing.value}
                        onCheckedChange={(checked) =>
                          onPricingPlanChange(checked, pricing.value)
                        }
                        className="mt-0.5"
                        {...register("project_pricings")}
                      />
                      <Label
                        htmlFor={pricing.value}
                        className="ml-4 flex flex-col text-sm text-muted-foreground font-normal hover:cursor-pointer"
                      >
                        <p>{pricing.label}</p>
                        <p className="text-xs font-light mt-2">
                          {pricing.description}
                        </p>
                      </Label>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-col w-full pt-6 px-4 md:px-8">
                <Title className="text-md md:text-lg">The Agreements</Title>
                <Paragraph className="text-xs mt-2">
                  Before submitting this form, please agree to our terms.
                </Paragraph>
              </div>
              <div className="flex flex-col justify-start border-t border-b border-neutral-400 border-opacity-90 px-4 md:px-8 pt-4 pb-6">
                {AGREEMENTS.map((agreement) => {
                  return (
                    <div
                      key={agreement.value}
                      className="flex items-center mt-4"
                    >
                      <Checkbox
                        id={agreement.value}
                        value={agreement.value}
                        onCheckedChange={(checked) =>
                          onAgreementsChange(checked, agreement.value)
                        }
                        {...register("agreements")}
                      />
                      <Label
                        htmlFor={agreement.value}
                        className="flex ml-4 text-sm text-muted-foreground font-light hover:cursor-pointer"
                      >
                        {agreement.label}.
                      </Label>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-col justify-center items-center border-t border-b border-neutral-400 border-opacity-90">
                <div className="flex justify-center items-center min-h-[11vh] min-w-[20vw] pt-2 pb-0.5 px-3 md:px-2 border-l border-r border-neutral-400 border-opacity-90">
                  <Turnstile
                    key={pathname}
                    siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                    onSuccess={setTurnstileToken}
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <HorizontalBorder />
                <Button
                  type="submit"
                  size="lg"
                  variant="default"
                  className="w-full"
                  disabled={
                    !(
                      !submitting &&
                      agreementsAgreed.length === AGREEMENTS.length &&
                      turnstileToken
                    )
                  }
                >
                  {submitting ? (
                    <div className="flex items-center justify-center">
                      <svg
                        className="animate-spin h-5 w-5 mr-3 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </div>
                  ) : (
                    "Send Inquiry"
                  )}
                </Button>
                <HorizontalBorder />
                <p className="w-full md:max-w-sm font-light text-neutral-600 text-center text-xs leading-snug px-8 md:px-0 mt-6">
                  Your information is safe with us. As an alternative to this
                  form, you can also send us the inquiry at{" "}
                  <Link
                    href={CompanyData.email.link}
                    className="font-medium text-primary underline-offset-4 hover:underline text-xs"
                  >
                    {CompanyData.email.label}
                  </Link>
                  .
                </p>
              </div>
            </form>
          </LayoutLine>
        </div>
        <HorizontalBorder />
      </LayoutLine>
    </>
  );
}

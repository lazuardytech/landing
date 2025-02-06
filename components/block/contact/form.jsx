"use client";

import "@/components/block/contact/phone-number-input-style.css";
import { Button } from "@/components/ui/button";
import HorizontalBorder from "@/components/ui/horizontal-border";
import { Input } from "@/components/ui/input";
import LayoutLine from "@/components/ui/layout-line";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CompanyData } from "@/lib/config";
import { useFormspark } from "@formspark/use-formspark";
import { Turnstile } from "@marsidev/react-turnstile";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import { toast } from "sonner";
import { usePathname } from "next/navigation";
import Script from "next/script";

export default function Form() {
  const pathname = usePathname();
  const [turnstileToken, setTurnstileToken] = useState(null);
  const [phone, setPhone] = useState("");
  const [submit, submitting] = useFormspark({
    formId: process.env.NEXT_PUBLIC_FORMSPARK_FORM_ID,
  });
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      type: "Individual",
      title: "",
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    if (!turnstileToken) {
      toast.warning("Please verify you're human.");
      return;
    }

    try {
      await submit(data);
      toast.success("Message submitted successfully.");
      setPhone("");
      reset();
    } catch (error) {
      console.log(error);
      toast.error("Failed to submit the message.");
    }
  };

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
      />
      <LayoutLine className="md:pt-2">
        <HorizontalBorder className="mt-12 md:mt-16" />
        <div className="flex justify-center items-center w-full">
          <LayoutLine className="md:max-w-xl min-h-[50vh] py-8">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col w-full space-y-8"
            >
              <div className="grid grid-cols-2">
                <div className="flex flex-col justify-center border-t border-b border-r border-neutral-400 border-opacity-90">
                  <Select
                    className="w-full h-full md:text-sm"
                    onValueChange={(value) => setValue("type", value)}
                    defaultValue="Individual"
                    {...register("type", { required: "Type is required" })}
                  >
                    <SelectTrigger className="px-4 md:px-8 transition-colors duration-200 hover:text-white hover:bg-primary/90">
                      <SelectValue placeholder="What are you?" />
                    </SelectTrigger>
                    <SelectContent className="bg-primary text-primary-foreground hover:bg-primary">
                      <SelectItem value="Individual">Individual</SelectItem>
                      <SelectItem value="Small Business">
                        Small Business
                      </SelectItem>
                      <SelectItem value="Enterprise">Enterprise</SelectItem>
                      <SelectItem value="Organization">Organization</SelectItem>
                      <SelectItem value="Institution">Institution</SelectItem>
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
                    id="title"
                    placeholder="Title"
                    className="px-4 md:px-8 py-6"
                    {...register("title")}
                  />
                  {errors.title && (
                    <p className="text-red-500 text-sm px-8 py-2 border-t border-neutral-400 border-opacity-90">
                      {errors.title.message}
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
                      required: "Email address is required",
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
              <div className="flex flex-col justify-center border-t border-b border-neutral-400 border-opacity-90">
                <Textarea
                  id="message"
                  placeholder="The message or question you want to ask *"
                  className="px-4 md:px-8 py-6"
                  {...register("message", { required: "Message is required" })}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm px-8 py-2 border-t border-neutral-400 border-opacity-90">
                    {errors.message.message}
                  </p>
                )}
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
                  disabled={submitting || !turnstileToken}
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
                    "Send Message"
                  )}
                </Button>
                <HorizontalBorder />
                <p className="w-full md:max-w-sm font-light text-neutral-600 text-center text-xs leading-snug px-8 md:px-0 mt-6">
                  Your information is safe with us. As an alternative to this
                  form, you can also reach us at{" "}
                  <Link
                    href={CompanyData.email.link}
                    className="font-medium text-primary underline-offset-4 hover:underline text-xs"
                  >
                    {CompanyData.email.label}
                  </Link>
                  .
                </p>
                <p className="w-full md:max-w-sm font-light text-neutral-600 text-center text-xs leading-snug mt-4">
                  By submitting this form, you agree to our{" "}
                  <Link
                    href="/legal/privacy-policy"
                    className="font-medium text-primary underline-offset-4 hover:underline text-xs"
                  >
                    Privacy Policy
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

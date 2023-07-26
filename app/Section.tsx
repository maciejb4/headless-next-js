"use client";
import { SectionInterface } from "@/app/interface/SectionInterface";
import Image from "next/image";
import { submitData } from "@/app/utils/dataSending";
import { useState } from "react";

interface SectionProps {
  section: SectionInterface;
}
export default function Section({ section }: SectionProps) {
  const [newsletterMessage, setNewsletterMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    try {
      const response = await submitData(event);
      if (response?.message) setNewsletterMessage(response.message);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      }
    }
  }

  return (
    <>
      {section.type === "hero" && (
        <div>
          <div className="flex items-center justify-center md:mx-[172px] md:mt-[127px] md:mb-[152px]">
            <div className="flex flex-col md:flex-row md:justify-between items-center">
              <p className="text-2xl md:text-5xl md:leading-[64px] text-center md:text-left mx-4 md:mr-6 md:ml-0 my-12 md:my-24 font-medium md:basis-1/2">
                {section.text}
              </p>
              <div>
                <Image
                  src={section.img || ""}
                  alt="hero_picture"
                  width={516}
                  height={384}
                  className="md:basis-1/2"
                  sizes="(max-width: 768px) 60vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {section.type === "testimonial" && (
        <div className="bg-testimonial-black">
          <div className="flex flex-col py-8 md:py-32 px-4 md:pl-[172px] md:pr-[280px]">
            <Image
              src="/quotation-mark.svg"
              alt="quotation_mark"
              width={48}
              height={48}
            />
            <p className="md:text-2xl md:leading-10 text-left text-testimonial-white font-normal pt-[68px] pb-24">
              {section.text}
            </p>
            <p className="md:text-2xl md:leading-[29px] text-left text-testimonial-grey font-normal">
              {section.author}
            </p>
          </div>
        </div>
      )}
      {section.type === "newsletter" && (
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col md:pt-32 pb-20 md:pb-[198px] md:w-[624px]">
            <p className="text-xl md:text-[40px] md:leading-[56px] text-center font-medium pt-[68px] pb-16">
              Sign up for Newsletter
            </p>
            <form
              className="flex justify-between h-12 text-sm md:text-base"
              onSubmit={handleSubmit}
            >
              <input
                id="email"
                required
                pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                title="Invalid email address"
                placeholder="Type your email"
                className="bg-testimonial-white rounded-3xl mr-4 basis-2/3 placeholder:text-testimonial-black pl-8"
              />
              <button className="bg-testimonial-purple rounded-3xl basis-1/3 px-2">
                Submit
              </button>
            </form>
            {newsletterMessage && (
              <p className="text-center text-testimonial-green pt-12">
                {newsletterMessage}
              </p>
            )}
            {errorMessage && (
              <p className="text-center text-red-600 pt-12">{errorMessage}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}

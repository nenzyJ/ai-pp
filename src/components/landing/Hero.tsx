import { SignUpButton } from "@clerk/nextjs";
import React from "react";
import { Button } from "../ui/button";
import { CalendarIcon, MicIcon, StarIcon } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[75vh] md:min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* GRID BACKGROUND */}
      <div className="absolute  inset-0 bg-gradient-to-br from-background via-muted/5 to-primary/5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20"></div>
      </div>
      {/*  */}
      <div className="relative z-10 w-full px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT CONSTENT */}
            <div className="space-y-10">
              <div className="space-y-6">
                {/* BADGE */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10  to-primary/5 rounded full border border-primary/20 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-primary">
                    AI-Powered Dental Assistant
                  </span>
                </div>
                {/* MAIN HEADING */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                  <span className="-text-transparent">Your dental</span>
                  <br />
                  <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    questions
                  </span>
                  <br />
                  <span className="">answered instantly</span>
                </h1>
                {/* SUBTITLE */}
                <p className="text-lg text-muted-foreground leading-relaxed max-w-xl font-medium">
                  Chat with our AI dental assistant for instant advice, book
                  smart appointments, and get personalized care recommendations.
                  Available 24/7.
                </p>
              </div>
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <SignUpButton mode="modal">
                  <Button size={"lg"}>
                    <MicIcon className="mr-2 size-5" />
                    Try voice agent
                  </Button>
                </SignUpButton>

                <SignUpButton mode="modal">
                  <Button size={"lg"} variant={"outline"}>
                    <CalendarIcon className="mr-2 size-5" />
                    Book appointment
                  </Button>
                </SignUpButton>
              </div>
              {/* USER TESTIMONIALS */}
              <div className="pt-8">
                <div className=" flex items-center gap-6">
                  {/* USER AVATARS */}
                  <div className="flex -space-x-3">
                    {/* use an array so we don't render Image with empty src */}
                    {[
                      { src: "/avatar5.png", alt: "Jessica Davis" },
                      { src: "/avatar2.png", alt: "Sam Miller" },
                      { src: "/avatar1.png", alt: "Anna Lopez" },
                      { src: "/avatar3.png", alt: "Mike Rodriguez" },
                      { src: "/avatar4.png", alt: "Katie Lee" },
                    ].map((a, idx) =>
                      a.src && a.src.trim() ? (
                        <Image
                          key={idx}
                          src={a.src}
                          alt={a.alt}
                          width={48}
                          height={48}
                          className="w-12 h-12 rounded-full object-cover ring-4 ring-background"
                        />
                      ) : (
                        <div
                          key={idx}
                          aria-hidden
                          className="w-12 h-12 rounded-full bg-muted/20 ring-4 ring-background flex items-center justify-center text-sm font-medium text-foreground"
                        >
                          {a.alt
                            .split(" ")
                            .map((n) => n[0])
                            .slice(0, 2)
                            .join("")}
                        </div>
                      )
                    )}
                  </div>
                  {/* RATING AND STARS */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <StarIcon
                            key={star}
                            className="h-4 w-4  fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>
                      <span className="text-sm font-bold text-foreground">
                        4.9/5
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Trusted by {""}
                      <span className="text-sm font-bold text-foreground">
                        1,200+ patients
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* RIGHT SIDE - hidden on small screens */}
            <div className="hidden md:flex relative lg:pl-8 items-center justify-center">
              {/* GRADIENT ORBS */}
              <div className="absolute top-4 left-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl rotate-45 blur-xl"></div>
              <div className="absolute bottom-6 right-6 w-32 h-32 bg-gradient-to-br from-primary/15 to-primary/5 rounded-full blur-2xl"></div>

              {/* Constrained wrapper so the image can't exceed viewport height */}
              <div className="relative w-full max-w-[420px] md:max-w-[680px] h-[28vh] sm:h-[40vh] md:h-[55vh] lg:h-[65vh]">
                
                <Image
                  src={"/herog.png"}
                  alt="DentSpace AI"
                  fill
                  sizes="(min-width:1024px) 50vw, 100vw"
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

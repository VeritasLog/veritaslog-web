"use client";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import Hero from "@/components/menus/home/hero";
import Features from "@/components/menus/home/features";
import HowWorks from "@/components/menus/home/how-works";
import Demo from "@/components/menus/home/demo";
import Testimonial from "@/components/menus/home/testimonial";
import Architecture from "@/components/menus/home/architecture";
import Faq from "@/components/menus/home/faq";
import Cta from "@/components/menus/home/cta";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

export default function TravelKittyLandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-background text-foreground overflow-x-hidden !cursor-none">
      <SmoothCursor />
      <Navbar />
      <Hero />
      <Features />
      <HowWorks />
      <Demo />
      <Testimonial />
      <Architecture />
      <Faq />
      <Cta />
      <Footer />
    </main>
  );
}

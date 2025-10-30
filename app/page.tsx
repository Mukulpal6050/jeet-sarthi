import Image from "next/image";
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import WhyChoose from "@/components/WhyChoose";
import ExperienceSection from "@/components/ExperienceSection";
import MentorshipSection from "@/components/MentorshipSection";
import BenefitsSection from "@/components/Benifits";
import SuccessStories from "@/components/SuccessStories";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Navbar />
      <Hero />
      <WhyChoose />
      <ExperienceSection />
      <MentorshipSection />
      <BenefitsSection  />
      <SuccessStories />
      <ContactForm />
    </div>
  );
}

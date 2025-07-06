import HeroSection from "@/Components/heroSection/heroSection";
import Navbar from "@/Components/Navbar/navbar";
import Stack from "@/Components/TechStack/stack";


export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Stack />
    </div>
  );
}

import Hero from "@/components/hero";
import HomeFeaturedWork from "@/components/home-featured-work";
import HomeAboutTeaser from "@/components/home-about-teaser";
import ImageBand from "@/components/image-band";
import HomeServicesTeaser from "@/components/home-services-teaser";
import Testimonials from "@/components/testimonials";
import HomeCta from "@/components/home-cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <HomeFeaturedWork />
      <HomeAboutTeaser />
      <ImageBand />
      <HomeServicesTeaser />
      <Testimonials />
      <HomeCta />
    </main>
  );
}

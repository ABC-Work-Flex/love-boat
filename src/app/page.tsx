import SiteHeader from "../components/layout/SiteHeader";
import SiteFooter from "../components/layout/SiteFooter";
import HeroSection from "../components/sections/HeroSection";
import GallerySection from "../components/sections/GallerySection";

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <GallerySection />
      </main>
      <SiteFooter />
    </>
  );
}

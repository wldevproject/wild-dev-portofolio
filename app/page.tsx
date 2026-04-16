import { HomePage } from "@/app/features/home/components/home-page";
import { Footer } from "@/app/features/home/components/footer";
import { SiteLanguageProvider } from "@/app/features/home/context/site-language-context";

export default function Home() {
  return (
    <SiteLanguageProvider>
      <HomePage />
      <Footer />
    </SiteLanguageProvider>
  );
}

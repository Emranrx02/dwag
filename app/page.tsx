import AboutUs from "@/components/AboutUs/AboutUs";
import CommitMent from "@/components/Commitment/CommitMent";
import Footer from "@/components/Footer/Footer";
import HeaderSection from "@/components/Header/HeaderSection";

export default function Home() {
  return (
    <main className="">
      <HeaderSection />
      <AboutUs />
      <CommitMent />
      <Footer />
    </main>
  );
}

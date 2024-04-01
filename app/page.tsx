import dynamic from "next/dynamic";
import AboutUs from "@/components/AboutUs/AboutUs";
import CommitMent from "@/components/Commitment/CommitMent";
import Footer from "@/components/Footer/Footer";
import HeaderSection from "@/components/Header/HeaderSection";

const NoSSRMiloPfp = dynamic(
  () => import("@/components/KonvaSection/KonvaSection"),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <main className="">
      <HeaderSection />
      <AboutUs />
      <CommitMent />
      <NoSSRMiloPfp />
      <Footer />
    </main>
  );
}

import ContentLayout from "@/utils/Layouts/ContentLayout";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="bg-gray-900 py-12 px-5 ">
      <ContentLayout>
        <div className="flex gap-5 text-2xl flex-col items-center">
          <Image src={"/water.png"} width={500} height={500} alt="about-us" />
          <p className="text-6xl text-yellow font-semibold">about us</p>
          <p className="text-yellow">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
            dolore sequi iusto, placeat, ducimus voluptatibus illo nostrum ut
            vitae voluptatem doloribus, aperiam sed harum! Ratione officiis
            deleniti blanditiis facere. Neque. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Sint dolore sequi iusto, placeat,
            ducimus voluptatibus illo nostrum ut vitae voluptatem doloribus,
            aperiam sed harum! Ratione officiis deleniti blanditiis facere.
            Neque.
          </p>
        </div>
      </ContentLayout>
    </section>
  );
}

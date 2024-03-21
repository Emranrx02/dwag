import ContentLayout from "@/utils/Layouts/ContentLayout";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section id="about-us" className="bg-gray-900 py-12  ">
      <ContentLayout>
        <div className="flex gap-5 text-2xl flex-col items-center">
          <Image
            src={"/water.png"}
            className="scale-[1.005] mb-24"
            quality={100}
            width={500}
            height={500}
            alt="about-us"
          />
          <p className="text-6xl px-5 text-yellow font-semibold">about us</p>
          <p className="text-yellow px-5">
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

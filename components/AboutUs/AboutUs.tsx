import ContentLayout from "@/utils/Layouts/ContentLayout";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section id="about-us" className="bg-gray-900 w-full pb-12  ">
      <ContentLayout>
        <div className="flex gap-5 text-2xl flex-col items-center">
          <Image
            src={"/newDog-1.png"}
            className=" mb-10"
            quality={100}
            priority
            width={650}
            height={500}
            alt="about-us"
          />
          <p className=" text-5xl sm:text-4xl px-5 text-yellow font-semibold">
            I’m <span className="font-sans">$</span>Woof a degenerate gambler on
            Solana
          </p>
          <p className="text-yellow mb-10 px-5">
            Crypto is for everyone, yet many people miss out.
            {/* Base was designed
            to solve this problem, aspiring to onboard over 1 billion new People
            into the Base<span className="font-sans">/</span>Crypto ecosystem.
            <span className="font-sans">$</span>Woof wants to be part on this
            journey */}
            <br />
            <br />
            Successful meme coins share a common thread a community that
            believes in our potential and collaborates to grow together
            <br />
            <br />
            Are you ready to join Woof on this journey?
          </p>
        </div>
      </ContentLayout>
    </section>
  );
}

import ContentLayout from "@/utils/Layouts/ContentLayout";
import Image from "next/image";

export default function NewCommitment() {
  return (
    <div id="commitment" className="w-full bg-[#E5A220]">
      <ContentLayout>
        <div className="w-full flex flex-col justify-center items-center">
          {/* <h4 className="text-5xl">our commitment</h4> */}
          <div className="flex flex-wrap gap-5 pt-24">
            {/* <div className="text-center  text-2xl px-5 py-1.5 bg-white text-yellow rounded-full relative z-20 -mt-3">
              community support
            </div>
            <div className="text-center  text-2xl px-5 py-1.5 bg-white text-yellow rounded-full relative z-20 -mt-3">
              no taxes
            </div>
            <div className="text-center  text-2xl px-5 py-1.5 bg-white text-yellow rounded-full relative z-20 -mt-3">
              contract renounced
            </div>
            <div className="text-center  text-2xl px-5 py-1.5 bg-white text-yellow rounded-full relative z-20 -mt-3">
              Liqudity Locked
            </div> */}
            <div className="text-4xl">
              ROADMAP <span className="font-sans">(</span>coming soon 👀{" "}
              <span className="font-sans">)</span>
            </div>
          </div>
          <Image
            src={"/newDog-4.png"}
            width={300}
            height={100}
            className="max-w-lg w-full"
            alt="new Dog"
          />
        </div>
      </ContentLayout>
    </div>
  );
}

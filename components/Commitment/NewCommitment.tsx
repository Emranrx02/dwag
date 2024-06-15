import ContentLayout from "@/utils/Layouts/ContentLayout";
import Image from "next/image";

export default function NewCommitment() {
  return (
    <div className="w-full bg-[#E5A220]">
      <ContentLayout>
        <div className="w-full flex flex-col justify-center items-center">
          <h4 className="text-5xl">our commitment</h4>
          <Image
            src={"/newDog-3.jpg"}
            width={1000}
            height={100}
            alt="new Dog"
          />
          <div className="flex gap-5 py-24">
            <div className="text-center  text-2xl px-5 py-1.5 bg-white text-yellow rounded-full relative z-20 -mt-3">
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
            </div>
          </div>
        </div>
      </ContentLayout>
    </div>
  );
}
import ContentLayout from "@/utils/Layouts/ContentLayout";
import Image from "next/image";

export default function CommitMent() {
  return (
    <section id="commitment" className="bg-yellow py-20">
      <ContentLayout>
        <div className="flex flex-col gap-12 text-white font-semibold  items-center">
          <h4 className="text-5xl">our commitment</h4>
          <div className="flex flex-wrap justify-center gap-16">
            <div className="flex flex-col items-center">
              <div className="border-8 max-w-fit border-white rounded-2xl">
                <Image
                  src={"/strong-dog.png"}
                  className="w-[18rem]"
                  height={600}
                  width={600}
                  alt="500"
                  priority
                />
              </div>
              <div className="text-center w-[110%] text-2xl px-5 py-1.5 bg-white text-yellow rounded-full relative z-20 -mt-3">
                community support
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="border-8 max-w-fit border-white rounded-2xl">
                <Image
                  src={"/no-taxes.png"}
                  className="w-[18rem]"
                  height={600}
                  width={600}
                  alt="500"
                  priority
                />
              </div>
              <div className="text-center w-[110%] text-2xl px-5 py-1.5 bg-white text-yellow rounded-full relative z-20 -mt-3">
                no taxes
              </div>
            </div>
          </div>
          <div className="flex justify-center flex-wrap gap-16">
            <div className="flex flex-col items-center">
              <div className="border-8 max-w-fit border-white rounded-2xl">
                <Image
                  src={"/dog-6.png"}
                  className="w-[18rem] translate-x-7 -translate-y-5 scale-105"
                  height={600}
                  width={600}
                  alt="500"
                  priority
                />
              </div>
              <div className="text-center w-[110%] text-2xl px-5 py-1.5 bg-white text-yellow rounded-full relative z-20 -mt-3">
                contract renounced
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="border-8 max-w-fit border-white rounded-2xl">
                <Image
                  src={"/dog-4.png"}
                  className="w-[18rem]"
                  height={600}
                  width={600}
                  alt="500"
                  priority
                />
              </div>
              <div className="text-center w-[110%] text-2xl px-5 py-1.5 bg-white text-yellow rounded-full relative z-20 -mt-3">
                Liqudity Locked
              </div>
            </div>
          </div>
        </div>
      </ContentLayout>
    </section>
  );
}

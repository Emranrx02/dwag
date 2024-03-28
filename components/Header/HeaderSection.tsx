import ContentLayout from "@/utils/Layouts/ContentLayout";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa6";
import Link from "next/link";

export default function HeaderSection() {
  return (
    <div id="home" className="bg-[#E5A220]   relative w-full">
      <div className="pt-[16%] px-8 relative z-10   xl:gap-10 text-xl sm:text-2xl flex-col xl:flex-row flex items-center">
        <Image
          src={"/dog-2.png"}
          width={1920}
          className="xl:w-[50%]  w-full xl:order-1 order-2 z-0"
          quality={100}
          height={1080}
          alt="water dog"
          priority
        />
        <div className="text-white w-full xl:w-[50%] xl:order-2 order-1 relative z-10 mt-20 xl:mt-0 xl:mb-24 font-semibold">
          <p>I’m Milo a degenerate gambler on the Base network</p>
          <h1 className=" text-8xl sm:text-[10rem] py-6 sm:py-12">
            <span className="font-sans">$</span>Milo
          </h1>
          <div className="flex items-center gap-5 text-white  text-7xl">
            <Link target="_blank" href={"https://twitter.com/basemilo"}>
              <FaXTwitter className="border-[8px] border-white p-2 rounded-full " />
            </Link>
            <Link target="_blank" href={"https://t.me/MiloBase"}>
              <FaTelegramPlane className="border-[8px] border-white p-2 rounded-full " />
            </Link>
            <Link
              target="_blank"
              href={
                "https://www.dextools.io/app/en/base/pair-explorer/0x51eb872bc68137785abbd5586867cf00fa38cfa6?t=1711668724895"
              }
            >
              <FaChartLine className="border-[8px] border-white p-2 rounded-full " />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

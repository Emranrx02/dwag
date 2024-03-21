import ContentLayout from "@/utils/Layouts/ContentLayout";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa6";

export default function HeaderSection() {
  return (
    <div className="bg-[#E5A220]   relative w-full">
      <div className="pt-[16%] px-8 relative z-10   xl:gap-10 text-xl sm:text-2xl flex-col xl:flex-row flex items-center">
        <Image
          src={"/dog-2.png"}
          width={500}
          className="xl:w-[50%]  w-full xl:order-1 order-2 z-0  "
          height={500}
          alt="water dog"
        />
        <div className="text-white w-full xl:w-[50%] xl:order-2 order-1 relative z-10 mt-20 xl:mt-0 xl:mb-28 font-semibold">
          <p>Normal Dog by Day Degen At night</p>
          <h1 className=" text-8xl sm:text-[10rem] sm:py-20">
            <span className="font-sans">$</span>Milo
          </h1>
          <div className="flex gap-5 text-white mt-7 text-7xl">
            <FaXTwitter className="border-[8px] border-white p-2 rounded-full " />
            <FaTelegramPlane className="border-[8px] border-white p-2 rounded-full " />
            <FaChartLine className="border-[8px] border-white p-2 rounded-full " />
          </div>
        </div>
      </div>
    </div>
  );
}

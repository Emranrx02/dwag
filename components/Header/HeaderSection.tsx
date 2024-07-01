import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import Link from "next/link";

export default function HeaderSection() {
  return (
    <div id="home" className="bg-[#E5A220]   relative w-full">
      <div className="pt-[2%] px-8 relative z-10   xl:gap-10 text-xl sm:text-2xl flex-col xl:flex-row flex items-center">
        <Image
          src={"/newDog-3.jpg"}
          width={1920}
          className="xl:w-[50%]  w-full xl:order-1 order-2 z-0"
          quality={100}
          height={1080}
          alt="water dog"
          priority
        />
        <div className="text-white w-full xl:w-[50%] xl:order-2 order-1 relative z-10 mt-40 xl:mt-0 xl:mb-24 font-semibold">
          <p className="line-through decoration-black decoration-4 inline-block  mb-3 rounded-md">
            The Wolf of Wall Street
          </p>
          <p className="text-4xl">
            The <span className="font-sans">$</span>Woof of Wall Street
          </p>
          <h1 className=" text-8xl sm:text-[10rem] py-6 sm:py-12">
            <span className="font-sans">$</span>Woof
          </h1>
          <div className="flex items-center gap-5 text-white  text-7xl">
            <Link target="_blank" href={"#"}>
              <FaXTwitter className="border-[8px] border-white p-2 rounded-full " />
            </Link>
            <Link target="_blank" href={"#"}>
              <FaTelegramPlane className="border-[8px] border-white p-2 rounded-full " />
            </Link>
            {/* <Link
              target="_blank"
              href={
                "https://dexscreener.com/base/0xfd85ba296b9b71040706250e3ead3a2e387bffd6"
              }
            >
              <FaChartLine className="border-[8px] border-white p-2 rounded-full " />
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}

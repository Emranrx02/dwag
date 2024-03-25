import ContentLayout from "@/utils/Layouts/ContentLayout";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer
      id="contract"
      className="bg-gray-900 relative pt-56 pb-24 flex justify-center"
    >
      <ContentLayout>
        <div className="flex flex-col items-center">
          <div className="flex sm:flex-row flex-col items-center gap-8">
            <div className="flex flex-col sm:flex-row gap-5 text-yellow mt-7 text-7xl">
              <Link
                target="_blank"
                href={
                  "https://dexscreener.com/base/0x51eb872bc68137785abbd5586867cf00fa38cfa6"
                }
                className="bg-yellow order-2 hover:scale-110  uppercase px-3 py-2 text-xl md:text-4xl text-white rotate-6 border-[4px] border-black"
              >
                Buy Milo
              </Link>
              <div className="flex gap-7">
                <Link
                  target="_blank"
                  href={"https://x.com/basemilo"}
                  className="w-16 h-16 hover:scale-110 cursor-pointer -rotate-3 bg-yellow flex items-center justify-center"
                >
                  <FaXTwitter className="text-white p-2" />
                </Link>
                <Link
                  target="_blank"
                  href={"https://t.me/MiloBase"}
                  className="w-16 h-16 rotate-3 hover:scale-110 cursor-pointer bg-yellow flex items-center justify-center"
                >
                  <FaTelegramPlane className="text-white p-2" />
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src={"/dog-5.png"}
                width={500}
                height={500}
                quality={100}
                priority
                alt="dog"
                className="w-[30rem]"
              />
              <div className=" px-3 py-2 rounded-full bg-yellow text-white text-xs sm:text-sm inline-block">
                0x6F10607507afF<span className="font-sans">4</span>
                50b8Cf0A6fa26<span className="font-sans">4</span>1a781889DdfA
              </div>
            </div>
          </div>
        </div>
      </ContentLayout>
    </footer>
  );
}

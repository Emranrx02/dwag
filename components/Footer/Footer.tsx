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
            <div className="flex gap-5 text-yellow mt-7 text-7xl">
              <Link
                target="_blank"
                href={
                  "https://raydium.io/swap/?inputCurrency=sol&outputCurrency=EnH4JEqqzD9gYHkAkBDBy8Tjx9YHhfXHuYQeYjZi1v8g&inputAmount=0.2&fixed=in"
                }
                className="bg-red order-2 hover:scale-110  uppercase px-3 py-2 text-xl md:text-4xl text-white rotate-6 border-[4px] border-black"
              >
                Buy konko
              </Link>
              <Link
                target="_blank"
                href={"http://twitter.com/konko_sol"}
                className="w-16 h-16 hover:scale-110 cursor-pointer -rotate-3 bg-yellow flex items-center justify-center"
              >
                <FaXTwitter className="text-white p-2" />
              </Link>
              <Link
                target="_blank"
                href={"https://t.me/Konkochannel"}
                className="w-16 h-16 rotate-3 hover:scale-110 cursor-pointer bg-yellow flex items-center justify-center"
              >
                <FaTelegramPlane className="text-white p-2" />
              </Link>
            </div>
            <Image
              src={"/dog-5.png"}
              width={500}
              height={500}
              quality={100}
              alt="dog"
              className="w-[30rem]"
            />
          </div>
          <div className="mt-9 px-3 py-2 rounded-full bg-yellow text-white text-xs sm:text-xl md:text-2xl">
            EnH<span className="font-sans font-semibold">4</span>
            JEqqzD9gYHkAkBDBy8Tjx9YHhfXHuYQeYjZi1v8g
          </div>
        </div>
      </ContentLayout>
    </footer>
  );
}

import ContentLayout from "@/utils/Layouts/ContentLayout";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa6";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-gray-900 relative pt-56 pb-24 flex justify-center">
      <ContentLayout>
        <div className="flex flex-col items-center">
          <div className="flex sm:flex-row flex-col items-center gap-8">
            <div className="flex gap-5 text-yellow mt-7 text-7xl">
              <FaXTwitter className="border-[8px] border-yellow p-2 rounded-full " />
              <FaTelegramPlane className="border-[8px] border-yellow p-2 rounded-full " />
              <FaChartLine className="border-[8px] border-yellow p-2 rounded-full " />
            </div>
            <Image
              src={"/dog-5.png"}
              width={500}
              height={500}
              alt="dog"
              className="w-[20rem]"
            />
          </div>
          <div className="mt-9 px-3 py-2 rounded-full bg-yellow text-white text-sm sm:text-xl md:text-2xl">
            EnH<span className="font-sans font-semibold">4</span>
            JEqqzD9gYHkAkBDBy8Tjx9YHhfXHuYQeYjZi1v8g
          </div>
        </div>
      </ContentLayout>
    </footer>
  );
}

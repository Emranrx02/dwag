"use client";
import Image from "next/image";
import { slide as Menu } from "react-burger-menu";

export default function NavBar() {
  const handleClick = (val: string) => {
    document.getElementById(val)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <nav className="w-full  bg-yellow z-40 py-4 border-b border-white fixed">
      <div className=" px-5 max-w-[90rem] mx-auto flex justify-between items-center ">
        <Image
          src={"/water.png"}
          width={150}
          height={150}
          alt="water dog"
          className="w-16 border p-2 h-16 rounded-full"
        />
        <Menu className="z-20" right>
          <p
            onClick={() => handleClick("home")}
            className="menu-item cursor-pointer"
          >
            Home
          </p>
          <p
            onClick={() => handleClick("about-us")}
            className="menu-item cursor-pointer"
          >
            About
          </p>
          <p
            onClick={() => handleClick("commitment")}
            className="menu-item cursor-pointer"
          >
            Our commitment
          </p>
          <p
            onClick={() => handleClick("join")}
            className="menu-item cursor-pointer"
          >
            join us
          </p>
          <p
            onClick={() => handleClick("contract")}
            className="menu-item cursor-pointer"
          >
            contract
          </p>
        </Menu>
      </div>
    </nav>
  );
}

"use client";
import Image from "next/image";
import { slide as Menu } from "react-burger-menu";

export default function NavBar() {
  return (
    <nav className="w-full  bg-yellow z-40 py-4 border-b border-white fixed">
      <div className=" px-5 flex justify-between items-center ">
        <Image
          src={"/water.png"}
          width={150}
          height={150}
          alt="water dog"
          className="w-16 border p-2 h-16 rounded-full"
        />
        <Menu className="z-20" right>
          <p id="home" className="menu-item cursor-pointer">
            Home
          </p>
          <p id="about" className="menu-item cursor-pointer">
            About
          </p>
          <p id="contact" className="menu-item cursor-pointer">
            Our commitment
          </p>
        </Menu>
      </div>
    </nav>
  );
}

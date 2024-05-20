"use client";
import logo from "@/ass/image.png";
import { sideHeaderInfo } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
//   TODO: sidebar not fully responsive
//   TODO: sidebar item name and icon change
//   TODO: onclick  issue

function SideHeader() {
  // showing dropdown  through this useState
  const [showDrop, setShowDrop] = useState();
  const pathname = usePathname();

  return (
    <header className="h-full lg:w-80 w-32 p-8 border-r-2 fixed bg-white text-5xl hidden sm:block">
      <div className="">
        {/* company logo  */}
        <div className="">
          <Image src={logo} alt="" />
        </div>
      </div>
      <div className="flex flex-col gap-5 mt-10 text-lg text-gray-500">
        {sideHeaderInfo.map((e) => (
          <div key={e.id}>
            {/* if there was dropdown show this button  */}
            {/* if there was no dropdown show this link  */}
            {e.links ? (
              <button
                className={`flex justify-between items-center group hover:text-[#EE5953] w-full ${
                  showDrop === e.id ? "text-black" : ""
                }`}
                onClick={() => setShowDrop(e.id)}
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{e.icon}</span>{" "}
                  <p className="hidden lg:flex">{e.name}</p>
                </div>
                {e.links && (
                  <div className={`${showDrop === e.id && "rotate-180"}`}>
                    <IoChevronDown />
                  </div>
                )}
              </button>
            ) : (
              <Link
                href={e.to}
                className="flex items-center gap-3 group hover:text-[#EE5953]"
                onClick={() => setShowDrop(e.id)}
              >
                <span className="text-3xl">{e.icon}</span>
                <p className="hidden lg:flex">{e.name}</p>
              </Link>
            )}
            {/* this is dropdown section  */}
            {showDrop === e.id && (
              <div className="mt-3">
                {e.links?.map((item) => (
                  <Link
                    key={item.id}
                    href={item.to}
                    className={`flex items-center gap-3 px-3 py-2 group hover:text-[#EE5953] hover:bg-gray-200 rounded-lg ${
                      pathname === item.to ? "bg-gray-200 text-[#EE5953]" : ""
                    }`}
                  >
                    <span>{item.icon}</span>{" "}
                    <p className="hidden lg:flex">{item.name}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </header>
  );
}

export default SideHeader;

"use client";
import logo from "@/ass/image.png";
import { sideHeaderInfo } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoChevronDown, IoFilterOutline } from "react-icons/io5";
//   TODO: sidebar not fully responsive
//   TODO: sidebar item name and icon change
//   TODO: onclick  issue

function SideHeader() {
  // showing dropdown  through this useState
  const [showDrop, setShowDrop] = useState();
  // showing mobile device through this useState
  const [navShow, SetNavShow] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/*------ mobile screen show this code start ------- */}
      <div
        className={`${
          navShow ? "w-full" : "w-0"
        } h-full absolute z-10 top-0 left-0 bg-[#111] overflow-x-hidden transition-transform pt-10 text-center`}
      >
        <a
          href="javascript:void(0)"
          className="absolute top-0 right-5 text-4xl ml-10 block text-[#818181] hover:text-[#f1f1f1]"
          onClick={() => SetNavShow(false)}
        >
          &times;
        </a>
        {sideHeaderInfo.map((e, i) => (
          <Link
            className="p-2 text-2xl text-[#818181] block hover:text-[#f1f1f1]"
            href={e.to}
            key={i}
            onClick={() => SetNavShow(false)}
          >
            {e.name}
          </Link>
        ))}
      </div>
      {/*------ mobile screen show this code end ------- */}
      {/*------ mobile screen header start ------- */}
      <div className="py-3 border-b bg-white px-5 flex justify-between sm:hidden">
        <div className="">
          <Image src={logo} alt="" />
        </div>
          <button onClick={() => SetNavShow(true)}>
            <IoFilterOutline />
          </button>
      </div>
      {/*------ mobile screen header end ------- */}

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
              {/* if there was no dropdown show this link  */}
              <Link
                href={e.to}
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
              </Link>
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
    </>
  );
}

export default SideHeader;

"use client";
import React from "react";
import HeadNav from "@/components/layout/headNav";
import SideNav from "@/components/layout/sideNav";
import { FiMenu, FiX } from "react-icons/fi";

export default function Dashboard({ children }: { children: React.ReactNode }) {
  const [menu, setMenu] = React.useState<boolean>(false);
  const toggle = () => {
    setMenu(() => !menu);
  };
  return (
    <div className="flex w-full items-start justify-between overflow-x-hidden relative">
      <button
        className={` md:hidden flex absolute duration-300 rounded-md  top-8 ${
          menu ? "left-[80%] bg-red-100 text-red-500" : " text-slate-800 left-4"
        } z-50`}
        onClick={() => toggle()}
      >
        {menu ? <FiX size={25} /> : <FiMenu size={25} />}
      </button>
      <div
        className={` ${
          menu ? "transform-x-0" : "md:translate-x-0 -translate-x-[100%]"
        } h-full  fixed top-0 left-0 w-[200px] duration-300`}
      >
      <SideNav/>
      </div>
      <main className="flex-1">{children}</main>
    </div>
  );
}

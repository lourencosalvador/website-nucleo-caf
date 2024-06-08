"use client";
import Image from "next/image";
import background from "@/../public/background.svg";
import background_2 from "@/../public/Glass Pattern_1.svg_1.svg";

import { Header } from "./components/header/header";
import { About } from "./components/about";
import { Pilares } from "./components/pilares";
import { Power } from "./components/power";

export default function Home() {
  return (
    <div className="size-screen bg-[#000000] overflow-x-hidden">
      <main className="w-screen relative h-full ">
        <Image src={background} className="w-full h-auto -z-10" alt="..." />
        <Header />
      </main>

      <div className="w-full pt-[163px] h-screen bg-[#000000]">
        <About />
      </div>

      <div className="w-full relative  h-screen bg-[#000000] flex flex-col gap-[142px] mb-[200px]">
        <Pilares />
      </div>

      <div className="w-full h-[60rem] bg-[#000000]">
        <Power />
      </div>
      <div className="w-full relative  h-[155.625rem] bg-[#000000]">
        <Image 
        src={background_2} className="size-full -z-10" alt="..."
        />
      </div>
    </div>
  );
}

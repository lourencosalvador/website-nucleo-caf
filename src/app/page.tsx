"use client";
import Image from "next/image";
import background from "@/../public/background.svg";
import { Header } from "./components/header/header";
import { About } from "./components/about";
import { Pilares } from "./components/pilares";
import { Power } from "./components/power";
import { Soluction } from "./components/soluction";
import { Time } from "./components/teame";
import destaque from "@/../public/destaque.svg";

export default function Home() {
  return (
    <div className="size-screen bg-[#000000] overflow-x-hidden">
      <main className="w-screen relative h-full ">
        <Image src={background} className="w-full h-auto -z-10" alt="..." />
        <Header />
      </main>

      <section className="w-full pt-[163px] h-screen bg-[#000000]">
        <About />
      </section>

      <section className="w-full relative  h-screen bg-[#000000] flex flex-col gap-[142px] mb-[200px]">
        <Pilares />
      </section>

      <section className="w-full h-[60rem] bg-[#000000]">
        <Power />
      </section>
      <section className="w-full relative  h-[110.625rem] bg-[#000000] ">
        <Soluction />
      </section>
      <section className="w-full relative  h-[155.625rem] bg-[#000000] ">
        <Time />
      </section>

      <section className="w-full relative  h-screen bg-[#000000]">
        <div className="w-full h-auto flex justify-between max-w-[79.25rem] mx-auto px-3 items-center  ">
          <div className="relative size-auto ">
            <h1 className="bebas text-[73px] w-[750px] font-medium text-[#FFFFFF] text-left ">
              Cansado de ficar para trás no mundo em constante evolução da
              tecnologia?,{" "}
              <span className="text-[#00FF47]">confira o nosso blog.</span>
            </h1>
            <Image
              src={destaque}
              alt="..."
              className="absolute bottom-0 right-0 best"
            />
          </div>

          <div className="w-[177px] h-[52px] rounded-full bg-[#00FF47] font-medium flex justify-center items-center text-[14px] text-[#1C1C1C] gap-3">
            <p>ir para o blog</p>
          </div>
        </div>
      </section>
    </div>
  );
}

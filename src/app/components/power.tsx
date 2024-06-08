import { motion } from "framer-motion";
import destaque from "@/../public/destaque.svg";
import arrowcircle from "@/../public/arrow_circle_rigth.svg";
import Image from "next/image";
import { animeRotate } from "../animation/animate";


export function Power(){
    return(
        <>
         <h1 className="bebas text-[124px] mb-[0.7px] l font-medium text-[#FFFFFF] text-center ">
          nossa fórmula para o <span className="text-[#414141]">sucesso</span>
        </h1>
        <div className="w-full h-auto relative mb-32">
          <Image src={arrowcircle} alt=".." className="absolute right-0 " />
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-3 mb-[62.44px] w-full relative">
            <h1 className="text-[92px] text-slate-100 font-bold">Impulso</h1>
            <div className="size-auto flex justify-center items-center">
              <div className="bg-[#00FF47] z-10 shadow-2xl flex justify-center items-center shadow-green-500/50 w-[514px] h-[134px] rounded-full">
                <p className="text-[92px] font-bold">Poder</p>
              </div>
              <motion.div
                {...animeRotate}
                transition={{ duration: 1 }}
                className="-z-0 absolute bg-[#1C1C1C] shadow-2xl flex justify-center items-center shadow-green-500/50 w-[514px] h-[134px] rounded-full"
              />
            </div>
            <h1 className="text-[92px] text-slate-100 font-bold">Inovação</h1>
            <Image
              className="absolute left-72 bottom-0"
              src={destaque}
              alt="..."
            />
          </div>

          <div className="text-[14px] font-light text-[#AEABAB] text-center w-[40%] leading-[29px]">
            <p>
              O Núcleo Tecnológico do CAF, também conhecido como Núcleo de
              Jovens Inventores/ <br /> Inovadores do CAF, é um grupo acadêmico sem fins
              lucrativos que reúne estudantes, professores e coordenadores
              apaixonados por tecnologia e inovação.
            </p>
          </div>
        </div>
        </>
    )
}
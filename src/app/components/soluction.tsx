import destaque from "@/../public/destaque.svg";
import background_2 from "@/../public/Glass Pattern_1.svg_1.svg";
import Image from "next/image";
import { dataNavBar, dataNavBarSoluction } from "../data";
import { List } from "./generic-list/list";
import {motion} from "framer-motion"
import { animePropsImgGalery } from "../animation/animate";

export function Soluction() {
  return (
    <>
      <Image src={background_2} className="size-full -z-10" alt="..." />
      <div className="absolute  w-full h-auto top-56 left-0">
        <div className=" w-full h-auto flex justify-between px-[112px] items-center mb-[92px]">
          <div className="flex relative  size-auto ">
            <h1 className="bebas text-[73px] mb-[0.7px] w-[600px] font-medium text-[#FFFFFF] text-left ">
              descubra a excelência das nossas soluções
            </h1>
            <Image
              src={destaque}
              alt="..."
              className="absolute bottom-0 right-0 best"
            />
          </div>
          <div className="w-auto h-auto">
            <p className="text-[14px] text-[#AEABAB] text-left leading-[29px] w-[387px]">
              O Núcleo Tecnológico do CAF, também conhecido como Núcleo de
              Jovens Inventores/Inovadores do CAF, é um grupo acadêmico.
            </p>
          </div>
        </div>

        <div className="w-full h-auto flex justify-center items-center gap-3">
          <div className="size-[51px] bg-[#0B0B0B] rounded-[12px] flex justify-center items-center hover:cursor-pointer duration-500 ease-in hover:bg-zinc-800">
            <p className="text-[16px] text-[#FFFFFF] font-semibold">All</p>
          </div>

          <div className="px-[16px] py-[4px] bg-[#0B0B0B] rounded-[12px] flex justify-center items-center">
          <List<dataNavBar>
          items={dataNavBarSoluction}
          classeName=" lg:flex hidden gap-3 justify-center  items-center"
        >
          {({ item }) => (
            <motion.div
              {...animePropsImgGalery}
              transition={{ duration: 0.5, delay: item.id }}
            >
              <div className={`size-auto px-3 py-2 flex gap-[5px] rounded-[8px] hover:cursor-pointer ${item.name == "Ferramentas" && "activo"}`}>
                <p className="text-[16px] text-[#FFFF] font-semibold">{item.name}</p>
                <p id="total" className="text-[12px] text-[#FFFF] font-light">{item.total}</p>
              </div>
            </motion.div>
          )}
        </List>
          </div>
        </div>
      </div>
    </>
  );
}

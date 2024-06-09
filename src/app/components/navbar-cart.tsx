import { motion } from "framer-motion";
import { animePropsImgGalery } from "../animation/animate";
import { dataNavBar, dataNavBarSoluction } from "../data";
import { List } from "./generic-list/list";



export function NavBarCart({ data }: { data: dataNavBar[] }){
    return(
        <>
         <div className="w-full h-auto flex justify-center items-center gap-3 mb-[82px]">
          <div className="size-[51px] bg-[#0B0B0B] rounded-[12px] flex justify-center items-center hover:cursor-pointer duration-500 ease-in hover:bg-zinc-800">
            <p className="text-[16px] text-[#FFFFFF] font-semibold">All</p>
          </div>

          <div className="px-[16px] py-[4px] bg-[#0B0B0B] rounded-[12px] flex justify-center items-center ">
            <List<dataNavBar>
              items={data}
              classeName=" lg:flex hidden gap-3 justify-center  items-center"
            >
              {({ item }) => (
                <motion.div
                  {...animePropsImgGalery}
                  transition={{ duration: 0.5, delay: item.id }}
                >
                  <div
                    className={`size-auto px-3 py-2 flex gap-[5px] rounded-[8px] hover:cursor-pointer ${
                      item.total == 22 && "activo"
                    }`}
                  >
                    <p className="text-[16px] text-[#FFFF] font-semibold">
                      {item.name}
                    </p>
                    <p
                      id="total"
                      className="text-[12px]  text-[#FFFF] font-light"
                    >
                      {item.total}
                    </p>
                  </div>
                </motion.div>
              )}
            </List>
          </div>
        </div>
        </>
    )
}
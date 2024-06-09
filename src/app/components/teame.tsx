import Image from "next/image";
import arrowcircle from "@/../public/arrow_circle_rigth.svg";
import { NavBarCart } from "./navbar-cart";
import destaque from "@/../public/destaque.svg";
import { GalleryItem, dataGalleryTeame, dataNavBarTime } from "../data";
import { List } from "./generic-list/list";
import { animePropsImgGalery } from "../animation/animate";
import { motion } from "framer-motion";

export function Time() {
  return (
    <div className="absolute  w-full h-auto top-0 left-0 pt-[200px]">
      <div className="w-full h-auto flex justify-center items-center">
        <h1 className="bebas text-[124px] mb-[0.7px] font-medium text-[#FFFFFF] text-left ">
          conheça a nossa <span className="text-[#414141]">equipa</span>
        </h1>
      </div>
      <div className="w-full h-auto relative mb-32">
        <Image src={arrowcircle} alt=".." className="absolute right-0 " />
      </div>
      <div className="w-full px-[112px] relative  h-auto flex  gap-10 justify-center items-center">
        <Image src={destaque} alt="..." className="mt-[50px] best" />
        <NavBarCart data={dataNavBarTime} />
      </div>
      <HorizontalScrllCarousel />
    </div>
  );
}


const HorizontalScrllCarousel = () => {



  return(
    <div className="w-full h-auto  flex justify-center items-center">
          <List<GalleryItem>
            items={dataGalleryTeame}
            classeName="grid grid-cols-4 gap-2  w-full h-auto"
          >
            {({ item }) => (
              <motion.div {...animePropsImgGalery} transition={{ duration: 1 }}>
                <div className="w-[280px] h-[354px] rounded-[12px] overflow-hidden">
                <Image src={item} alt="Gallery image"  className="size-auto object-cover" />
                </div>
              </motion.div>
            )}
          </List>
        </div> 
  )
}
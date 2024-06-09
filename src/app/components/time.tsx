import Image from "next/image";
import arrowcircle from "@/../public/arrow_circle_rigth.svg";
import { NavBarCart } from "./navbar-cart";
import destaque from "@/../public/destaque.svg";
import { dataNavBarTime } from "../data";

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
      <div className="w-full px-[112px] relative  h-auto flex justify-center items-center">
      <Image
          src={destaque}
          alt="..."
          className="mt-[50px] best"
        />
        <NavBarCart data={dataNavBarTime}/>
        
      </div>
    </div>
  );
}

import Image, { StaticImageData } from "next/image";
import arrow from "@/../public/arrow-green-about.svg"
export interface cartProps {
  id?: number,
  image: StaticImageData;
  title: string;
  descripition: string;
}

export function Cart({ image, title, descripition }: cartProps) {
  return (
    <div className="size-auto flex flex-col">
      <Image src={image} alt="..." className="mb-[42px]" />
      <h1 className="text-[42px] bebas text-[#00FF47] font-normal mb-[12px]">{title}</h1>
      <h3 className="text-[14px] text-[#AEABAB] font-normal w-[290px] mb-[42px]">{descripition}</h3>
   <div className="size-auto flex gap-2">
   <p className="text-[12px] text-[#00FF47] font-medium">Ver mais detalhes</p>
   <Image
     src={arrow}
     alt="... "
   />
   </div>
    </div>
  );
}

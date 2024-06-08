import { List } from "./generic-list/list";
import { Cart, cartProps } from "./cart-caracter/cart";
import { dataCart } from "./cart-caracter/utils";
import Image from "next/image";
import destaque from "@/../public/destaque.svg";

import { motion } from "framer-motion";
import arrowcircle from "@/../public/arrow_circle.svg";
import { animePropsCard } from "../animation/animate";

export function Pilares() {
  return (
    <>
      <div className="w-full  h-auto flex justify-center items-center">
        <div className="w-auto relative h-auto ">
          <h1 className="bebas text-[73px] w-[835px] mb-[0.7px] l font-medium text-[#FFFFFF] text-center leading-[72px]">
            Nossa jornada é guiada por três pilares fundamentais
          </h1>
          <Image
            src={destaque}
            alt="rabisco"
            className="absolute left-[735px]  bottom-0 best"
          />
        </div>
      </div>

      <div>
        <List<cartProps>
          items={dataCart}
          classeName=" lg:flex hidden gap-[62px] justify-center  items-center"
        >
          {({ item }) => (
            <motion.div
              {...animePropsCard}
              transition={{ duration: 0.5, delay: item.id }}
            >
              <Cart
                image={item.image}
                title={item.title}
                descripition={item.descripition}
              />
            </motion.div>
          )}
        </List>
      </div>

      <Image src={arrowcircle} alt=".." className="absolute left-0 bottom-0" />
    </>
  );
}

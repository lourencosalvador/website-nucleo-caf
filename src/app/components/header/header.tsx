import { GridContainer } from "../layout/grid";
import logo from "@/../public/Logo.svg"
import arrow from "@/../public/arrow.svg"
import Image from "next/image";
import { List } from "../generic-list/list";
import { HeaderLinks } from "./types";
import { HeaderLinksData } from "./utils/data";
import { Button } from "../layout/button";
import { Conter } from "../conter";



export function Header() {
    return (
        <>
            <div className='lg:flex flex-col hidden w-full absolute justify-center items-center h-auto py-[26px] top-0 '>
                <GridContainer className="mb-[77.5px]">
                    <header className="gradient w-full h-[79px] rounded-full flex px-[42px] justify-between items-center">
                        <Image
                            src={logo}
                            alt="logo"
                            width={120}
                        />

                        <div>
                            <List<HeaderLinks> items={HeaderLinksData} classeName="inter lg:flex hidden gap-8 justify-center ml-16 items-center">
                                {({ item }) => (
                                    <li key={item.route} className={`text-[12.5px] text-[#b0b0b0] font-semibold  ${item.state && "bg-[#FFFFFF40] interbold py-[6px] px-[0.70rem] rounded-[4px]   text-[#fff]"}`}>
                                        <a href={item.route}>{item.label}</a>
                                    </li>
                                )}
                            </List>
                        </div>

                        <div className="w-auto h-auto flex justify-center items-center gap-[18px]">
                            <div className="inter w-auto flex justify-center items-center gap-2 cursor-pointer">
                                <h3 className="text-sm font-semibold text-slate-50 ">EN</h3>
                                <Image
                                    src={arrow}
                                    alt="arrow"
                                />
                            </div>
                            <Button title="Saiba mais" asChild={false}>
                                <p className="inter text-sm font-medium text-zinc-900">Saiba mais</p>
                            </Button>
                        </div>
                    </header>
                </GridContainer>
               <Conter />
            </div>


        </>
    )
}
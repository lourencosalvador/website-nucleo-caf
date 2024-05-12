import Image from "next/image";
import line from "@/../public/linename.svg"
import lineCurva from "@/../public/arrowcurva.svg"
import destaque from "@/../public/destaque.svg"
import { Button } from "./layout/button";
import img1 from "@/../public/Adao-Card.svg"
import img2 from "@/../public/Silvio-Card.svg"
import img3 from "@/../public/Lourenco-Card.svg"
import img4 from "@/../public/Israel-Card.svg"
import img5 from "@/../public/Carolina-card.svg"

export function Conter() {
    return (
        <>
            <div className='w-full h-auto  flex justify-center items-center flex-col'>
                <div className="relative w-auto h-auto flex flex-col mb-[18px]">
                <Image
                        src={destaque}
                        alt="rabisco"
                        className="absolute top-[-1.5rem] left-[-3.5rem]"
                    />
                    <h1 className="bebas text-[94px] w-[1000px] mb-[0.7px] font-medium text-[#FFFFFF] text-center leading-[107px]">
                        Despertando a Inovação e a Criatividade nos

                        <span className="text-[#414141]"> jovens</span>

                    </h1>
                    <Image
                        src={line}
                        alt="rabisco"
                        className="absolute bottom-0 left-[40rem] "
                    />
                </div>

                <div className="w-full h-auto flex flex-col justify-center items-center relative mb-[102px] ">
                    <p className="inter text-[#AEABAB] text-[14px] font-normal text-left w-[522px] mb-[72px] ml-[170px] leading-[26px]">
                        O Núcleo Tecnológico do CAF, também conhecido
                        como Núcleo de Jovens Inventores/Inovadores do CAF, é um
                        grupo acadêmico sem fins lucrativos que reúne
                        estudantes, professores e coordenadores apaixonados por tecnologia e inovação
                    </p>

                    <div className=" absolute z-40 left-[23.5rem] bottom-0 flex h-auto w-auto gap-[32.72px]">
                        <Image
                            src={lineCurva}
                            alt="rabisco"
                           
                        />
                        <Button asChild={false} className="w-[263px] h-[45px]">
                            <p className="inter text-[13px] font-semibold text-zinc-900">Preparado para um tour pelo site?</p>
                        </Button>
                    </div>
                </div>


        <div className='w-full h-auto flex justify-between items-center space-x-[-115px] relative overflow-hidden '>
          <Image
            src={img3}
            alt='...'
            className='w-auto h-auto ml-[-100px]'
          />
          <Image
            src={img3}
            alt='...'
            className='w-auto h-auto'
          />

          <Image
            src={img3}
            alt='...'
            className='w-auto h-auto'
          />

          <Image
            src={img4}
            alt='...'
            className='w-auto h-auto'
          />

          <Image
            src={img3}
            alt='...'
            className='w-auto h-auto'
          />

        </div>
            </div>
        </>
    )
}
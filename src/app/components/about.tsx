"use client"
import Image from 'next/image'
import rabisco from "@/../public/rabisco.svg"
import {motion} from "framer-motion"
import { animeRigth } from '../animation/animate'

export function About(){
    return(
        <div className='lg:flex w-full h-auto justify-center gap-[136px]'>
          <div className='w-[345px] h-[144px] relative'>
            <Image
             src={rabisco}
             alt='..'
             className='absolute bottom-0 left-36'
            />
            <h1 className='bebas leading-[72px] text-[64px] font-medium text-[#FFFFFF] capitalize'>
              saiba mais
               <span className='text-[#414141]'> sobre o</span>
                <span className='text-[#00FF47]'> núcleo</span>
            </h1>
          </div>

          <motion.div
          {...animeRigth}
          transition={{duration: 1}}
           className='flex flex-col gap-10 inter-regular w-[591px]'>
           <p className=' text-[18px] text-[#AEABAB] font-normal leading-[39px]'>
           <span className='text-[#FFFFFF]'>O Núcleo Tecnológico do CAF (também chamado de Núcleo de Jovens Inventores/</span>Inovadores do CAF) 
           é um grupo acadêmico e sem fins lucrativos, formado por estudantes, professores e coordenadores 
           afectos ao Colégio Árvore da Felicidade (CAF), e dirigido/supervisionado pela direcção do CAF.
           </p>

           <p className=' text-[18px] text-[#AEABAB] font-normal leading-[39px]'>
           Os estudantes, professores e coordenadores têm a missão de identificar, projectar e 
           desenvolver projectos tecnológicos (produtos e serviços) que visam dar soluções aos diferentes 
            problemas locais
            (a nível da instituição "CAF") e globais (que Angola e o mundo enfrenta).
            </p>
          </motion.div>
        </div>
    )
}
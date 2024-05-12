import Image from 'next/image'
import background from "@/../public/background.svg"

import { Header } from './components/header/header'

export default function Home() {
  return (
    <div className='w-screen h-screen'>
      <main className='w-screen relative h-full '>
        <Image
          src={background}
          className='w-full h-auto -z-10'
          alt='...'
        />
        <Header />

      </main>

      <div className='w-full  h-screen bg-[#000000]'>

      </div>
    </div>
  )
}

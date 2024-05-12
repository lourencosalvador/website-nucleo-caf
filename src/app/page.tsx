import Image from 'next/image'
import background from "@/../public/background.svg"
import { Header } from './components/header/header'

export default function Home() {
  return (
   <main className='w-screen relative h-screen overflow-hidden'>
    <Image
     src={background}
     className='w-auto h-auto -z-10'
     alt='...'
    />
    <Header />
   </main>
  )
}

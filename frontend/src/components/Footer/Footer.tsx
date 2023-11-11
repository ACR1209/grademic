import { inter } from '@/utils/fonts'
import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <footer className='bg-grademic-black-900 w-full flex lg:flex-row flex-col-reverse text-white justify-between px-5 py-5 items-center'>
        <p className={`${inter.className} font-bold text-center`}>© 2023 Grademic, LTC. Todos los derechos reservados</p>
        <Image
        alt="grademic logo"
        src="/gradmicLogoBlanco.png"
        className='mb-5 lg:mb-0'
        width={70}
        height={70}
      />

    </footer>
  )
}

export default Footer
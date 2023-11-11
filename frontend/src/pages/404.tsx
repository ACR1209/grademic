import PageWithNavbar from '@/layout/PageWithNavbar'
import { inter, notoSerif } from '@/utils/fonts'
import Link from 'next/link'
import React from 'react'

export default function FourOhFour() {
  return (
    <PageWithNavbar>
        <div className='flex-grow text-center p-5 flex flex-col items-center justify-center h-[70vh]'>
            <h1 className={`${notoSerif.className} font-bold text-5xl mb-2`}>¡Oops! No encontramos esa página</h1>
            <p className={`${inter.className} text-xl mb-5`}>Verifica que estas tratando de acceder a algo que en verdad existe</p>
            <Link href="/" className={`${notoSerif.className} font-bold hover:underline transition-all hover:scale-110 text-xl mb-5`}>
                <p>Volver al inicio</p>
            </Link>
        </div>
    </PageWithNavbar>
  )
}

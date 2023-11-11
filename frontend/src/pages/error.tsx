import PageWithNavbar from '@/layout/PageWithNavbar'
import { inter, notoSerif } from '@/utils/fonts'
import Link from 'next/link'
import React from 'react'

function ErrorPage() {
  return (
<PageWithNavbar>
        <div className='flex-grow text-center p-5 flex flex-col items-center justify-center h-[70vh]'>
            <h1 className={`${notoSerif.className} font-bold text-5xl mb-2`}>¡Hubo un error de nuestra parte al buscar lo que querias!</h1>
            <p className={`${inter.className} text-xl mb-5`}>Lamentamos las molestias, porfavor intentelo mas tarde</p>
            <Link href="/" className={`${notoSerif.className} font-bold hover:underline transition-all hover:scale-110 text-xl mb-5`}>
                <p>Volver al inicio</p>
            </Link>
        </div>
    </PageWithNavbar>  )
}

export default ErrorPage
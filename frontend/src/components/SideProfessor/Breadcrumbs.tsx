import { inter } from '@/utils/fonts'
import Link from 'next/link'
import React from 'react'

export type Route = {
    to: string
    display: string
}
function Breadcrumbs({routes}: {routes: Route[]}) {
  return (
    <div className={`flex flex-col pl-10 pt-10 ${inter.className} select-none`}>
        <p>Estás en</p>
        <div className='flex'>
        {
            routes.map((r, i)=>(
                <>
                <Link href={r.to} >{r.display}</Link>
                <p>{i === routes.length - 1 ? "" : "/"}</p>
                </>

            ))
        }

        </div>
    </div>
  )
}

export default Breadcrumbs
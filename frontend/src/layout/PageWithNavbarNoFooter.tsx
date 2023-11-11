import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import Head from 'next/head'
import React from 'react'

function PageWithNavbarNoFooter({children}: {children: React.ReactNode}) {
  return (
    <main className='flex flex-col min-h-screen relative'>
       <Head>
        <title>Grademic</title>
      </Head>
        <Navbar/>

        <div className='flex-grow min-h-[90%]'>
            {children}
        </div>
    </main>
  )
}

export default PageWithNavbarNoFooter
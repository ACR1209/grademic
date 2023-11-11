import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import Head from 'next/head'
import React from 'react'

function PageWithNavbar({children}: {children: React.ReactNode}) {
  return (
    <main className='flex flex-col min-h-screen relative'>
      <Head>
        <title>Grademic</title>
      </Head>
        <Navbar/>

        <div className='flex-grow min-h-[90%]'>
            {children}
        </div>
        <Footer/>
    </main>
  )
}

export default PageWithNavbar
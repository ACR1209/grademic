import React from 'react'
import ReasonComponent from './ReasonComponent'

function ReasonStrip() {
  return (
    <div className='flex md:flex-row flex-col items-center justify-center py-10'>
        <ReasonComponent color='grademic-yellow-800' title='Reseñas anónimas' image='/landing3.png' content='Tus reseñas se mantienen anónimas para proteger tu privacidad.'/>
        <ReasonComponent color='grademic-red-800' title='Edita tus reseñas' image='/landing4.png' content='Permitimos que edites tus reseñas si cambias de opinión o que simplemente las borres de querer.'/>
        <ReasonComponent color='grademic-black-900' title='Evalua reseñas' image='/landing5.png' content='Evalua las reseñas de los demás basada en su utilidad y criterio. '/>
    </div>
  )
}

export default ReasonStrip
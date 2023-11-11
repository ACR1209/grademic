import { notoSerif } from '@/utils/fonts'
import React from 'react'
import ReasonStrip from '../ReasonComponent/ReasonStrip'

function WhyGrademic() {
  return (
    <div>
        <h2 className={`${notoSerif.className} text-5xl font-bold text-center`}>¿Por qué unirte a Grademic?</h2>
        <ReasonStrip/>
    </div>
  )
}

export default WhyGrademic
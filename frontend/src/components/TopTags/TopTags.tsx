import { ProfessorTopTags } from '@/types/professorTopTags'
import { notoSerif } from '@/utils/fonts'
import React from 'react'
import Tags from './Tags'

function TopTags({tags}: {tags: ProfessorTopTags[]}) {
  return (
    <div className='mt-16 select-none'>
        <p className={`${notoSerif.className} font-bold`}>Lo que más opinan del profesor</p>
        <div className='flex flex-wrap  mt-2 '>

        {
            tags.map((t)=>(
              <div className='p-2' key={t.tag_id}>

                <Tags count={t.tag_count} tag={t.tag_name} />
              </div>
            ))
        }
        </div>
    </div>
  )
}

export default TopTags
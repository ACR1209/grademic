import { inter } from '@/utils/fonts'
import React, { useState } from 'react'
import {AiFillDislike, AiFillLike, AiOutlineLike, AiOutlineDislike} from "react-icons/ai"

function Likes({dislikes, likes}: {dislikes: number, likes: number}) {
    const [isLiked, setIsLiked] = useState<boolean>(false);
    const [isDisliked, setIsDisliked] = useState<boolean>(false);

  return (
    <div className={`flex flex-row ${inter.className} text-xl space-x-3 select-none`}>
        <div  className='flex'>
        {isLiked ? (
          <AiFillLike
            onMouseEnter={() => setIsLiked(true) }
            onMouseLeave={() => setIsLiked(false)}
          />
        ) : (
          <AiOutlineLike
            onMouseEnter={() => setIsLiked(true)}
            onMouseLeave={() => setIsLiked(false)}
          />
        )}
            <p>{likes}</p>
        </div>
        <div className='flex transition-all'>
        {isDisliked ? (
          <AiFillDislike
            onMouseEnter={() => setIsDisliked(true)}
            onMouseLeave={() => setIsDisliked(false)}
          />
        ) : (
          <AiOutlineDislike
            onMouseEnter={() => setIsDisliked(true)}
            onMouseLeave={() => setIsDisliked(false)}
          />
        )}
            <p>{dislikes}</p>
        </div>
    </div>
  )
}

export default Likes
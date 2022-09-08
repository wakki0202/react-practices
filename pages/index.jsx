import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

const index = () => {

  const [num, setNum] = useState(0);
  const [imageShowFlag, setImageShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1)
  }
  if (num > 0) {
    if ( num % 3 === 0) {
      imageShowFlag || setImageShowFlag(true);
    } else {
      imageShowFlag && setImageShowFlag(false);
    }
  }
  return (
    <div className="">
      <div className='text-center mt-10 '>
          
        <button onClick={onClickCountUp} className=' border-black border py-2 px-6  rounded'>カウントアップ</button>
        <p>{num}</p>
        {imageShowFlag && <Image src={"/001.jpeg"} width={"600"} height={"400"}></Image>}
      </div>
      
    </div>
  )
}

export default index

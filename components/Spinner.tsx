import React from 'react'
import { BarLoader } from 'react-spinners'
const color = '#01bf64';

const Spinner = () => {
  return (
    <div className=''>
      <BarLoader className='absolute top-[50%] left-[50%] mt-[-2px] ml-[-50px]' color={color} />
    </div>
  )
}

export default Spinner
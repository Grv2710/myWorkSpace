import React from 'react'
import { useElementWidth } from '../../Utility/DivRef'

const Home = () => {
    const [width, elementRef] = useElementWidth();
  return (
    <div ref={elementRef} className='w-100'>
        {width}
    </div>
  )
}

export default Home
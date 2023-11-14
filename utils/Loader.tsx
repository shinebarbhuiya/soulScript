"use client"

import { MutatingDots } from  'react-loader-spinner'

const CustomLoader = () => {
  return (
    <MutatingDots 
        height="100"
        width="100"
        color="#F9FAFB"
        secondaryColor= '#EF4444'
        radius='12.5'
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
  )
}

export default CustomLoader
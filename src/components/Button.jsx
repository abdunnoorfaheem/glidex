import React from 'react';



const Button = ({children,className}) => {
  return (
    <>
      <button className={`bg-[#2DFF28] px-[33px] py-[13px] rounded-[120px] text-[#000000] ${className}`}>{children}</button>
    </>
  )
}

export default Button

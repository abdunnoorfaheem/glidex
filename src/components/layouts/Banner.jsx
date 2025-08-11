import React from 'react'
import Container from '../Container'
import Heading from '../Heading'

const Banner = () => {
  return (
    <>
      <div className="bg-[#565656] py-[50px] text-white">
        <Container>
            <Heading text={"Cruising into the Future Electric Scooters at Your Service"} tagName={"h1"} className={"text-[38px] font-bold w-[549px]"}/>
        </Container>
      </div>
    </>
  )
}

export default Banner

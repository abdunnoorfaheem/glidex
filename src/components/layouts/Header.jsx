import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import Logo from "/src/assets/logo.png";
import Button from "../Button";
import { CiUser,CiShop } from "react-icons/ci";
// import {  } from "react-icons/ci";

const Header = () => {
  return (
    <>
      <div className="bg-[#565656] py-[20px] text-white">
        <Container>
          <Flex className={"justify-between"}>
            <div className="">
                <ul className="flex gap-x-12">
                    <li>Home</li>
                    <li>Shop</li>
                    <li>Blog</li>
                    <li>pages</li>
                </ul>
            </div>
            <div className="mr-[200px]">
                <Image imgSrc={Logo}/>
            </div>
            <div className="">
                {/* <Button>Book today</Button> */}
                <div className="flex text-[24px] gap-x-4">
                     <CiUser />
                    <CiShop /> 
                </div> 
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Header;

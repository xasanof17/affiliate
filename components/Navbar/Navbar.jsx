import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar, Nav, Container } from "react-bootstrap";
import images from "../../constants/images";
import {
  Logo,
  Navblock,
  NavContent,
  NavIcon,
  NavigationBlock,
  NavigationBtn,
  NavigationItem,
  NavigationLink,
  NavigationList,
  NavSmall,
  NavSmallLink,
  NavSmallList,
  NavSmallOverlay,
} from "./navbarStyled";
import { ContainerBlock } from "../../constants/styles";
import { AiOutlineMenu } from "react-icons/ai";
import { MdClose } from "react-icons/md";

const Navigation = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <Navbar as={NavigationBlock}>
      <ContainerBlock>
        <NavContent>
          <Navblock>
            <Link href="/" className="navbar-brand">
              <Logo>
                <Image src={images.logo} alt="logo" />
              </Logo>
            </Link>
            <NavigationList>
              <NavigationItem>
                <Link href="/">
                  <NavigationLink>
                    <NavIcon as={Image} src={images.category} alt="icon" />
                    Categories
                  </NavigationLink>
                </Link>
              </NavigationItem>
              <NavigationItem>
                <NavigationLink href="#blog">
                  <NavIcon as={Image} src={images.blog} alt="icon" /> Blog
                </NavigationLink>
              </NavigationItem>
              <NavigationItem>
                <NavigationLink href="#reviews">
                  <NavIcon as={Image} src={images.reviews} alt="icon" /> Reviews
                </NavigationLink>
              </NavigationItem>
              <NavigationItem>
                <NavigationLink href="#buying">
                  <NavIcon as={Image} src={images.cart} alt="icon" /> Buying
                  Guides
                </NavigationLink>
              </NavigationItem>
            </NavigationList>
          </Navblock>
          <NavigationBtn>
            <NavIcon as={Image} src={images.signup} alt="icon" /> Sign up
          </NavigationBtn>
          <NavSmall>
            <NavigationBtn>
              <NavIcon as={Image} src={images.signup} alt="icon" />
            </NavigationBtn>
            <AiOutlineMenu onClick={() => setToggle(true)} />
            {toggle && (
              <NavSmallOverlay>
                <MdClose className="close" onClick={() => setToggle(false)} />
                <NavSmallList>
                  <NavSmallLink href="#categories"><NavIcon as={Image} src={images.category} alt="icon" /> Caterogy</NavSmallLink>
                  <NavSmallLink href="#blog"><NavIcon as={Image} src={images.blog} alt="icon" />Blog</NavSmallLink>
                  <NavSmallLink href="#reviews"><NavIcon as={Image} src={images.reviews} alt="icon" />Reviews</NavSmallLink>
                  <NavSmallLink href="#buying"><NavIcon as={Image} src={images.cart} alt="icon" />Buying</NavSmallLink>
                </NavSmallList>
              </NavSmallOverlay>
            )}
          </NavSmall>
        </NavContent>
      </ContainerBlock>
    </Navbar>
  );
};

export default Navigation;

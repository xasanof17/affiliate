import React from "react";
import { ContainerBlock } from "../../constants/styles";
import {
  ViewBox,
  ViewBtn,
  ViewLeft,
  ViewRight,
  ViewSec,
  ViewTitle,
} from "./viewStyled";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import images from "../../constants/images";

const Veiw = () => {
  return (
    <ViewSec>
      <ContainerBlock>
        <ViewBox as={Row}>
          <ViewLeft as={Col} xs={12} lg={8} md={8} sm={8}>
            <Image src={images.settings} alt="settings icon" />
            <ViewTitle>
              View our list of the best products in lawncare.
            </ViewTitle>
          </ViewLeft>
          <ViewRight as={Col} xs={12} lg={4} md={4} sm={4}>
            <ViewBtn>See the list</ViewBtn>
          </ViewRight>
        </ViewBox>
      </ContainerBlock>
    </ViewSec>
  );
};

export default Veiw;

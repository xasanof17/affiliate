import React from "react";
import { ContainerBlock } from "../../constants/styles";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import images from "../../constants/images";
import { Review, ReviewBody, ReviewBox, ReviewBoxs, ReviewContent, Reviewtitle, ReviewTitle, Reviewtxt } from "./reviewsStyled";
import Article from '../Article/Article'
const Reviews = () => {
  return (
    <Review id="reviews">
      <ContainerBlock>
        <ReviewContent>
        <ReviewTitle>Latest Product Reviews</ReviewTitle>
        <ReviewBoxs as={Row}>
        <ReviewBox as={Col} xs={12} lg={4} md={4} sm={4}>
            <Image width={420} height={250} src={images.product1} alt="reviews-img"/>
            <ReviewBody>
                <Reviewtitle>Lawnmower Xtreme</Reviewtitle>
                <Reviewtxt>This is the Review Snippet. This is the Review Snippet. This is the Review Snippet. This is the Review Snippet.</Reviewtxt>
            </ReviewBody>
        </ReviewBox>
        <ReviewBox as={Col} xs={12} lg={4} md={4} sm={4}>
            <Image width={420} height={250} src={images.product2} alt="reviews-img"/>
            <ReviewBody>
                <Reviewtitle>Lawnmower Xtreme</Reviewtitle>
                <Reviewtxt>This is the Review Snippet. This is the Review Snippet. This is the Review Snippet. This is the Review Snippet.</Reviewtxt>
            </ReviewBody>
        </ReviewBox>
        <ReviewBox as={Col} xs={12} lg={4} md={4} sm={4}>
            <Image width={420} height={250} src={images.product3} alt="reviews-img"/>
            <ReviewBody>
                <Reviewtitle>Lawnmower Xtreme</Reviewtitle>
                <Reviewtxt>This is the Review Snippet. This is the Review Snippet. This is the Review Snippet. This is the Review Snippet.</Reviewtxt>
            </ReviewBody>
        </ReviewBox>
        </ReviewBoxs>
        </ReviewContent>
        <Article />
      </ContainerBlock>
    </Review>
  );
};

export default Reviews;

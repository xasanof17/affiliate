import React from "react";
import {
  News,
  NewsBody,
  NewsBoxs,
  NewsBtn,
  NewsContent,
  NewsForm,
  NewsIcon,
  NewsInpBlock,
  NewsInput,
  NewsLeft,
  NewsLink,
  NewsRight,
  NewsSubBlock,
  NewsTitle,
  NewsTop,
  NewsTxt,
} from "./newsletterStyled";
import { ContainerBlock } from "../../constants/styles";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import images from "../../constants/images";

const Newsletter = () => {
  return (
    <News id="buying">
      <ContainerBlock>
        <NewsContent>
          <NewsBoxs as={Row}>
            <NewsLeft as={Col} xs={12} lg={6} md={6} sm={12}>
              <Image src={images.newsletter} alt="newsletter" />
            </NewsLeft>
            <NewsRight as={Col} xs={12} lg={6} md={6} sm={12}>
              <NewsTop>
                <NewsIcon>
                  <Image src={images.message} alt="message" />
                </NewsIcon>
                <NewsTitle>Newsletter Signup</NewsTitle>
              </NewsTop>
              <NewsBody>
                <NewsTxt>
                  Be the first to receive updates on articles, product reviews,
                  courses, and more!
                </NewsTxt>
              </NewsBody>
              <NewsForm>
              <NewsInpBlock><NewsInput type='email' placeholder="Your email"/></NewsInpBlock>
              <NewsSubBlock>
              <NewsBtn type="submit">Submit</NewsBtn>
              <NewsLink>Privacy Policy</NewsLink>
              </NewsSubBlock>
              </NewsForm>
            </NewsRight>
          </NewsBoxs>
        </NewsContent>
      </ContainerBlock>
    </News>
  );
};

export default Newsletter;

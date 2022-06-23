import React from "react";
import { ContainerBlock } from "../../constants/styles";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import images from "../../constants/images";
import {
  BlogBox,
  BlogBoxs,
  BlogContent,
  BlogLeft,
  BlogLeftImg,
  BlogLeftTitle,
  BlogLeftTxt,
  BlogRight,
  BlogRightBox,
  BlogRightTxt,
  BlogTitle,
  BlogWrapper,
} from "./blogStyled";
import Article from "../Article/Article";

const Blog = () => {
  return (
    <BlogWrapper id="blog">
      <ContainerBlock>
        <BlogContent>
          <BlogTitle>Latest from the Blog</BlogTitle>
          <BlogBoxs as={Row}>
            <BlogBox as={Col} xs={12} lg={6} md={6} sm={12} mb-sm={10}>
              <BlogLeft>
                <BlogLeftImg as={Image} src={images.blog1} alt="garden" />
                <BlogLeftTitle>
                  How to Prep Your Lawn in the Spring
                </BlogLeftTitle>
                <BlogLeftTxt>
                  This is the blog description text. This is the blog
                  description text. This is the blog description text.
                </BlogLeftTxt>
              </BlogLeft>
            </BlogBox>
            <BlogBox as={Col} xs={12} lg={6} md={6} sm={12}>
              <BlogRight>
                <BlogRightBox as={Col} xs={12}>
                  <BlogLeftImg as={Image} src={images.blog2} alt="garden" />
                  <BlogRightTxt>
                    Secrets to Know About Hedge Trimming
                  </BlogRightTxt>
                </BlogRightBox>
                <BlogRightBox as={Col} xs={12}>
                  <BlogLeftImg as={Image} src={images.blog3} alt="garden" />
                  <BlogRightTxt>What to Do With a Dying Tree</BlogRightTxt>
                </BlogRightBox>
                <BlogRightBox as={Col} xs={12}>
                  <BlogLeftImg as={Image} src={images.blog4} alt="garden" />
                  <BlogRightTxt>
                    Which Flowers Should You Plant Garden
                  </BlogRightTxt>
                </BlogRightBox>
              </BlogRight>
            </BlogBox>
          </BlogBoxs>
        </BlogContent>
        <Article />
      </ContainerBlock>
    </BlogWrapper>
  );
};

export default Blog;

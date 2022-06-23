import styled from "styled-components";

`@media(max-width: 00px) {} `;

export const BlogWrapper = styled.section`
  margin-top: 80px;
  @media (max-width: 1024px) {
    margin-top: 60px;
  }
  @media (max-width: 991px) {
    margin-top: 50px;
  }
  @media (max-width: 768px) {
    margin-top: 40px;
  }
  @media (max-width: 600px) {
    margin-top: 30px;
  }
`;

export const BlogContent = styled.div`
  margin-bottom: 75px;
  @media (max-width: 1024px) {
    margin-bottom: 60px;
  }
  @media (max-width: 991px) {
    margin-bottom: 50px;
  }
  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
  @media (max-width: 600px) {
    margin-bottom: 30px;
  }
`;

export const BlogTitle = styled.h2`
  margin-bottom: 35px;
`;

export const BlogBoxs = styled.div``;

export const BlogBox = styled.div``;

export const BlogLeft = styled.div`
  width: 100%;
`;

export const BlogLeftImg = styled.img`
  width: 100%;
`;

export const BlogLeftTitle = styled.h2`
  font-size: 30px;
  line-height: 35px;
  margin-bottom: 15px;
  @media (max-width: 1024px) {
    font-size: 26px;
    line-height: 35px;
    margin-bottom: 9px;
  }
  @media (max-width: 500px) {
    font-size: 22px;
    line-height: 35px;
    margin-bottom: 9px;
  }
  @media (max-width: 375px) {
    font-size: 18px;
    line-height: 35px;
    margin-bottom: 9px;
  }
`;

export const BlogLeftTxt = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  color: var(--main-color);
  max-width: 546px;
  width: 100%;
`;

export const BlogRight = styled.div``;

export const BlogRightBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const BlogRightTxt = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  color: var(--main-color);
  padding-left: 15px;
`;



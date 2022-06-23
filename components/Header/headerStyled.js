import styled from "styled-components";

export const HeaderBlock = styled.section`
  margin-top: 60px;
  @media (max-width: 768px) {
    margin-top: 40px;
  }
  @media (max-width: 500px) {
    margin-top: 30px;
  }
`;

export const HeaderContent = styled.div`
  background: var(--grayBg);
  border-radius: 10px;
  padding: 50px;
  @media (max-width: 1024px) {
    padding: 20px;
  }
  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const HeaderBoxs = styled.div``;

export const HeaderBox = styled.div`
  &:nth-child(2) {
    padding: 20px;
  }
  @media (max-width: 768px) {
    &:nth-child(1) {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  @media (max-width: 767px) {
    margin-bottom: 16px;
  }
  @media (max-width: 500px) {
    &:nth-child(2) {
      padding: 5px;
    }
  }
  @media (max-width: 424px) {
    &:nth-child(2) {
    }
  }
`;

export const HeaderSpan = styled.span`
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  color: var(--green);
  margin-bottom: 8px;
  display: inline-block;
  @media (max-width: 425px) {
    text-align: start;
  }
`;

export const HeaderTitle = styled.h1`
  font-weight: 400;
  font-size: 47px;
  line-height: 52px;
  color: var(--main-color);
  max-width: 484px;
  width: 100%;
  margin-bottom: 22px;
  @media (max-width: 1024px) {
    font-size: 34px;
    margin-bottom: 12px;
  }
  @media (max-width: 991px) {
    font-size: 32px;
    margin-bottom: 10px;
  }
  @media (max-width: 425px) {
    font-size: 28px;
    margin-bottom: 10px;
  }
  @media (max-width: 375px) {
    font-size: 26px;
    margin-bottom: 10px;
  }

  @media (max-width: 374px) {
    font-size: 21px;
    margin-bottom: 12px;
    line-height: 37px;
  }
`;

export const HeaderTxt = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: var(--dark);
  margin-bottom: 25px;
  @media (max-width: 1024px) {
    margin-bottom: 18px;
  }
`;

export const HeaderBtn = styled.button`
  background: var(--green);
  border-radius: 5px;
  padding: 15px;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  color: var(--white);
`;

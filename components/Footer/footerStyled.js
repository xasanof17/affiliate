import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background: var(--lightGrayBg);
  margin-top: 100px;
`;

export const FooterContent = styled.div`
  padding: 60px 0px 80px 0;
  @media (max-width: 768px) {
    padding: 40px 0px 40px 0;
  }
`;

export const FooterBoxs = styled.div``;

export const FooterBox = styled.div`
  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

export const FooterLogo = styled.a``;

export const FooterIcons = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 25px;
`;

export const FooterIconLink = styled.a`
  font-size: 27px;
  color: var(--main-color);
  transition: 0.5s ease;
  margin: 0px 5px;
  &:hover {
    color: var(--green);
  }
`;

export const FooterTxt = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: var(--main-color);
  max-width: 306px;
  width: 100%;
`;

export const FooterTitle = styled.h2`
  margin-bottom: 12px;
`;

export const FooterInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 10px 0;
  img {
    border-radius: 10px;
  }
`;

export const FooterInnerTxt = styled.p`
  padding-left: 15px;
  max-width: 190px;
  width: 100%;
`;

export const FooterForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px 0px 0px 5px;
`;
export const FooterInput = styled.input`
  background: var(--white);
  border: 1px solid var(--inpBorder);
  border-radius: 7px 0 0 7px;
  width: 100%;
  height: 50px;
  padding: 15px;
`;

export const FooterBtn = styled.button`
  padding: 15px 20px;
  background: var(--searchbBtn);
  border-radius: 0px 5px 5px 0px;
  font-weight: 700;
  font-size: 12px;
  line-height: 20px;
  color: var(--white);
`;

export const FooterLinksBlock = styled.div`
  margin-top: 20px;
  ul {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    padding-bottom: 22px;
    border-bottom: 1px solid var(--gray);
    @media (max-width: 768px) {
      border: none;
    }
    li {
      margin: 4px 0;
    }
  }
`;

export const FooterLink = styled.a`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: var(--main-color);
  transition: 0.5s ease;
  &:hover {
    color: var(--green);
  }
`;
export const FooterBotom = styled.div`
  padding: 20px 0;
  p {
    font-weight: 700;
    font-size: 18px;
    line-height: 20px;
    color: var(--main-color);
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  border-top: 1px solid var(--gray);
  @media (max-width: 500px) {
    flex-direction: column;
  }
  ul {
    display: flex;
    @media (max-width: 500px) {
      margin-bottom: 10px;
    }
    li {
      margin: 0px 5px;
      a {
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
        color: var(--main-color);
      }
    }
  }
  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: var(--main-color);
  }
`;

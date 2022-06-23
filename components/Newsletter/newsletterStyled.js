import styled from "styled-components";

export const News = styled.section`
  margin-top: 100px;
`;

export const NewsContent = styled.div`
  background: url("../../assets/newsletterbg.png");
  background-color: var(--grayBg);
  padding: 50px;
  @media (max-width: 768px) {
    padding: 30px;
  }
  @media (max-width: 425px) {
    padding: 20px;
  }
`;
export const NewsBoxs = styled.div``;
export const NewsLeft = styled.div``;
export const NewsRight = styled.div``;

export const NewsIcon = styled.div`
  padding: 16px 10px;
  background: var(--white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
`;

export const NewsTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const NewsTitle = styled.h2``;

export const NewsBody = styled.div`
margin: 27px 0;
`;

export const NewsTxt = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: var(--main-color);
  margin-bottom: 0;
`;

export const NewsForm = styled.form`
display: flex;
align-items: center;
justify-content: flex-start;
flex-direction: column;
`;
export const NewsInpBlock = styled.div`
width: 100%;
`;

export const NewsInput = styled.input`
max-width: inherit;
width: 100%;
background: var(--white);
border: 1px solid var(--inpBorder);
border-radius: 5px;
padding: 15px 0px 15px 16px;
flex: 1;
`;

export const NewsSubBlock = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
width: 100%;
margin-top: 30px;
`;

export const NewsBtn = styled.button`
background: var(--yellow);
border-radius: 5px;
padding: 15px 20px;
margin-right: 10px;
font-weight: 700;
font-size: 20x;
line-height: 20px;
color: var(--black);
cursor: pointer;
`;

export const NewsLink = styled.a`
font-family: 'Raleway', sans-serif;
font-weight: 400;
font-size: 16px;
line-height: 20px;
color: var(--gray);
cursor: pointer;
`;
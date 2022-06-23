import styled from "styled-components";
import images from "../../constants/images";

export const ViewSec = styled.section`
  margin-top: 100px;
`;

export const ViewBox = styled.div`
  /* background: url(${images.viewbg}) no-repeat center / cover; */
  background: url("../../assets/viewbg.png") no-repeat;
  /* height: 100px; */
  padding: 30px 35px;
  background-color: var(--grayBg);
  border-radius: 10px;
  @media (max-width: 1024px) {
    padding: 20px 10px;
  }
`;

export const ViewLeft = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
gap: 10px;
`;

export const ViewTitle = styled.h3`
margin-bottom: 0;
@media (max-width: 1024px) {
    font-size: 25px;
}
@media (max-width: 768px) {
    font-size: 18px;
}
`;

export const ViewRight = styled.div`
display: flex;
justify-content: flex-end;
@media (max-width: 500px) {
    justify-content: center;
    margin-top: 10px;
}
`;
export const ViewBtn = styled.button`
border-radius: 5px;
background: var(--green);
padding: 15px;
font-weight: 400;
font-size: 17px;
line-height: 22px;
color: var(--white);
`;
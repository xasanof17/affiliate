import styled from "styled-components";

export const Review = styled.section`
margin-top: 100px;
@media (max-width: 1024px) {
    margin-top: 70px;
}
@media (max-width: 768px) {
    margin-top: 50px;
}
@media (max-width: 500px) {
    margin-top: 40px;
}

`;

export const ReviewContent = styled.div`
margin-bottom: 40px;
`;

export const ReviewTitle = styled.h2`
margin-bottom: 35px;

`;

export const ReviewBoxs = styled.div`
`;

export const ReviewBox = styled.div`
@media (max-width: 768px) {
    margin: 10px 0;
}
`;

export const ReviewBody = styled.div`
background: var(--lightGrayBg);
border-radius: 0 0 10px 10px;
padding: 30px;
`;

export const Reviewtitle = styled.h3`
margin-bottom: 13px;
`;

export const Reviewtxt = styled.p`
font-weight: 400;
font-size: 15px;
line-height: 20px;
color: var(--main-color);
max-width: 299px;
width: 100%;
`;
import styled from "styled-components";

export const NavigationBlock = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background: var(--white);
  box-shadow: 0px 1px 8px rgba(83, 109, 122, 0.29);
  padding: 15px 0;
  z-index: 5;
  div {
    .navblock {
      justify-content: space-between;
    }
  }
  @media (max-width: 768px) {
    padding: 10px 0;
  }
`;
export const NavContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Navblock = styled.div`
  display: flex;
`;

export const Logo = styled.a`
  margin-right: 25px;
`;

export const NavigationList = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: row;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavigationItem = styled.li`
  margin: 0px 20px;
`;

export const NavigationLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  color: var(--main-color);
  cursor: pointer;
  transition: 0.5s ease-in;
  &:hover {
    color: var(--green);
  }
`;

export const NavigationBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px;
  background: transparent;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  color: var(--main-color);
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavIcon = styled.img``;

export const NavSmall = styled.div`
  display: none;
  user-select: none;
  svg {
    cursor: pointer;
    font-size: 27px;
    color: var(--main-color);
  }
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    button {
      display: flex;
      padding: 8px;
    }
  }
`;

export const NavSmallOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: var(--lightGrayBg);
  transition: 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  .close {
    font-size: 27px;
    position: absolute;
    top: 27px;
    right: 12px;
  }
`;

export const NavSmallList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const NavSmallLink = styled.a`
  font-size: 27px;
  color: var(--main-color);
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 11px;
  cursor: pointer;
`;

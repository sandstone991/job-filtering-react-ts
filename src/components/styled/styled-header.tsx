import styled from "styled-components";
import headerImgDeskTop from "../../media/images/bg-header-desktop.svg";
import headerImgMobile from "../../media/images/bg-header-mobile.svg";

export const StyledHeader = styled.div`
  width: 100vw;
  height: 12vh;
  background-color: hsl(180, 29%, 50%);
  background-image: url(${headerImgDeskTop});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  @media only screen and (max-width: 1200px) {
    background-image: url(${headerImgMobile});
  }
`;

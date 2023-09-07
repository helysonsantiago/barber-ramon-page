import styled from "styled-components";

export const ContainerSlider = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  z-index: 3;
`;

export const BoxSlider = styled.div`
  height: 90%;
  width: 90%;
  display: flex;
  flex-direction: column;

  & h1 {
    font-family: "Space Grotesk";
    font-size: 100px;
    position: relative;
    width: 30%;
    height: 40%;
    &::after {
      height: 54px;
      width: 198px;
      content: "";
      position: absolute;
      background-color: var(--color-highlight);
      right: -250px;
      top: 50px;
    }
  }
`;

export const AnimatedSlide = styled.div`
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  & span {
    width: 50%;
    height: 100%;
    display: inherit;
    justify-content: space-evenly;
    flex-direction: column;
    & h2 {
      font-family: "Space Grotesk";
      font-size: 60px;
      animation: anim1 1s normal;
    }
    & p {
      width: 100%;
      font-family: "Poppins";
      font-size: 30px;
      color: var(--color-gray-2);
      animation: anim2 1s normal;
    }

    @keyframes anim1 {
      0% {
        opacity: 0;
        transform: translatex(-10px);
      }
      100% {
        opacity: 1;
        transform: translatex(0);
      }
    }

    @keyframes anim2 {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
`;

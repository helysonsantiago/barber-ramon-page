import styled from "styled-components";

export const ContainerHome = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  overflow: hidden;
  & img {
    position: absolute;
    right: 0;
    height: 140%;
    z-index: 2;

    @media (max-width: 1000px) {
    
      & img{
        height: 100%;

      }
    }

    
    @media (max-width: 835px) {
    
    & img{
      width: 70%;
      opacity: 0.5;
    }
  }
  }
`;
export const BoxInfoHome = styled.div`
  height: 100vh;
  width: 50%;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  font-family: "Poppins";
  z-index: 4;
  position: relative;
  & h1 {
    color: var(--color-white);
    font-size: 180px;
    font-weight: 700;
    line-height: 200px;
  }
  & h1 span {
    color: var(--color-highlight);
    font-family: "Space Grotesk";
    filter: drop-shadow(0 0 100px var(--color-highlight));
  }

  & button {
    border: none;
    background: none;
    color: var(--color-white);
    border: 3px solid var(--color-highlight);
    border-radius: var(--radius-2);
    width: 650px;
    min-height: 120px;
    font-size: 70px;
    font-weight: 700;
    position: relative;
    cursor: pointer;
    overflow: hidden;
  }

  & button::before {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    border-radius: var(--radius-2);
    z-index: -1;
    height: 100%;
    width: 0;
    background: linear-gradient(
      to right,
      transparent 0,
      var(--color-highlight) 100%
    );
    transform-origin: right bottom;
    transition: transform 0.5s cubic-bezier(0.4, 0, 1, 1),
      width 0.5s ease-in-out;
  }
  & button:hover:before {
    left: 0;
    transition: 1s;
    width: 100%;
  }
  & p {
    color: var(--color-gray-1);
    text-align: start;
    width: 90%;
  }
  & p span {
    color: var(--color-highlight);
  }

  
  @media (max-width: 1000px) {
    width: 70%;
    height: 90%;
  }
  @media (max-width: 835px) {
    width: 100%;
    margin: 0;
  
    & p {
      width: 100%;
      text-align: center;
      font-size: 14px;
    }

    &::before{
      content: '';
      position: absolute;
      width: 100%;
      background:linear-gradient(180deg, transparent, black 50%);
      height: 100vh;
      bottom: -120px;
      z-index: -1;
      opacity: 0.9;
    }
  }
  
  @media (max-width: 500px) {
    & h1{
      font-size: 90px;
      line-height: 120px;
      width: 100%;
    }
    & button{
      width: 82%;
      font-size: 30px;
      min-height: 90px;
    }
  }

  
`;

export const TextBackground = styled.div`
  position: absolute;
  height: 100%;
  top: 0px;
  color: rgba(250, 250, 250, 3%);
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-family: "Poppins";
  z-index: 1;
  user-select: none;
  font-size: 23vw;
  font-weight: 800;
  & span {
    font-family: "Space Grotesk";
  }
`;

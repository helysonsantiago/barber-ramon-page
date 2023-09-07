import styled from "styled-components";

export const SocialLinks1 = styled.div`
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  right: 60px;
  bottom: 0;
  z-index: 6;
  color: var(--color-white);
  font-size: 30px;
  height: 300px;
  
  filter: drop-shadow(0 1px 16px var(--color-highlight));

  &::after {
    position: relative;
    content: "";
    height: 200px;
    width: 10px;
    background-color: var(--color-highlight);
    bottom: 0;
  }
  & svg {
    cursor: pointer;
  }

  @media (max-width: 835px) {
    flex-direction: row;
    width: 100%;
    right: 0;
    bottom: -80px;
    justify-content: center;
    &::after {
      display: none;
    }
    & svg {
      font-size: 50px;
      padding: 10px;
      margin-top: 20px;
    }
  }
`;

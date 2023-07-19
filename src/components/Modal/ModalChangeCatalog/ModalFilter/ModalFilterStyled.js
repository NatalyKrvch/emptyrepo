import styled from "styled-components";
import { TbCircle } from "react-icons/tb";
import { VscCircleFilled } from "react-icons/vsc";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  min-width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(2px);
  opacity: 1;
  transition: opacity 0.3s ease-in-out, left 0.3s ease-in-out;
`;

export const ModalBody = styled.div`
  position: relative;
  max-width: 320px;
  padding: 64px 20px 16px 20px;
  position: fixed;
  background-color: var(--main-white);
  z-index: 2;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 2px 6px 2px rgba(0, 0, 0, 0.15),
    0px 1px 2px 0px rgba(0, 0, 0, 0.3);
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    max-width: 494px;
    padding: 80px 16px 16px 16px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    top: 16px;
    right: 16px;
  }
`;

export const StyledTitle = styled.h3`
  color: var(--dark-grey);
  font-size: 24px;
  font-weight: 400;
  line-height: 1, 2;
  letter-spacing: -0.4px;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 1;
    margin-bottom: 24px;
    max-width: 462px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 48px;
    font-weight: 400;
    line-height: 1,2;
   
  }
`;
export const StyledFiltersWrp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  @media screen and (min-width: 768px) {
    width: 462px;
  }
`;

export const FilterBtn = styled.button`
  display: flex;
  width: 280px;
  height: 32px;
  padding: 6px 8px 6px 16px;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 2, 7;
  letter-spacing: -0.4px;
  color: var(--main-black);
  border-color: var(--middle-grey);
  border-radius: 8px;
  background-color: transparent;
  outline: none;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 462px;
    height: 40px;
    font-size: 18px;
    line-height: 1, 5;
  }

  @media screen and (min-width: 1280px) {
    /* width: 274px; */
  }
`;

export const IconBtn = styled.span`
display: block;
  width: 18px;
  height: 18px;
  position: relative;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
`;

export const StyledIconCircle = styled(TbCircle)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledIconCircleFill = styled(VscCircleFilled)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledButtonChoose = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  width: 280px;
  height: 48px;
  background-color: var(--dark-blue);
  border-radius: 8px;
  outline: none;
  color: var(--main-white);
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.4px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 462px;
    height: 56px;
    font-size: 20px;
    line-height: 1.2;
  }

  @media screen and (min-width: 1280px) {
  }
`;

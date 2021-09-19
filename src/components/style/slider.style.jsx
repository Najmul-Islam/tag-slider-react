import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const SlideContainer = styled.div`
  padding-bottom: 10px;
  padding-right: 60px;
  @media (max-width: 768px) {
    padding-right: 0px;
  }
`;

export const Tag = styled.span`
  font-weight: 400;
  cursor: pointer;
  user-select: none;
`;

export const BtnContainer = styled.div`
  position: absolute;
  bottom: 10px;
  right: 5px;
  padding: 0 5px 3px 5px;
  border-radius: 30px;
`;

export const SlideBtn = styled.button`
  border: none;
  outline: none;
  background: transparent;
  font-size: 18px;
`;

export const Separator = styled.div`
  width: 1px;
  height: 15px;
  position: absolute;
  top: 9px;
  right: 34px;
`;

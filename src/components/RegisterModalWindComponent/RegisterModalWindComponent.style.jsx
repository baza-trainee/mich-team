import styled from "@emotion/styled";
import { ReactSVG } from "react-svg";

export const RegisterModalWind = styled.div`
    position: fixed;
    z-index:100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(15, 0, 0, 0.7);
`

export const RegisterModalContent = styled.div`
    position:relative;
    background-color: #FAFAFA;
    margin: 178px auto;
    padding: 32px 24px;
    border-radius: 4px;
    z-index: 1001; 
    width: 396px;

`

export const ButtonLink = styled.button`
  position: absolute;  
  top: 12px;
  right: 12px;
  display: block;
  padding: 6px;
  background-color: #FAFAFA;
  width: fit-content;
  margin-left: auto;
  
`

export const CloseBtn = styled(ReactSVG)`
  width:24px;
  height: 24px;

  path:nth-of-type(1),
  path:nth-of-type(2),
  path:nth-of-type(3){
        stroke: black;
      } 
  
`

export const EmailIcon = styled.img`
    display: block;
    margin: 0 auto;
    width:40px;
    height: 40px;
    margin-bottom: 16px;
`

export const MessageTitle = styled.h2`
    color:  #000;
    text-align: center;
    margin-bottom: 8px;
    font-size: 18px;

    font-weight: 700;
    line-height: 1.2;
    text-transform: uppercase;
`


export const MessageOfemail = styled.p`
    color: #0F0000;
    text-align: center;
    margin-bottom: 24px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.2;

`

export const ButtonUserActive = styled.button`
position: relative;
  display: inline-block;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--Main-red, #d91f2d);
  color: var(--Wtite, #fdfdfd);
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  line-height: 120%;
  text-transform: uppercase;
  max-width: 286 px;
  height: 50px;
  margin: 0 auto;
  padding: 12px 36px;
  border-color: #d91f2d;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 150ms ease-in-out;

  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 100%;
    background: #000;
    z-index: -1;
    transition: width 150ms ease-in-out;
  }

  &:hover {
    color: #fff;
    &:after {
      width: 110%;
    }
  }

  
`
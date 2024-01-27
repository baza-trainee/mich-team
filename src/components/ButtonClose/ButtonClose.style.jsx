import styled from "@emotion/styled"
import { NavLink } from "react-router-dom"
import { ReactSVG } from "react-svg"

export const ButtonNavLink = styled(NavLink)`
  display: block;
  padding: 6px;
  margin-bottom: 10px;
  background-color: #FAFAFA;
  width: fit-content;
  margin-left: auto;
  border-radius: 20px;
 &:hover {
    background-color: rgba(0, 0, 0, 0.6);
    &:hover {
    path:nth-of-type(1),
    path:nth-of-type(2),
    path:nth-of-type(3){
        stroke: #fefefe;
      }
  }
  
`

export const CloseBtn = styled(ReactSVG)`
  width:24px;
  height: 24px;

  path:nth-of-type(1),
  path:nth-of-type(2),
  path:nth-of-type(3){
        stroke: black;
        transition: stroke 0.2s ease;
      } 
  

  }
      
  
`
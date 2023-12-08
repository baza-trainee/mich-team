import styled from "@emotion/styled"
import { NavLink } from "react-router-dom"
import { ReactSVG } from "react-svg"

export const ButtonNavLink = styled(NavLink)`
  display: block;
  padding: 16px;
  margin-bottom: 6px;
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
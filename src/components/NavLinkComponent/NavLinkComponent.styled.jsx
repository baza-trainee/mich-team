import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`

font-size: 14px;

font-weight: 400;
line-height: 1.4;
color: #110003;
&.active{
  font-weight: 700;
}
`;
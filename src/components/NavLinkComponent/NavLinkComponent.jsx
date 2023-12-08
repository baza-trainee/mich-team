import React from "react";
import PropTypes from 'prop-types';
import { StyledNavLink } from "./NavLinkComponent.styled";

const NavLinkComponent = ({propTo, title}) => {
    return (
        <StyledNavLink to={ propTo}>{title}</StyledNavLink>
    )
}

NavLinkComponent.propTypes = {
    propTo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default NavLinkComponent;
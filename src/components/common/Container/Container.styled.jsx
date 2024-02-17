import styled from '@emotion/styled';
import PropTypes from 'prop-types';

export const Container = styled.div`
  margin: 0 auto;
  width: 360px;
  padding-left: 16px;
  padding-right: 16px;

  @media screen and (min-width: 768px) {
    width: ${props => (props.headerStyles ? '100%' : '768px')};
    padding-left: 32px;
    padding-right: 32px;
  }
  @media screen and (min-width: 1440px) {
    width: ${props => (props.headerStyles ? '100%' : '1440px')};
    padding-left: 80px;
    padding-right: 80px;
  }
`;

Container.propTypes = {
  headerStyles: PropTypes.bool,
};

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CounterStyled = styled.div`
	font-size: 13px;
`;

const Counter =  ({ number }) => <CounterStyled>{number} missing</CounterStyled>;

Counter.propTypes = {
	number: PropTypes.number.isRequired,
};

export default Counter;

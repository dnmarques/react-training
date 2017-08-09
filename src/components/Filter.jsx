import React from 'react';
import styled from 'styled-components';

import A from './A';

const FilterStyled = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
	> li {
		display: inline-block;
		padding: 0 10px;
	}
`;

export default (props) => (
	<FilterStyled>
		<li>
			<A>All</A>
		</li>
		<li>
			<A>Active</A>
		</li>
		<li>
			<A>Completed</A>
		</li>
	</FilterStyled>
);
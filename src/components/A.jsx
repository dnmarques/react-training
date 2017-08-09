import styled from 'styled-components';

import Button from './Button';

const A = Button.withComponent('a');

export default A.extend`
	background: transparent;
	border: 1px solid transparent;
	color: black;
	font-size: 14px;
	text-transform: none;
	text-decoration: none;
	&:hover{
		border: 1px solid black;
	}
`;
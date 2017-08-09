import React from 'react';
import styled from 'styled-components';


import Button from './Button';

const TodoStyled = styled.div`
	color: ${ (props) => props.completed ? '#ccc' : 'teal' };
	font-size: 20px;
	line-height: 40px;
	margin: 10px 0px;
	padding: 5px 0px 5px 0px;
	text-decoration: ${ (props) => props.completed ? 'line-through' : 'none' };
	&:before {
		background: url('${(props) => props.completed
		   ? 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5 " stroke-width="3"/><path fill="#5dc2af " d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>'
		   : 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed " stroke-width="3"/></svg>'
		}') no-repeat;
		content: '';
		display: inline-block;
		height: 40px;
		margin-right: 15px;
		vertical-align: middle;
		width: 40px;
	}
	> button {
		float: right;
	}
`;

export default (props) => (
	<TodoStyled {...props}>
		<span>{props.children}</span>
		<Button danger>Remove</Button>
	</TodoStyled>
);
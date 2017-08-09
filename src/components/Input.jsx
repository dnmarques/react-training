import styled from 'styled-components';

export default styled.input`
	border: 1px solid #ccc;
	border-radius: 4px;
	box-shadow: 1px 0px 9px 2px rgba(0,0,0,0.6);
	color: tomato;
	font-size: 16px;
	padding: 15px 20px;
	width: 100%;
	&:focus {
		outline: 2px solid red;
	}
`;
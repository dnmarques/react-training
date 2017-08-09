import styled from 'styled-components';

export default styled.button`
	background: ${ (props) => {
			if(props.outline)
				return 'transparent';
			return props.danger ? '#881600' : 'cornflowerblue'
		}
	};
	border: 2px solid ${ (props) => props.danger ? '#881600' : 'cornflowerblue'};
	border-radius: 2px;
	color: ${ (props) => {
			if(!props.outline)
				return 'white';
			return props.danger ? '#881600' : 'cornflowerblue';
		}	
	};
	font-size: 15px;
	line-height: 1.1;
	padding: 10px 10px;
	text-transform: uppercase;
	transition: all .33s ease;
	&:hover {
		background: ${ (props) => props.danger ? '#CC4A44' : 'deepskyblue'};
		color: white;
	}
`;

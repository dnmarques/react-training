import React from 'react';

const style = {
	width: '60px',
	height: '60px',
	borderRadius: '100%',
	verticalAlign: 'middle',
	lineHeight: '60px'
};

const Avatar = (props) => (
	<img
		style={style}
		src={props.image_url} 
		alt={props.image_description} 
	/>
);

export default Avatar;

import React from 'react';

import Input from '../../components/Input';

class Header extends React.Component {

	constructor(props) {
		super(props);
		this.handleInputEnter = this.handleInputEnter.bind(this);
	}

	handleInputEnter(e) {
		const input = e.target;
		const value = input.value;

		if(value.length <=3 || e.keyCode !== 13)
			return;

		console.log(value);
		input.value = '';
	}

	render() {
		return <Input placeholder="What to do?" onKeyDown={this.handleInputEnter} />
	}
}

export default Header;

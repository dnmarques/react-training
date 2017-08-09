import React from 'react';

import Counter from '../../components/Counter';
import Filter from '../../components/Filter';
import Button from '../../components/Button';

class Footer extends React.Component {
	render() {
		return (
			<div>
				<div style={{float: 'left', width: '10%'}}>
					<Counter number={1} />
				</div>
				<div style={{float: 'left', width: '55%'}}>
					<Filter />
				</div>
				<div style={{float: 'right', width: '35%'}}>
					<Button danger outline>Clear completed</Button>
				</div>
			</div>
		);
	}
}

export default Footer;

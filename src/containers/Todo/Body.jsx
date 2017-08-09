import React from 'react';

import Todo from '../../components/Todo';

class Body extends React.Component {
	render() {
		return (
			<ul style={{listStyle: 'none', padding: 0, margin: 0}}>
				<li>
					<Todo>Conversar com o Nuno sobre a Doinn</Todo>
				</li>
				<li>
					<Todo completed>Convencer o Marcelo a não fazer o que o Nuno quer</Todo>
				</li>
			</ul>
		);
	}
}

export default Body;

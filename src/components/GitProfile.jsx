import React from 'react';
import axios from 'axios';

import Avatar from './Avatar';

class GitProfile extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			name: null,
			avatar: null,
		}
	}

	componentDidMount() {
		const URL = `https://api.github.com/users/${this.props.username}`;

		axios.get(URL)
			.then(response => {
				this.setState({
					name: response.data.name,
					avatar: response.data.avatar_url
				});
			}).catch(error => {
				console.log(error);
				this.setState({
					name: 'John Doe',
					avatar: null
				})
			});
	}

	render() {
		return <div>
			<Avatar image_url={this.state.avatar} image_description={this.state.name} />
			<span>{this.state.name}</span>
		</div>;
	}
}

export default GitProfile;

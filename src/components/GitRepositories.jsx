import React from 'react';
import axios from 'axios';

class GitRepositories extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			repos: []
		}
	}

	componentDidMount() {
		const URL = `https://api.github.com/users/${this.props.username}/repos`;
		axios.get(URL)
			.then(response => {
			  this.setState({
			  	repos: response.data,
			  })
			})
			.catch(error => {
				this.setState({
					repos: []
				})
			});
	}

	render() {
		const repoList = this.state.repos.map((repo) => {
			return <li key={repo.id}>{repo.full_name}</li>
		});
		return <div><ul>{repoList}</ul></div>;
	}
}

export default GitRepositories;

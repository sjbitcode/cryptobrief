import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class Header extends React.Component {
	searchInput = React.createRef();

	static propTypes = {
		match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
	};

	handleSearch = (event) => {
		console.log(this.props);
		event.preventDefault();
		const coinName = this.searchInput.current.value;
		this.props.history.push(`/coin/${coinName}`);
	};

	render() {
		const { location } = this.props;

		return (
			<div>
				<nav>
					<h2><Link to='/'>Crypto Brief</Link></h2>
					<ul>
						<li><Link to='/'>Front Page</Link></li>
						<li><Link to='/coins'>Popular Coins</Link></li>
					</ul>

					<form onSubmit={this.handleSearch}>
						<input type="text" ref={this.searchInput} required placeholder="Coin Name"/>
						<button type="submit">Search</button>
					</form>
				</nav>

				{location.pathname}
			</div>
		);
	}
};

export default withRouter(Header);
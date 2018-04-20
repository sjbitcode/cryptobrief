import React from 'react';
import { Link } from 'react-router-dom';

import FrontPageCoin from './FrontPageCoin';

class FrontPage extends React.Component {
	render() {
		const { coins } = this.props;
		return (
			<div>
				<h1>Here's the news</h1>
				<ul>
					{Object.keys(coins).map(key => (
						<Link to={`/coin/${key}`} key={key}>
							<FrontPageCoin key={key} details={coins[key]} name={key}/>
						</Link>
					))}
				</ul>
			</div>
		);
	}
};

export default FrontPage;
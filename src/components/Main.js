import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Coins from './Coins';
import DetailNews from './DetailNews';
import FrontPage from './FrontPage';
import NotFound from './NotFound';

class Main extends React.Component {
	render() {
		const { coins } = this.props;

		return (
			<Switch>
				<Route exact path='/' render={(props) => (
					<FrontPage {...props} coins={coins}/>
				)}/>

				<Route path='/coins' component={Coins}/>

				<Route path='/coin/:coinname' render={(props) => (
					<DetailNews {...props} coins={coins}/>
				)}/>

				<Route component={NotFound}></Route>
			</Switch>
		);
	}
};

export default Main;

/*
<Switch>
	<Route exact path='/' component={FrontPage}/>
	<Route path='/coins' component={Coins}/>
	<Route path='/coin/:coinname' component={DetailNews}/>
	<Route component={NotFound}></Route>
</Switch>
*/
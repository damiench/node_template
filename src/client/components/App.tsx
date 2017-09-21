import * as React from 'react';
import Home from './Home';
import About from './About';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import './App.scss';


interface IAppProps {
	location: string
};

export default class App extends React.Component<IAppProps, undefined> {

	render() {
		return (<div className='app-container'>
			Hello from tsx!
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="about">About</Link></li>
			</ul>
			<div className='list routes'>
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
			</div>
		</div>);
	}
};

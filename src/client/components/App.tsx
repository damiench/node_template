import * as React from 'react';

interface IAppProps {
	location: string
};

export default class App extends React.Component<IAppProps, undefined> {

	render() {
		return (<div>
			Hello from tsx!
		</div>);
	}
};

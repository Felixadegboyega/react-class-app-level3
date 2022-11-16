import React from "react";

class ClassBased extends React.Component {
	constructor(props) {
		super(props);
		this.state = {count: 0, firstname: ""};
		this.increase = this.increase.bind(this);
	}

	increase() {
		this.setState((prev) => ({
			...prev,
			count: prev.count + 1
		}))
	}

	render() {
		return (
			<>
				<h3 className="text-blue-600 text-2xl">{this.state.count}</h3>
				<button className="p-2 text-white bg-green-600 rounded" onClick={this.increase}>Increase</button>
				Hello, Class based Component is here
			</>
		)
	}

}

export default ClassBased;
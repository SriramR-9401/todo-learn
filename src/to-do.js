import React from "react";

class TODO extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: "",
			items: [],
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(e) {
		this.setState({ text: e.target.value });
	}
	handleSubmit(e) {
		e.preventDefault();
		if (this.state.text.length === 0) return;

		const newItem = {
			text: this.state.text,
			id: Date.now(),
		};
		this.setState((state) => ({
			items: state.items.concat(newItem),
			text: "",
		}));
	}
	render() {
		return (
			<div>
				<center>
					<h1>ToDo Application</h1>
				</center>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="id">
						<h4>Enter the Todo item</h4>
					</label>
					<br />
					<input id="id" onChange={this.handleChange} value={this.state.text} />
					<br />
					<button className="btn btn-danger another">Add</button>
				</form>
				<center>
					<div className="box">
						<h4>Todo-List</h4>
						<TODOList todoItem={this.state.items} />
					</div>
				</center>
				<br />
				<center>
					<button className="btn btn-danger" onClick={this.handleClick}>
						Clear All
					</button>
				</center>
			</div>
		);
	}
}

class TODOList extends React.Component {
	render() {
		return (
			<div>
				<div>
					{this.props.todoItem.map((item) => (
						<h5 key={item.id}>{item.text}</h5>
					))}
				</div>
			</div>
		);
	}
}
export default TODO;

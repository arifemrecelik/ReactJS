import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		counter : 0
	}
	
	increment = () => {
		//console.log("Worked");
		this.setState({
			counter: this.state.counter + 1
		});
	}

	decrement = () => {
		this.setState({
			counter: this.state.counter - 1
		})
	}

	render() {
		const myStyle = {
			backgroundColor: 'yellow'
		}
		
		return (
			<div className="App">
				<h1>Hi I'm a React App</h1>
				<p>This is really working</p>
				<p>{this.state.counter}</p>
				<button 
					style={myStyle}
					onClick={this.increment}> + </button>
				<button onClick={this.decrement}> - </button>
				<Person name="Arif Emre" age="24"/>
				<Person name="Eren" age="17">Test</Person>
			</div>
		);

		// return React.createElement('div', null, React.createElement('h1', null, 'Hi, I\'m a React App!!!'))
	}	
}

export default App;
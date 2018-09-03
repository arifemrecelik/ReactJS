import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		counter : 0
	}
	
	increment = () => {
		state.counter++;
	}

	render() {
		return (
			<div className="App">
				<h1>Hi I'm a React App</h1>
				<p>This is really working</p>
				<p>{this.state.counter}</p>
				<button onClick={this.increment}></button>
				<Person name="Arif Emre" age="24"/>
				<Person name="Eren" age="17"></Person>
			</div>
		);

		// return React.createElement('div', null, React.createElement('h1', null, 'Hi, I\'m a React App!!!'))
	}	
}

export default App;
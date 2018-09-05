import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		counter : 0,
		persons : [
			{name: "Arif Emre", age: 24},
			{name: "Eren", age: 17},
		],
		showAll : true
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

	showHide = () => {
		const temp = this.state.showAll;
		this.setState({showAll: !temp});
	}

	deletePerson = (personIndex) {
		const persons = this.state.persons.slice();
		persons.splice(personIndex, 1);
		this.setState({persons: persons});
	}

	render() {
		const myStyle = {
			backgroundColor: 'yellow'
		}

		let persons = null

		if(this.state.showAll) {
			persons = (
				<div>
					<h1>Hi I'm a React App</h1>
					<p>This is really working</p>
					<p>{this.state.counter}</p>							
					<button 
						style={myStyle}
						onClick={this.increment}> + </button>
					<button onClick={this.decrement}> - </button>							
					
					{this.state.persons.map(person => {
						return <Person 
							name={person.name}
							age={person.age} />
					})}

					{/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
					<Person name={this.state.persons[1].name} age={this.state.persons[1].age}/> */}
				</div> 
			)
		}
		
		return (
			<div className="App">
				<button onClick={this.showHide}>SHOW / HIDE</button>
				{persons}
			</div>
		);

		// return React.createElement('div', null, React.createElement('h1', null, 'Hi, I\'m a React App!!!'))
	}	
}

export default App;
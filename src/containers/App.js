import React, {Component} from 'react';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundary';
//import Scroll from './Scroll';
//import {robots} from './robots';
import 'tachyons'

class App extends Component{
	constructor(){
		super();
		this.state = {
			robots: [],
			searchfield: ''
		}
	}
	componentDidMount(){
		// fetch('https://jsonplaceholder.typicode.com/users')
		// .then(response =>response.json())
		// .then(users =>this.setState({robots: users}))

		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response =>{
			return response.json()
		})
		.then(users =>{
			this.setState({robots:users})
		})
	}
	//This will trigger on Search event Change
	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
	}
	render(){
		const {robots, searchfield} = this.state;
		const filteredData = robots.filter(robot =>{ 
			return robot.name.toLowerCase().includes(searchfield.toLowerCase())
		})
		return !robots.length ?
		<h1>Loading</h1>:
		(
			<div className = 'tc'> 
				<h1 className='f1 tc'> RoboFriends </h1>
				<SearchBox searchChange = {this.onSearchChange}/>
				<hr/>
				<ErrorBoundary>
					<CardList robots={filteredData}/>
				</ErrorBoundary>
			</div>
		);
	}
}
export default App;
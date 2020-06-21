import React, {Component} from 'react';

class ErrorBoundary extends Component{
	constructor(props){
		super(props);
		this.state = {
			hasError: false,
			error: ''
		}
	}

	 componentDidCatch(error, info){
	 	this.setState({hasError: true});
	 	this.setState({error: error});
	 }

	render(){
		if(this.state.hasError){
			return <h1>There is something wrong in the application</h1>
			//return <h1> {this.state.error} </h1>
		}
		else{
			return this.props.children;
		}
	}
}
export default ErrorBoundary;
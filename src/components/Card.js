import React, {Component} from 'react';
import '../components/Card.css';
import 'tachyons'

class Card extends Component{
	render(){
		const {name, email, id} = this.props;
		return (
			<div className='tc bg-light-green dib br2 pa3 ma2 grow bw2 shadow-5'>
				<img alt='S' src={`https://robohash.org/${id}`} className='w-100'/>
				<div>
					<h2>{name}</h2>
					<p>{email}</p>
				</div>
			</div>
		);
	}
}

export default Card;
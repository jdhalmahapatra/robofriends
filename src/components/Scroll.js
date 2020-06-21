import React from 'react';
import 'tachyons';

const Scroll = (props) =>{
	return (
		<div style={{overflowY: 'Scroll', height:'700px'}}>
			{props.children}
		</div>
	);
};
export default Scroll;
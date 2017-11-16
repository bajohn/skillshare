import React from 'react';
import ReactDOM from 'react-dom';


document.addEventListener("DOMContentLoaded",function()
{
	var rootEl = 	
	React.createElement('div', {id: 'reactroot'}, 
		React.createElement('div', {id: 'child'}, 'text inside the element')
	)
	console.log('running rebuilt', document);
	ReactDOM.render(
	  rootEl,
	  document.getElementById('root')
	);
})
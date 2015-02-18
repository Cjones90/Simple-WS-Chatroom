/** @jsx React.DOM */

var Index = React.createClass({
	getIntitialState: function () {
		return {}
	},

	render: function () {
		return (
			<div>
				<header>
				This is the header of my newly created Heroku Blog!
				</header>
				<div>
				Followed by some Body! It only took about 2 hours start till now.
				</div>
			</div>
		);
	}

})

React.render(<Index />, document.getElementById('index'));
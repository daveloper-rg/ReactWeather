var React = require('react');


var About = (props) => {
	return (
		<div>
			<h1 className="text-center page-title">About</h1>
			<p>This is my weather application build on React. By David</p>
			<p>
				here are some of the tools:
			</p>
			<ul>
				<li>
					<a href="https://facebook.github.io/react">React</a> - This was the JavaScript framework used.
				</li>
				<li>
					<a href="https://openweathermap.org">Open Weather Map</a>
				</li>
			</ul>
		</div>	
	)
};

module.exports = About;
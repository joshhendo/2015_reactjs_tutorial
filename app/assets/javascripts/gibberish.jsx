var mountNode = document.getElementById('renderme')

var GibberishApp = React.createClass({
	render: function() {
		return (
			<div>
				<GibberishList gibberishList={window.gibberish}/>
				<button onClick={this.handleSubmit}>Gibberish</button>
			</div>
		);
	},
	handleSubmit(e) {
		var state = function() { }
		state.server = "localhost:9000"
		state.num = 5
		window.getGibberish(state)
	}
});

var Gibberish = React.createClass({
	render: function() {
		var obj = this.props.gibberish
		return <div className="gibberish">{obj.subject} {obj.adverb} {obj.verb} {obj.adjective} {obj.object}</div>;
	}
});

var GibberishList = React.createClass({
	render: function() {
		return <ul>{this.props.gibberishList.map(function(item) {
			return <Gibberish gibberish={item} />
		})}</ul>;
	}
});

var rerender = function() {
	React.render(<GibberishApp />, mountNode)
}

rerender();

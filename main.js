var myReactElement = React.createElement('h1', {style: {color: 'blue'}}, 'I am a headline');

var actualDOMNode = document.getElementById('app')

ReactDOM.render(myReactElement, actualDOMNode)

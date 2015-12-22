
var React = require('react'),
    NameAdder = require('./name-adder.jsx'),
    NamesList = require('./names-list.jsx');
var ReactDOM = require('react-dom');

class NameManager extends React.Component {
    handleNameAdded() {
        this.refs.namesList.update()
    }

    render() {
        return (
            <div>
                <NameAdder url="/name" onAdded={this.handleNameAdded.bind(this)}/>
                <NamesList url="/names" ref="namesList"/>
            </div>
        )
    }
}

ReactDOM.render(<NameManager/>, document.querySelector('#demo'))
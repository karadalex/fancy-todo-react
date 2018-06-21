import React, { Component } from 'react';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
    }

    componentDidMount() {
        fetch('/api/v1/todos')
            .then(res => res.json())
            .then(todos => this.setState(
                {todos}, //ES6 equivalent style for .setState({todos: todos})
                () => console.log('TODOs fetched: ', todos))
            )
    }

    render() {
        return (
            <ul>
                {this.state.todos.map(todo => {
                    return <li key={todo.id}>{todo.task}</li>
                })}
            </ul>
        );
    }
}

export default TodoList;

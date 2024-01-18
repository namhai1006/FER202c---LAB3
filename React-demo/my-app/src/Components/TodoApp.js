import React, { Component } from "react";

class List extends Component {
  constructor(props) {
    super(props);

    // State to manage the list of to-do items
    this.state = {
      todos: [],
      newTodo: '',
    };
  }

  // Function to handle adding a new to-do item
  addTodo = () => {
    const { newTodo, todos } = this.state;
    if (newTodo.trim() !== '') {
      this.setState({
        todos: [...todos, newTodo],
        newTodo: '',
      });
    }
  };

  // Function to handle deleting a to-do item
  deleteTodo = (index) => {
    const { todos } = this.state;
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    this.setState({
      todos: updatedTodos,
    });
  };

  // JSX structure for the to-do list application
  render() {
    const { newTodo, todos } = this.state;

    return (
      <div>
        <h1>List of Items</h1>

        {/* Input for adding new to-do items */}
        <div>
          <input
            type="text"
            value={newTodo}
            onChange={(e) => this.setState({ newTodo: e.target.value })}
          />
          <button onClick={this.addTodo}>Add</button>
        </div>

        {/* Display the list of to-do items */}
        <h1>List of Items</h1>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => this.deleteTodo(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default List;

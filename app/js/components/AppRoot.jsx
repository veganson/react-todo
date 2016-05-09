const React = require('react');
const { Provider } = require('react-redux');

const AddTodo = require('./AddTodo.jsx');
const TodoList = require ('./TodoList.jsx');
const Footer = require('./Footer.jsx');
const store = require('../store');


const TodoApp = () => (
  <div>
    <AddTodo />
    <TodoList />
    <Footer />
  </div>
);

module.exports = (
  <Provider store={store}>
    <TodoApp />
  </Provider>
)

const React = require('react');
const { connect } = require('react-redux');

const { addTodo } = require('../actions');

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      dispatch(addTodo(input.value));
      input.value = '';
    }}>
      <input ref={node => {
        input = node;
      }} />
      <button>
        Add Todo
      </button>
    </form>
  );
};
module.exports = connect()(AddTodo);

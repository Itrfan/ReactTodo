import TodoItem from "./task";

function TodoList(){
    return (
      <ul class="list-group">
        <TodoItem name="Task 1" />
        <TodoItem name="Task 2" />
        <TodoItem name="Task 3" />
      </ul>
    );
}

export default TodoList;
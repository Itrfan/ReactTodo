import TodoItem from "./task";

function TodoList(props){
  const {todos} = props;
    return (
      <ul className="list-group">
        {todos.map((task) => {
          const {id, label, isCompleted} = task;
          return <TodoItem key={id} label={label} isCompleted={isCompleted} />
        })}
      </ul>
    );
}

export default TodoList;
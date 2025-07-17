import TodoItem from "./task";

function TodoList(props){
  const {todos, setList} = props;
    return (
      <ul className="list-group">
        {todos.map((task) => {
          const {id, label, isCompleted} = task;
          return <TodoItem key={id} id={id} label={label} isCompleted={isCompleted} todos={todos} setList={setList}/>
        })}
      </ul>
    );
}

export default TodoList;
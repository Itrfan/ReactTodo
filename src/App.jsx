import { useState } from "react";
import AddTodoForm from "./components/addnew";
import TodoList from "./components/list";

function App() {
  const [todos, setList] = useState([
    {
      id: 1,
      label: "Task 1",
      isCompleted: true,
    },
    {
      id: 2,
      label: "Task 2",
      isCompleted: false,
    },
    {
      id: 3,
      label: "Task 3",
      isCompleted: false,
    },
  ]);
  return (
    <div
      className="card rounded shadow-sm"
      style={{ maxWidth: "500px", margin: "60px auto" }}
    >
      <div className="card-body">
        <h3 className="card-title mb-3">My Todo List</h3>
        <TodoList todos={todos} setList={setList} />
        <div className="mt-4">
          <AddTodoForm
            onAddNew={(newValue) => {
              setList([
                ...todos,
                {
                  id: Math.random(),
                  label: newValue,
                },
              ]);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

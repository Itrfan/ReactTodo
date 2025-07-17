function TodoItem(props) {
  const { id, label, isCompleted, todos, setList } = props;
  const handleRemove = () => {
    const confirmRemove = window.confirm(
      "Are you sure you want to delete this task?"
    );
    if (confirmRemove) {
      const updatedList = todos.filter((item) => {
        if (item.id !== id) {
          return true;
        } else {
          return false;
        }
      });
      setList(updatedList);
    }
  };
  const handlecheck = () => {
    const updatedList = todos.map((item) => {
      if (item.id === id) {
        item.isCompleted = !isCompleted;
      }
      return item;
    });
    setList(updatedList);
  };
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        {isCompleted ? (
          <button className="btn btn-sm btn-success" onClick={handlecheck}>
            <i className="bi bi-check-square"></i>
          </button>
        ) : (
          <button className="btn btn-sm " onClick={handlecheck}>
            <i className="bi bi-square"></i>
          </button>
        )}
        <span
          className={isCompleted ? "ms-2 text-decoration-line-through" : "ms-2"}
        >
          {label}
        </span>
      </div>
      <div>
        <button className="btn btn-sm btn-danger" onClick={handleRemove}>
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </li>
  );
}

export default TodoItem;

function AddTodoForm(props) {
  const { onAddNew } = props;
  return (
    <form className="d-flex justify-content-between align-items-center">
      <input
        type="text"
        className="form-control"
        placeholder="Add new item..."
        id="taskname"
        required
      />
      <button
        className="btn btn-primary btn-sm rounded ms-2"
        onClick={(event) => {
          event.preventDefault();
          if (taskname.value === "") {
            alert("Please fill in the task name")
          } else {
            onAddNew(taskname.value);
            taskname.value = "";
          }
        }}
      >
        Add
      </button>
    </form>
  );
}

export default AddTodoForm;

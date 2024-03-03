import { useDispatch, useSelector } from "react-redux";
import { fetchTodo } from "./redux/todoSlicer";
import { useEffect } from "react";

const Todo = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.todo);

  useEffect(() => {
    dispatch(fetchTodo());
  }, []);

  return (
    <div>
      {data.isLoading ? (
        <h1>Loading...</h1>
      ) : (
        data.data.map((todo) => {
          return <h3 key={todo.id}>{todo.title}</h3>;
        })
      )}
    </div>
  );
};

export default Todo;

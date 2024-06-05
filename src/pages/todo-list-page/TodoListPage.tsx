import { Result, Row, Space, Spin } from "antd";
import { observer } from "mobx-react-lite";
import { FC, useEffect } from "react";
import todoStore from "../../entities/todo/model/todoStore";
import { TodoItem } from "../../entities/todo";
import { ToggleTodo } from "../../features/toggleTodo/ToggleTodo";
import { TodoFilter } from "../../features/todoFilter/TodoFilter";

const TodoListPage: FC = observer(() => {
  const { todos, todosError, getTodos, isFetching } = todoStore;

  useEffect(() => {
    getTodos({});
  }, []);

  if (todosError) {
    return <Result title={todosError} />;
  }

  return (
    <Space direction="vertical">
      <TodoFilter onClick={getTodos} />
      {isFetching ? (
        <Spin />
      ) : (
        todos.map((todo) => (
          <Row>
            <TodoItem
              title={todo.title}
              id={todo.id}
              key={todo.id}
              action={<ToggleTodo todo={todo} />}
            />
          </Row>
        ))
      )}
    </Space>
  );
});

export default TodoListPage;

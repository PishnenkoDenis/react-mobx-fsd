import { Result, Row } from "antd";
import { FC, useEffect } from "react";
import todoStore from "../../entities/todo/model/todoStore";
import { observer } from "mobx-react-lite";
import { TodoDetail } from "../../entities/todo";
import { ToggleTodo } from "../../features/toggleTodo/ToggleTodo";
import { useParams } from "react-router-dom";

const TodoDetailsPage: FC = observer(() => {
  const { getTodo, isFetching, todoError, todo } = todoStore;

  const { id } = useParams();

  useEffect(() => {
    if (id) getTodo(id);
  }, [id]);

  return (
    <Row justify={"center"} align={"middle"}>
      {todoError ? (
        <Result title={todoError} />
      ) : (
        <TodoDetail
          title={`Todo-${todo?.id}`}
          text={todo?.title}
          loading={isFetching}
          actions={todo ? [<ToggleTodo todo={todo} />] : []}
        />
      )}
    </Row>
  );
});

export default TodoDetailsPage;

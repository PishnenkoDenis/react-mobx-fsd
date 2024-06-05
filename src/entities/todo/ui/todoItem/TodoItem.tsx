import { Card } from "antd";
import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

type TTodoItemProps = {
  title: string;
  id: number;
  action: ReactNode;
};

export const TodoItem: FC<TTodoItemProps> = ({ title, id, action }) => {
  return (
    <Card style={{ width: "600px" }}>
      {action}
      <Link to={`/${id}`} style={{ marginLeft: "1rem" }}>
        {title}
      </Link>
    </Card>
  );
};

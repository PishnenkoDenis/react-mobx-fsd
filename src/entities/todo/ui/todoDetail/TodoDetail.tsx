import { Card } from "antd";
import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

type TDetailProps = {
  title: string;
  text: string | undefined;
  actions: ReactNode[];
  loading: boolean;
};

export const TodoDetail: FC<TDetailProps> = ({
  title,
  actions,
  text,
  loading,
}) => {
  return (
    <Card
      title={title}
      loading={loading}
      actions={actions}
      extra={<Link to={"/"}>Back</Link>}
    >
      {text}
    </Card>
  );
};

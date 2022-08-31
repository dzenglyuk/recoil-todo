import type { FC } from "react";
import { memo } from "react";
import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../../state/todoList";
import { Typography } from "antd";

const TodoListStats: FC = () => {
  const { totalNum, totalCompletedNum, percentCompleted } =
    useRecoilValue(todoListStatsState);

  return (
    <Typography.Title level={4}>
      Completed: {totalCompletedNum}/{totalNum}, {percentCompleted}%
    </Typography.Title>
  );
};

export default memo(TodoListStats);

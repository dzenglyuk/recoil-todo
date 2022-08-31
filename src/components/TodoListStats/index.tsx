import type { FC } from "react";
import { memo } from "react";
import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../../state/todoList";

const TodoListStats: FC = () => {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } =
    useRecoilValue(todoListStatsState);

  return (
    <div>
      <ul>
        <li>Total items: {totalNum}</li>
        <li>Items completed: {totalCompletedNum}</li>
        <li>Items not completed: {totalUncompletedNum}</li>
        <li>Completed: {percentCompleted}%</li>
      </ul>
    </div>
  );
};

export default memo(TodoListStats);

import React from "react";

export default function TaskList({ tasks }) {
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>{task.task}</div>
      ))}
    </div>
  );
}

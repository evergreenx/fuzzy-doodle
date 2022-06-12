import * as React from "react";
import { getDate } from "./helpers/getDate";
import Divider from "@mui/material/Divider";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import BasicModal from "./Modal";
import TaskList from "./TaskList";


const { day, month, dayString } = getDate();

export default function BasicCard() {
  const [open, setOpen] = React.useState(false);
  const [inputTask, setInputTask] = React.useState("");
  const [tasks, setTasks] = React.useState([
    {
      id: 1,
      task: "Learn React",
      completed: false,
    },
    {
      id: 2,
      task: "Learn Node",
      completed: false,
    },
  ]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getOrdinalNum = (number) => {
    let selector;

    if (number <= 0) {
      selector = 4;
    } else if ((number > 3 && number < 21) || number % 10 > 3) {
      selector = 0;
    } else {
      selector = number % 10;
    }

    return number + ["th", "st", "nd", "rd", ""][selector];
  };

  return (
    <>
      <div className="bg-white shadow-2xl w-[30%] mx-auto p-4 rounded-xl ">
        <div className="flex items-center justify-between py-2 ">
          <h1 className="text-2xl font-bold">
            {dayString}
            <span className="">,</span>
            <span className="text-gray-600 font-normal">
              {getOrdinalNum(day)}
            </span>
          </h1>
          {<p className="text-sm text-gray-300 ">length of tasks</p>}
        </div>
        <h4 className="text-gray-400 text-xl pb-5">{month}</h4>

        <Divider />

        <div className=" relative top-[-1.8rem] flex justify-end">
          <Fab
            color="secondary"
            aria-label="add"
            onClick={() => {
              handleOpen();
            }}
          >
            <AddIcon />
          </Fab>
        </div>

        <TaskList tasks={tasks} />
      </div>
      <BasicModal
        handleOpen={handleOpen}
        handleClose={handleClose}
        open={open}
        setOpen={setOpen}
        inputTask={inputTask}
        setInputTask={setInputTask}
        tasks={tasks}
        setTasks={setTasks}
      />
    </>
  );
}

import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({
  handleClose,
  open,
  setInputTask,
  inputTask,
  tasks,
  setTasks,
}) {
  const handleTasks = () => {
    setTasks([...tasks, { id: tasks.length + 1, task: inputTask }]);
    setInputTask("");
    handleClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          className="bg-white shadow-2xl w-[30%] mx-auto p-4 rounded-xl "
        >
          <input
            type="text"
            placeholder="Enter your task"
            value={inputTask}
            onChange={(e) => {
              setInputTask(e.target.value);
            }}
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          />

          <button
            onClick={handleTasks}
            className="bg-orange-500 my-3 w-full hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg"
          >
            Add
          </button>
        </Box>
      </Modal>
    </div>
  );
}

import TodoItem from "./TodoItem";
import { useState } from "react";

function TodoList() {
    const [tasks, setTasks] = useState([
        { id: 1, name: "Learn React", isCompleted: true },
        { id: 2, name: "Learn Tailwind CSS", isCompleted: true },
        { id: 3, name: "Build a project", isCompleted: false },
    ]);
    const [newTask, setNewTask] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleAddTask = (e) => {
        e.preventDefault();
        if (!newTask.trim()) return;

        setIsLoading(true);
        setTimeout(() => {
            const newTaskItem = { id: Date.now(), name: newTask, isCompleted: false };
            setTasks([newTaskItem, ...tasks]);
            setNewTask("");
            setIsLoading(false);
        }, 500);
    };

    const handleRemoveTask = (taskId) => {
        setIsLoading(true);
        setTimeout(() => {
            setTasks(tasks.filter((task) => task.id !== taskId));
            setIsLoading(false);
        }, 500);
    };

    const handleCompleteTask = (taskId) => {
        setTasks(tasks.map((task) =>
            task.id === taskId
                ? { ...task, isCompleted: !task.isCompleted }
                : task
        ));
    };

    return (
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">My Tasks</h1>

            <form onSubmit={handleAddTask} className="flex gap-4 mb-6">
                <input
                    type="text"
                    value={newTask}
                    onChange={(e)=>{setNewTask(e.target.value)}}
                    className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Add new task"
                />
                <button
                    type="submit"
                    className={`px-6 py-3 shrink-0 text-white font-bold rounded-md focus:outline-none transition duration-200 ${
                        !newTask.trim() ? 'bg-green-300 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'
                    }`}
                    disabled={!newTask.trim()}
                >
                    Add Task
                </button>
            </form>

            {isLoading && (
                <div className="flex justify-center items-center mb-6">
                    <div className="w-6 h-6 border-4 border-t-4 border-gray-200 border-t-green-500 rounded-full animate-spin"></div>
                </div>
            )}

            <div>
                {!tasks.length ? (
                    <p className="text-center text-gray-500">No tasks yet! Add some!</p>
                ) : (
                    tasks.map((task) => (
                        <TodoItem
                            key={task.id}
                            task={task}
                            onComplete={() => handleCompleteTask(task.id)}
                            onRemove={() => handleRemoveTask(task.id)}
                        />
                    ))
                )}
            </div>
        </div>
    );
}

export default TodoList;

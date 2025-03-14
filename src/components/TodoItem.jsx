function TodoItem({ task, onRemove, onComplete }) {
    return (
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm mb-4 flex gap-5 justify-between items-center">
            <span className={`text-lg ${task.isCompleted ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                {task.name}
            </span>
            <div className="flex gap-4">
                <button
                    onClick={onComplete}
                    className={`px-4 py-2 rounded-md font-semibold text-white transition duration-200 ${
                        task.isCompleted ? 'bg-yellow-500 hover:bg-yellow-400' : 'bg-green-500 hover:bg-green-600'
                    }`}
                >
                    {task.isCompleted ? "Undo" : "Complete"}
                </button>
                <button
                    onClick={onRemove}
                    className="px-4 py-2 rounded-md font-semibold text-white bg-red-500 hover:bg-red-600"
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default TodoItem;

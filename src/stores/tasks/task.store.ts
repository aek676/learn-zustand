import { create, StateCreator } from "zustand";
import type { Task, TaskStatus } from "../../interfaces";
import { devtools, persist } from "zustand/middleware";
import { v4 } from "uuid";
import { immer } from "zustand/middleware/immer";


interface TaskState {

    draggingTaskId?: string;
    tasks: Record<string, Task>;

    getTasksByStatus: (status: TaskStatus) => Task[];
    addTask: (title: string, status: TaskStatus) => void;

    onTaskDrop: (status: TaskStatus) => void;
    setDraggingTaskId: (taskId: string) => void;
    removeDraggingTaskId: () => void;
    changeTaskStatus: (taskId: string, progress: TaskStatus) => void;

}

const storeApi: StateCreator<TaskState, [["zustand/immer", never]]> = (set, get) => ({
    tasks: {
        'ABC-1': { id: 'ABC-1', title: 'Task 1', status: 'open' },
        'ABC-2': { id: 'ABC-2', title: 'Task 2', status: 'in-progress' },
        'ABC-3': { id: 'ABC-3', title: 'Task 3', status: 'open' },
        'ABC-4': { id: 'ABC-4', title: 'Task 4', status: 'open' },
    },
    getTasksByStatus: (status: TaskStatus) => {
        return Object.values(get().tasks).filter(task => task.status === status);
    },
    onTaskDrop: (status: TaskStatus) => {
        const draggingTaskId = get().draggingTaskId;
        if (!draggingTaskId) return;

        const draggingTask = get().tasks[draggingTaskId];
        if (draggingTask.status === status) return;

        get().changeTaskStatus(draggingTaskId, status);
        get().removeDraggingTaskId();
    },
    setDraggingTaskId: (taskId: string) => {
        set({ draggingTaskId: taskId });
    },
    removeDraggingTaskId: () => set({ draggingTaskId: undefined }),
    changeTaskStatus: (taskId: string, progress: TaskStatus) => {
        set(state => {
            state.tasks[taskId].status = progress;
        })

        // #### Alternative without immer
        // set({
        //     tasks: {
        //         ...get().tasks,
        //         [taskId]: updatedTask
        //     }
        // })
    },
    addTask: (title: string, status: TaskStatus) => {
        const newTask: Task = { id: v4(), title, status };
        set(state => {
            state.tasks[newTask.id] = newTask;
        });
    }
})

export const useTaskStore = create<TaskState>()(
    devtools(
        persist(
            immer(
                storeApi
            ),
            { name: 'task-storage' }
        )
    )
);
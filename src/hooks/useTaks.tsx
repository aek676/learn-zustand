import { DragEvent, useState } from "react";
import Swal from "sweetalert2";
import { useTaskStore } from "../stores";
import { TaskStatus } from "../interfaces";

interface Options {
    status: TaskStatus
}

export const useTasks = ({ status }: Options) => {
    const isDragging = useTaskStore(state => !!state.draggingTaskId);
    const [onDragOver, setOnDragOver] = useState(false);
    const setTasksByStatus = useTaskStore((state) => state.onTaskDrop);
    const addTask = useTaskStore((state) => state.addTask);

    const handleAddTask = async () => {
        const { isConfirmed, value } = await Swal.fire({
            title: 'Nueva Tarea',
            input: 'text',
            inputLabel: 'Nombre de la tarea',
            inputPlaceholder: 'Ingrese el nombre de la tarea',
            showCancelButton: true,
            inputValidator: (status) => {
                if (!status) {
                    return 'Debe de ingresar el nombre de la tarea'
                }
            }
        })
        if (!isConfirmed) return;

        addTask(value, status);
    }

    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setOnDragOver(true);
    }

    const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setOnDragOver(false);
    }

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setTasksByStatus(status);
        setOnDragOver(false);
    }

    return {
        isDragging,
        
        onDragOver,
        handleAddTask,
        handleDragOver,
        handleDragLeave,
        handleDrop
    }
}
interface TaskInterface {
    id: number,
    content: string,
    done: boolean,
    date: Date,
}

export interface CircleInterface {
    setTasks: CallableFunction,
    done: boolean
    id: number
}

// for individual task components
export interface IndivTaskInterface extends TaskInterface {
    setPreviewMode: CallableFunction,
    setEditMode: CallableFunction,
    setTargetID: CallableFunction,
    setTasks: CallableFunction
}

export default TaskInterface;
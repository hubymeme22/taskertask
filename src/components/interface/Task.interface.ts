interface TaskInterface {
    id: number,
    content: string,
    done: boolean,
    date: Date,
}

export interface CircleInterface {
    username: string,
    userkey: string,
    setTasks: CallableFunction,
    done: boolean
    id: number
}

// for individual task components
export interface IndivTaskInterface extends TaskInterface {
    username: string,
    userkey: string,
    setPreviewMode: CallableFunction,
    setEditMode: CallableFunction,
    setTargetID: CallableFunction,
    setTasks: CallableFunction
}

export default TaskInterface;